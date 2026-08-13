const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const searchPanel = document.querySelector(".search-panel");
const searchTrigger = document.querySelector(".search-trigger");
const closeSearch = document.querySelector(".close-search");
const globalSearch = document.querySelector("#global-search");
const heroSearch = document.querySelector("#hero-search");
const heroSearchForm = document.querySelector(".hero-search");
const searchResults = document.querySelector("#search-results");
const eventDialog = document.querySelector("#event-dialog");
const savedCount = document.querySelector("#saved-count");

const roleContent = {
  coach: {
    label: "School coach view",
    title: "Plan the season in one place",
    copy: "See nearby camps, competition deadlines, team registration tasks, and fashion consultation next steps.",
    nextTitle: "2026-2027 Competition Dates",
    nextText: "Recommended for school coaches planning the season."
  },
  parent: {
    label: "Parent view",
    title: "Follow your athlete without the hunt",
    copy: "See upcoming competitions, livestreams, payment reminders, hotel information, and official answers.",
    nextTitle: "Saved athlete streams",
    nextText: "Coverage and reminders are grouped around your athlete."
  },
  athlete: {
    label: "Athlete view",
    title: "Stay ready for camp, game day, and competition",
    copy: "Explore uniforms, shoes, campwear, event schedules, Varsity TV replays, and team moments.",
    nextTitle: "New fashion collections",
    nextText: "Styles and gear recommended for your team lane."
  },
  fan: {
    label: "Fan view",
    title: "Watch, follow, and shop the event",
    copy: "Find live streams, replays, results, news, and event merchandise connected to teams you follow.",
    nextTitle: "Varsity TV live schedule",
    nextText: "Your favorite competition coverage is one tap away."
  }
};

const resultData = [
  {
    type: "Event",
    title: "2026 The D2 Summit",
    copy: "Dates, Orlando location, registration, livestream, results, rules, FAQs, travel, and event merchandise.",
    terms: "d2 summit schedule competition results rules orlando"
  },
  {
    type: "Camp",
    title: "UCA Cheer Camp near Memphis",
    copy: "Camp discovery by location, date, brand, and program type with registration surfaced early.",
    terms: "camp uca cheer memphis registration summer"
  },
  {
    type: "Video",
    title: "Summer All Level Championship",
    copy: "Live, upcoming, replay, saved-team alerts, and related Varsity TV coverage.",
    terms: "varsity tv stream live summer all level watch replay"
  },
  {
    type: "Product",
    title: "Varsity cheer shoes",
    copy: "Footwear and event gear recommendations connected to teams, seasons, and registrations.",
    terms: "shop shoes cheer footwear apparel merchandise"
  },
  {
    type: "Support",
    title: "Registration and payment help",
    copy: "Contextual support for account access, payments, registration status, and rep contact.",
    terms: "support help payment account registration contact rep"
  },
  {
    type: "Guide",
    title: "Competition registration deadlines",
    copy: "Direct answers with dates, deadlines, payment milestones, and last-updated freshness signals.",
    terms: "deadline dates faq how do i register"
  }
];

function setHeaderElevation() {
  header.dataset.elevated = String(window.scrollY > 8);
  body.classList.toggle("has-scrolled", window.scrollY > 120);
}

function renderResults(query = "") {
  const normalized = query.trim().toLowerCase();
  const matches = resultData.filter((item) => {
    if (!normalized) return true;
    return `${item.type} ${item.title} ${item.copy} ${item.terms}`.toLowerCase().includes(normalized);
  });

  searchResults.innerHTML = matches.length
    ? matches
        .map(
          (item) => `
            <article class="search-result">
              <span>${item.type}</span>
              <div>
                <h3>${item.title}</h3>
                <p>${item.copy}</p>
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="search-result"><span>No match</span><div><h3>Try a broader search</h3><p>Search across events, camps, articles, products, videos, and support topics.</p></div></article>`;
}

function openSearch(value = "") {
  searchPanel.hidden = false;
  body.classList.add("is-locked");
  globalSearch.value = value;
  renderResults(value);
  window.setTimeout(() => globalSearch.focus(), 50);
}

function closeSearchPanel() {
  searchPanel.hidden = true;
  body.classList.remove("is-locked");
  searchTrigger.focus();
}

function updateRole(role) {
  const content = roleContent[role];
  if (!content) return;

  document.querySelector("#profile-label").textContent = content.label;
  document.querySelector("#profile-title").textContent = content.title;
  document.querySelector("#profile-copy").textContent = content.copy;
  document.querySelector("#next-up-title").textContent = content.nextTitle;
  document.querySelector("#next-up-text").textContent = content.nextText;
}

window.addEventListener("scroll", setHeaderElevation, { passive: true });
setHeaderElevation();
renderResults();

navToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

primaryNav.addEventListener("click", () => {
  primaryNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
});

searchTrigger.addEventListener("click", () => openSearch());
closeSearch.addEventListener("click", closeSearchPanel);

searchPanel.addEventListener("click", (event) => {
  if (event.target === searchPanel) {
    closeSearchPanel();
  }
});

globalSearch.addEventListener("input", (event) => {
  renderResults(event.target.value);
});

heroSearchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openSearch(heroSearch.value);
});

document.querySelectorAll(".role-switcher button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".role-switcher button").forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
    });
    button.setAttribute("aria-selected", "true");
    updateRole(button.dataset.role);
  });
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filters button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    document.querySelectorAll(".content-card").forEach((card) => {
      const isVisible = filter === "all" || card.dataset.kind === filter;
      card.classList.toggle("is-hidden", !isVisible);
    });
  });
});

document.querySelectorAll("[data-open-event]").forEach((button) => {
  button.addEventListener("click", () => {
    if (typeof eventDialog.showModal === "function") {
      eventDialog.showModal();
    } else {
      window.location.hash = "event-details";
    }
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  eventDialog.close();
});

let saved = Number(savedCount.textContent);

document.querySelectorAll(".save-stream, [data-save-watch]").forEach((button) => {
  button.addEventListener("click", () => {
    saved += 1;
    savedCount.textContent = String(saved);
    button.textContent = "Saved";
    button.disabled = true;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !searchPanel.hidden) {
    closeSearchPanel();
  }
});
