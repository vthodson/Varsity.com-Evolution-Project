(() => {
  const sources = [
    ['index.html', 'Project Hub'],
    ['product-strategy.html', 'Product Strategy'],
    ['current-varsity-feedback.html', 'Current Varsity.com Feedback'],
    ['content-strategy.html', 'Content Strategy'],
    ['ia-wireframe.html', 'Prototype Wireframes'],
    ['project-plan.html', 'Project Plan'],
    ['tech.html', 'Tech']
  ];
  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const terms = (value) => normalize(value).toLowerCase().split(/\s+/).filter((term) => term.length > 1);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const score = (item, query) => query.reduce((total, term) => total + (item.title.toLowerCase().includes(term) ? 6 : 0) + (item.content.toLowerCase().includes(term) ? 1 : 0), 0);

  function addStyles() {
    const style = document.createElement('style');
    style.textContent =       '.site-search{position:relative;margin-left:auto;width:min(280px,25vw)}' +
      '.site-search input{width:100%;min-height:38px;border:1px solid rgba(9,43,73,.22);border-radius:999px;background:#fff;color:#092b49;padding:8px 14px;font:inherit;font-size:13px}' +
      '.site-search input:focus{outline:3px solid rgba(0,185,236,.26);border-color:#00b9ec}' +
      '.site-search-results{position:absolute;z-index:30;top:calc(100% + 8px);right:0;width:min(440px,88vw);max-height:min(520px,65vh);overflow-y:auto;border:1px solid rgba(9,43,73,.18);border-radius:14px;background:#fff;box-shadow:0 16px 42px rgba(4,22,40,.2);padding:6px;color:#092b49}' +
      '.site-search-results a{display:grid;gap:4px;padding:10px 12px;border-radius:9px;color:inherit;text-decoration:none}.site-search-results a:hover,.site-search-results a:focus{background:#eaf9ff;outline:none}.site-search-results strong{font-size:14px}.site-search-results span{color:#53697c;font-size:12px;line-height:1.35}.site-search-focus{outline:3px solid #00b9ec!important;outline-offset:5px}@media(max-width:760px){.site-search{width:100%;margin-left:0}.site-search-results{left:0;right:auto;width:100%}}';
    document.head.append(style);
  }

  async function buildIndex() {
    const documents = await Promise.all(sources.map(async ([url, label]) => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) return [];
        const parsed = new DOMParser().parseFromString(await response.text(), 'text/html');
        return [...parsed.querySelectorAll('h1,h2,h3,article,section.strategy-section')].map((element) => {
          const content = normalize(element.textContent);
          const heading = element.matches('h1,h2,h3') ? element : element.querySelector('h1,h2,h3');
          const title = normalize(heading?.textContent || content.slice(0, 88));
          return content.length >= 8 ? { title, content, label, url: url + '?site-search=' + encodeURIComponent(title) } : null;
        }).filter(Boolean);
      } catch { return []; }
    }));
    return documents.flat();
  }

  function addSearch() {
    const nav = document.querySelector('.project-nav');
    if (!nav || nav.querySelector('.site-search')) return;
    addStyles();
    const wrapper = document.createElement('div');
    wrapper.className = 'site-search';
    wrapper.innerHTML = '<label class="sr-only" for="site-global-search">Search the Varsity.com evolution project</label><input id="site-global-search" type="search" placeholder="Search this project" autocomplete="off" aria-controls="site-search-results"><div id="site-search-results" class="site-search-results" role="listbox" hidden></div>';
    nav.append(wrapper);
    const input = wrapper.querySelector('input');
    const results = wrapper.querySelector('.site-search-results');
    let index = [];
    const render = () => {
      const query = terms(input.value);
      if (!query.length) { results.hidden = true; results.replaceChildren(); return; }
      if (!index.length) { results.hidden = false; results.textContent = 'Preparing search…'; return; }
      const matches = index.map((item) => ({ item, value: score(item, query) })).filter(({ value }) => value >= query.length).sort((a, b) => b.value - a.value || a.item.title.localeCompare(b.item.title)).slice(0, 8);
      results.replaceChildren(); results.hidden = false;
      if (!matches.length) { results.textContent = 'No matching project content.'; return; }
      matches.forEach(({ item }) => {
        const link = document.createElement('a'); link.href = item.url; link.setAttribute('role', 'option');
        link.innerHTML = '<strong>' + escapeHtml(item.title) + '</strong><span>' + escapeHtml(item.label + ' · ' + item.content.slice(0, 130) + (item.content.length > 130 ? '…' : '')) + '</span>';
        results.append(link);
      });
    };
    input.addEventListener('input', render);
    input.addEventListener('keydown', (event) => { if (event.key === 'Enter') results.querySelector('a')?.click(); if (event.key === 'Escape') { input.value = ''; render(); input.blur(); } });
    document.addEventListener('click', (event) => { if (!wrapper.contains(event.target)) results.hidden = true; });
    buildIndex().then((items) => { index = items; render(); }).catch(() => { results.textContent = 'Search is unavailable. Please refresh and try again.'; });
  }

  function focusSearchMatch() {
    const query = new URLSearchParams(location.search).get('site-search');
    if (!query) return;
    const queryTerms = terms(query);
    const match = [...document.querySelectorAll('h1,h2,h3,article,section')].filter((element) => queryTerms.every((term) => normalize(element.textContent).toLowerCase().includes(term))).sort((a, b) => normalize(a.textContent).length - normalize(b.textContent).length)[0];
    if (!match) return;
    match.classList.add('site-search-focus'); match.tabIndex = -1; match.scrollIntoView({ behavior: 'smooth', block: 'center' }); match.focus({ preventScroll: true });
  }
  addSearch(); window.addEventListener('load', focusSearchMatch);
})();
