const view = document.querySelector("#view");
const breadcrumbs = document.querySelector("#breadcrumbs");
const menu = document.querySelector("#site-menu");
const menuButton = document.querySelector(".menu-button");
const searchForm = document.querySelector("#site-search-form");
const searchInput = document.querySelector("#site-search");
const searchResults = document.querySelector("#search-results");

const eventData = [
  {
    id: "d2-summit",
    title: "The D2 Summit",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "May 8-10, 2026",
    sortDate: "2026-05-10",
    location: "Orlando, FL",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-cheer-camp",
    title: "UCA Cheer Camp",
    type: "Camp",
    activity: "Cheer",
    audience: "School",
    brand: "UCA",
    date: "June 22-25, 2026",
    sortDate: "2026-06-25",
    location: "Memphis, TN",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Not applicable",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Not applicable"
  },
  {
    id: "uda-dance-championship",
    title: "UDA Dance Team Championship",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "February 6-8, 2027",
    sortDate: "2027-02-08",
    location: "Orlando, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nda-dallas-regional",
    title: "NDA Dallas Regional Championship",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    date: "November 14, 2026",
    sortDate: "2026-11-14",
    location: "Dallas, TX",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nda-dallas-camp",
    title: "NDA Dallas Dance Camp",
    type: "Camp",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    date: "July 19-22, 2026",
    sortDate: "2026-07-22",
    location: "Dallas, TX",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Not applicable",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Not applicable"
  },
  {
    id: "nda-nationals",
    title: "NDA National Championship",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    date: "March 6-8, 2027",
    sortDate: "2027-03-08",
    location: "Orlando, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "celebration-of-bands",
    title: "Celebration of Bands",
    type: "Performing Arts Event",
    activity: "Band",
    audience: "Performing Arts",
    brand: "Varsity Performing Arts",
    date: "Fall 2026",
    sortDate: "2026-10-01",
    location: "Multiple locations",
    registration: "Contact rep",
    myVarsity: "Not available",
    tickets: "Varies",
    gear: "Not applicable",
    watch: "Not streamed",
    results: "Not applicable"
  },
  {
    id: "yearbook-workshop",
    title: "Yearbook Adviser Workshop",
    type: "Workshop",
    activity: "Yearbook",
    audience: "Adviser",
    brand: "Varsity Yearbook",
    date: "August 2026",
    sortDate: "2026-08-01",
    location: "Online",
    registration: "Open",
    myVarsity: "Not available",
    tickets: "Not applicable",
    gear: "Not applicable",
    watch: "Replay available",
    results: "Not applicable"
  },
  {
    id: "uda-great-lakes-dance-challenge",
    title: "UDA Great Lakes Dance Challenge",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "November 7, 2026",
    sortDate: "2026-11-07",
    location: "Commerce Township, MI",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-uda-mile-high-regional",
    title: "UCA/UDA Mile High Regional",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "UCA UDA",
    date: "November 14, 2026",
    sortDate: "2026-11-14",
    location: "Denver, CO",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uda-bluegrass-regional",
    title: "UDA Bluegrass Regional",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "November 22, 2026",
    sortDate: "2026-11-22",
    location: "Lexington, KY",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uda-missouri-dance-challenge",
    title: "UDA Missouri Dance Challenge",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "November 22, 2026",
    sortDate: "2026-11-22",
    location: "St. Louis, MO",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uda-chicagoland-dance-challenge",
    title: "UDA Chicagoland Dance Challenge",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Illinois",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uda-florida-dance-championship",
    title: "UDA Florida Dance Championship",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "January 18, 2027",
    sortDate: "2027-01-18",
    location: "Orlando, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uda-rocky-mountain-dance-challenge",
    title: "UDA Rocky Mountain Dance Challenge",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "UDA",
    date: "2027 date TBD",
    sortDate: "2027-01-01",
    location: "Denver, CO",
    registration: "Coming soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nda-midwest-regional",
    title: "NDA Midwest Regional",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    date: "December 13, 2026",
    sortDate: "2026-12-13",
    location: "Westfield, IN",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nda-blue-springs-regional",
    title: "NDA Blue Springs Regional",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    date: "January 16, 2027",
    sortDate: "2027-01-16",
    location: "Blue Springs, MO",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-missouri-regional",
    title: "NCA Missouri Regional",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "NCA",
    date: "November 15, 2026",
    sortDate: "2026-11-15",
    location: "Columbia, MO",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-tulsa-regional",
    title: "NCA Tulsa Regional",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "NCA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Tulsa, OK",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-missouri-regional",
    title: "UCA Missouri Regional",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "UCA",
    date: "November 7, 2026",
    sortDate: "2026-11-07",
    location: "Riverside, MO",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-hoosier-regional",
    title: "UCA Hoosier Regional",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "UCA",
    date: "November 15, 2026",
    sortDate: "2026-11-15",
    location: "Indianapolis, IN",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-bluegrass-regional",
    title: "UCA Bluegrass Regional DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "UCA",
    date: "November 21, 2026",
    sortDate: "2026-11-21",
    location: "Lexington, KY",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "the-summit-2027",
    title: "The Summit Championship",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "April 29-May 2, 2027",
    sortDate: "2027-05-02",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "dance-summit-2027",
    title: "The Dance Summit Championship",
    type: "Competition",
    activity: "Dance",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "April 30-May 2, 2027",
    sortDate: "2027-05-02",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "small-gym-summit-2027",
    title: "The Small Gym Summit",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "May 6-7, 2027",
    sortDate: "2027-05-07",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "d2-summit-2027",
    title: "The D2 Summit",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "May 7-9, 2027",
    sortDate: "2027-05-09",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "the-celebration-2027",
    title: "The Celebration",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Varsity All Star",
    date: "April 24-25, 2027",
    sortDate: "2027-04-25",
    location: "Sacramento, CA",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "uca-uda-all-star-nationals-2027",
    title: "UCA/UDA All Star National Championship",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "UCA UDA",
    date: "March 13-14, 2027",
    sortDate: "2027-03-14",
    location: "Orlando, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-high-school-nationals-2027",
    title: "NCA High School Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "NCA",
    date: "January 22-25, 2027",
    sortDate: "2027-01-25",
    location: "Fort Worth, TX",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nssc-dii-2027",
    title: "National School Spirit Championship DII",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "NSSC",
    date: "January 29-31, 2027",
    sortDate: "2027-01-31",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nssc-di-2027",
    title: "National School Spirit Championship DI",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "NSSC",
    date: "February 4-7, 2027",
    sortDate: "2027-02-07",
    location: "Walt Disney World Resort, FL",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-nda-rockies-regional",
    title: "NCA & NDA Rockies Regional",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "NCA NDA",
    date: "November 21-22, 2026",
    sortDate: "2026-11-22",
    location: "Highlands Ranch, CO",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "spirit-sports-kansas-city",
    title: "Spirit Sports Kansas City",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Spirit Sports",
    date: "February 6-7, 2027",
    sortDate: "2027-02-07",
    location: "Kansas City, MO",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "usa-virtual-spirit-qualifier-2026",
    title: "USA Virtual Spirit Qualifier",
    type: "Virtual Event",
    activity: "Cheer",
    audience: "School",
    brand: "USA",
    date: "October 31-November 8, 2026",
    sortDate: "2026-11-08",
    location: "Virtual, CA",
    venue: "Virtual USA",
    addressLines: ["Virtual Event", "Virtual, CA, 90630", "US"],
    doorOpenLines: ["Tuesday Doors Open - 8:00 AM", "Wednesday Doors Open - 8:00 AM"],
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Not applicable",
    gear: "Not applicable",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-dance-regional-v-2026",
    title: "USA Southern California Dance Regional V",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "December 19, 2026",
    sortDate: "2026-12-19",
    location: "Glendale, CA",
    venue: "Glendale High School",
    addressLines: ["1440 E Broadway", "Glendale, CA, 91205-1598", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-norcal-dance-regional-i-2026",
    title: "USA Northern California Dance Regional I",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "December 19, 2026",
    sortDate: "2026-12-19",
    location: "Mountain House, CA",
    venue: "Mountain House High School",
    addressLines: ["1090 South Central Parkway", "Mountain House, CA, 95391", "US"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-dance-regional-iv-2027",
    title: "USA Southern California Dance Regional IV",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Escondido, CA",
    venue: "San Pasqual High School",
    addressLines: ["3300 S Bear Valley Parkway", "Escondido, CA, 92025", "US"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-dance-regional-ii-2027",
    title: "USA Southern California Dance Regional II",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Garden Grove, CA",
    venue: "Pacifica High School",
    addressLines: ["6851 Lampson Avenue", "Garden Grove, CA, 92845", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-regional-iv-cheer-2027",
    title: "USA Southern California Regional IV - Cheer",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "USA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Brea, CA",
    venue: "Brea Olinda High School",
    addressLines: ["789 Wildcat Way", "Brea, CA, 92821", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-dance-regional-i-2027",
    title: "USA Southern California Dance Regional I",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "January 16, 2027",
    sortDate: "2027-01-16",
    location: "Downey, CA",
    venue: "Downey High School",
    addressLines: ["11040 Brookshire Ave", "Downey, CA, 90241", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-regional-v-2027",
    title: "USA Southern California Regional V",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "USA",
    date: "January 16, 2027",
    sortDate: "2027-01-16",
    location: "Agoura Hills, CA",
    venue: "Agoura High School",
    addressLines: ["28545 Driver Avenue", "Agoura Hills, CA, 91301", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-regional-vi-2027",
    title: "USA Southern California Regional VI",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "USA",
    date: "January 16, 2027",
    sortDate: "2027-01-16",
    location: "San Juan Capistrano, CA",
    venue: "San Juan Hills High School",
    addressLines: ["29211 Stallion Ridge", "San Juan Capistrano, CA, 92675", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-dance-solo-classic-2027",
    title: "USA Southern California Dance Solo Classic",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "January 17, 2027",
    sortDate: "2027-01-17",
    location: "Downey, CA",
    venue: "Downey High School",
    addressLines: ["11040 Brookshire Ave", "Downey, CA, 90241", "US"],
    doorOpenLines: ["Monday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-socal-state-dance-classic-2027",
    title: "USA Southern California State Dance Classic",
    type: "Competition",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    date: "January 23, 2027",
    sortDate: "2027-01-23",
    location: "TBD, CA",
    venue: "TBD - CA",
    addressLines: ["TBD", "TBD, CA", "US"],
    doorOpenLines: ["Monday Doors Open - 7:00 AM"],
    housing: "Housing Offered",
    pageLocation: "legacy-school",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Coming soon",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "usa-spirit-nationals-2027",
    title: "USA Spirit Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "School",
    brand: "USA",
    date: "February 18-22, 2027",
    sortDate: "2027-02-22",
    location: "Anaheim, CA",
    venue: "Anaheim Convention Center",
    addressLines: ["Anaheim Convention Center", "Anaheim, CA", "US"],
    housing: "Housing Required",
    points: "USA Nationals qualification requirements apply",
    pageLocation: "legacy-school",
    registration: "Opens soon",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-richmond-classic-2027",
    title: "NCA - Richmond - Classic",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Richmond, VA",
    venue: "Greater Richmond Convention Center",
    addressLines: ["403 N Third St", "Richmond, VA, 23219", "US"],
    doorOpenLines: ["Saturday Doors Open - 7:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "nca-concord-classic-2027",
    title: "NCA - Concord - Classic - DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 9, 2027",
    sortDate: "2027-01-09",
    location: "Concord, NC",
    venue: "Cabarrus Arena & Events Center",
    addressLines: ["4751 US Highway 49 North", "Concord, NC, 28025", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "nca-milwaukee-classic-2027",
    title: "NCA - Milwaukee - Classic",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 10, 2027",
    sortDate: "2027-01-10",
    location: "Milwaukee, WI",
    venue: "The Baird Center",
    addressLines: ["400 W. Wisconsin Avenue", "Milwaukee, WI, 53203", "US"],
    doorOpenLines: ["Monday Doors Open - 8:00 AM"],
    housing: "Housing Rewards",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-birmingham-classic-2027",
    title: "NCA - Birmingham - Classic - DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 16, 2027",
    sortDate: "2027-01-16",
    location: "Birmingham, AL",
    venue: "Birmingham-Jefferson Convention Complex",
    addressLines: ["2100 Richard Arrington Jr. Blvd. North", "Birmingham, AL, 35203", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "nca-twin-cities-classic-2027",
    title: "NCA - Twin Cities - Classic",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 30, 2027",
    sortDate: "2027-01-30",
    location: "St Paul, MN",
    venue: "Saint Paul Rivercentre",
    addressLines: ["175 Kellogg Blvd", "St Paul, MN, 55102", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:30 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 300 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "nca-atlanta-classic-2027",
    title: "NCA - Atlanta - Classic - DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 30, 2027",
    sortDate: "2027-01-30",
    location: "College Park, GA",
    venue: "Georgia International CC",
    addressLines: ["2000 Convention Center Concourse", "College Park, GA, 30337", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "nca-toms-river-classic-2027",
    title: "NCA - Toms River - Classic",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "January 30, 2027",
    sortDate: "2027-01-30",
    location: "Toms River, NJ",
    venue: "RWJ Barnabas Health Arena",
    addressLines: ["1245 Old Freehold Rd.", "Toms River, NJ, 08753", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 300 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "nca-roseville-showdown-2027",
    title: "NCA - Roseville - Showdown",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    date: "February 6-7, 2027",
    sortDate: "2027-02-07",
    location: "Roseville, CA",
    venue: "Roebbelen Center",
    addressLines: ["700 Event Center Drive", "Roseville, CA, 95678", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM", "Monday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "legacy-all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "cheersport-pittsburgh-classic-2026",
    title: "CHEERSPORT - Pittsburgh - Classic",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "CHEERSPORT",
    date: "December 12, 2026",
    sortDate: "2026-12-12",
    location: "Pittsburgh, PA",
    venue: "David L Lawrence Convention Center",
    addressLines: ["1000 Ft. Duquesne Blvd", "Pittsburgh, PA, 15222", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "Points information TBD",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "spirit-sports-indianapolis-nationals-2027",
    title: "Spirit Sports - Indianapolis - Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Spirit Sports",
    date: "March 6-7, 2027",
    sortDate: "2027-03-07",
    location: "Indianapolis, IN",
    venue: "Indiana Fairgrounds - Corteva Coliseum",
    addressLines: ["1202 E 38th St", "Indianapolis, IN, 46205", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM"],
    housing: "Housing Rewards",
    points: "The Varsity Cheer League 300 Point Event",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "spirit-sports-pittsburgh-nationals-2027",
    title: "Spirit Sports - Pittsburgh - Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Spirit Sports",
    date: "March 20-21, 2027",
    sortDate: "2027-03-21",
    location: "Moon Township, PA",
    venue: "Robert Morris University - UPMC Events Center",
    addressLines: ["6001 University Blvd", "Moon Township, PA, 15108", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM", "Monday Doors Open - 8:00 AM"],
    housing: "Housing Rewards",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "athletic-st-louis-nationals-2026",
    title: "Athletic Championships - St. Louis - Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "Athletic Championships",
    date: "November 21, 2026",
    sortDate: "2026-11-21",
    location: "St. Louis, MO",
    venue: "America's Center",
    addressLines: ["701 Convention Plaza", "St. Louis, MO, 63101", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM", "Monday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 300 Point Event",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "athletic-dance-grand-nationals-2027",
    title: "Athletic Championships Nationals & Dance Grand Nationals",
    type: "Competition",
    activity: "Dance",
    audience: "All Star",
    brand: "Athletic Championships",
    date: "January 22-24, 2027",
    sortDate: "2027-01-24",
    location: "Columbus, OH",
    venue: "Columbus Convention Center",
    addressLines: ["400 N High St", "Columbus, OH, 43215", "US"],
    doorOpenLines: ["Saturday Doors Open - 3:30 PM", "Sunday Doors Open - 7:00 AM", "Monday Doors Open - 7:00 AM"],
    housing: "Housing Required",
    points: "Dance bid and qualification details TBD",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "cheer-power-dayton-disco-showdown-2026",
    title: "Cheer Power - Dayton - Disco Showdown",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "American Cheer Power",
    date: "November 21, 2026",
    sortDate: "2026-11-21",
    location: "Dayton, OH",
    venue: "Dayton Convention Center",
    addressLines: ["22 E 5th Street", "Dayton, OH, 45402", "US"],
    doorOpenLines: ["Sunday Doors Open - 8:00 AM"],
    housing: "Housing Offered",
    points: "The Varsity Cheer League 400 Point Event",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Not streamed",
    results: "Pending"
  },
  {
    id: "cheer-power-grand-nationals-2027",
    title: "Cheer Power - Grand Nationals - DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "American Cheer Power",
    date: "March 13-14, 2027",
    sortDate: "2027-03-14",
    location: "Columbus, OH",
    venue: "Columbus Convention Center",
    addressLines: ["400 N High St", "Columbus, OH, 43215", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:30 AM", "Monday Doors Open - 7:30 AM"],
    housing: "Housing Required",
    points: "The Varsity Cheer League 600 Point Event",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "champs-grand-nationals-2026",
    title: "CHAMPS - Grand Nationals - DI/DII",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "All Star Championships",
    date: "December 19-20, 2026",
    sortDate: "2026-12-20",
    location: "Aurora, CO",
    venue: "Gaylord Rockies Resort & Convention Center",
    addressLines: ["6700 North Gaylord Rockies Boulevard", "Aurora, CO, 80019", "US"],
    doorOpenLines: ["Saturday Doors Open - 8:00 AM", "Sunday Doors Open - 8:00 AM"],
    housing: "Housing Required",
    points: "The Varsity Cheer League 500 Point Event",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "ascs-dance-grand-nationals-2027",
    title: "ASCS - Dance Grand Nationals & Cheer Nationals",
    type: "Competition",
    activity: "Dance",
    audience: "All Star",
    brand: "All Star Championships",
    date: "February 20-21, 2027",
    sortDate: "2027-02-21",
    location: "Wisconsin Dells, WI",
    venue: "Kalahari Resort",
    addressLines: ["1305 Kalahari Drive", "Wisconsin Dells, WI, 53965", "US"],
    doorOpenLines: ["Sunday Doors Open - 7:00 AM", "Monday Doors Open - 7:00 AM"],
    housing: "Housing Required",
    points: "Dance bid and qualification details TBD",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Available",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  },
  {
    id: "jamfest-super-nationals-2027",
    title: "JAMfest Cheer Super Nationals",
    type: "Competition",
    activity: "Cheer",
    audience: "All Star",
    brand: "JAMfest",
    date: "January 16-17, 2027",
    sortDate: "2027-01-17",
    location: "Indianapolis, IN",
    venue: "Indiana Convention Center",
    addressLines: ["100 South Capital Ave", "Indianapolis, IN, 46225", "US"],
    doorOpenLines: ["Saturday Doors Open - TBD", "Sunday Doors Open - TBD"],
    housing: "Housing Required",
    points: "The Varsity Cheer League 700 Point Event",
    advisor: "JAMfest Advisor",
    pageLocation: "all-star",
    registration: "Open",
    myVarsity: "Available",
    tickets: "Coming soon",
    gear: "Available",
    watch: "Live soon",
    results: "Pending"
  }
];

const audienceBrandGroups = {
  school: {
    Cheer: [
      { label: "UCA", brand: "UCA", note: "School cheer camps and competitions" },
      { label: "NCA", brand: "NCA", note: "School cheer competitions" },
      { label: "USA", brand: "USA", note: "School spirit, game day, and dance competitions" },
      { label: "UCA/UDA", brand: "UCA UDA", note: "Combined school spirit events" },
      { label: "NSSC", brand: "NSSC", note: "National School Spirit Championship" }
    ],
    Dance: [
      { label: "UDA", brand: "UDA", note: "School dance camps and competitions" },
      { label: "NDA", brand: "NDA", note: "School dance camps and competitions" },
      { label: "USA", brand: "USA", note: "School dance, song, pom, and spirit competitions" },
      { label: "NCA/NDA", brand: "NCA NDA", note: "Combined regional events" },
      { label: "UCA/UDA", brand: "UCA UDA", note: "Combined school spirit events" }
    ]
  },
  "all-star": {
    Cheer: [
      { label: "Varsity All Star", brand: "Varsity All Star", note: "All Star championships and event families" },
      { label: "UCA/UDA", brand: "UCA UDA", note: "All Star national championship" },
      { label: "NCA", brand: "NCA", note: "All Star regional and classic competitions" },
      { label: "CHEERSPORT", brand: "CHEERSPORT", note: "All Star competitions" },
      { label: "JAMfest", brand: "JAMfest", note: "All Star competitions and Super Nationals" },
      { label: "Spirit Sports", brand: "Spirit Sports", note: "All Star competitions" },
      { label: "Athletic Championships", brand: "Athletic Championships", note: "All Star cheer and dance competitions" },
      { label: "Cheer Power", brand: "American Cheer Power", note: "All Star cheer competitions" },
      { label: "All Star Championships", brand: "All Star Championships", note: "All Star cheer and dance competitions" }
    ],
    Dance: [
      { label: "Varsity All Star", brand: "Varsity All Star", note: "All Star dance championships and event families" },
      { label: "Athletic Championships", brand: "Athletic Championships", note: "All Star dance competitions" },
      { label: "All Star Championships", brand: "All Star Championships", note: "All Star dance competitions" }
    ]
  }
};

const eventDetailOverrides = {
  "dance-summit-2027": {
    venue: "ESPN Wide World of Sports Complex",
    addressLines: ["Walt Disney World Resort", "Orlando, FL", "US"],
    doorOpenLines: ["Friday doors open - TBD", "Saturday doors open - TBD", "Sunday doors open - TBD"],
    housing: "Housing Offered / package details TBD",
    points: "Bid and qualification details TBD",
    advisor: "All Star Advisor",
    pageLocation: "legacy-all-star",
    resources: ["Division, Rules & Scoring", "Required Forms / FAQs", "Travel package information"]
  },
  "d2-summit-2027": {
    venue: "ESPN Wide World of Sports Complex",
    addressLines: ["Walt Disney World Resort", "Orlando, FL", "US"],
    doorOpenLines: ["Friday doors open - TBD", "Saturday doors open - TBD", "Sunday doors open - TBD"],
    housing: "Housing Offered / package details TBD",
    points: "Bid and qualification details TBD",
    advisor: "All Star Advisor",
    pageLocation: "legacy-all-star"
  },
  "the-summit-2027": {
    venue: "ESPN Wide World of Sports Complex",
    addressLines: ["Walt Disney World Resort", "Orlando, FL", "US"],
    doorOpenLines: ["Thursday doors open - TBD", "Friday doors open - TBD", "Saturday doors open - TBD", "Sunday doors open - TBD"],
    housing: "Housing Offered / package details TBD",
    points: "Bid and qualification details TBD",
    advisor: "All Star Advisor",
    pageLocation: "legacy-all-star"
  },
  "nda-dallas-regional": {
    venue: "Dallas event venue TBD",
    addressLines: ["Dallas, TX", "US"],
    doorOpenLines: ["Saturday doors open - TBD"],
    housing: "Housing designation TBD",
    points: "Regional points / bid information TBD",
    advisor: "Competition Specialist"
  }
};

const newsData = [
  {
    id: "nda-dallas-what-to-know",
    title: "NDA Dallas Regional: what to know before you go",
    type: "Event Update",
    category: "Events",
    activity: "Dance",
    audience: "School",
    brand: "NDA",
    eventId: "nda-dallas-regional",
    eventType: "Competition",
    publishedDate: "2026-10-28",
    summary: "A quick place for schedule, arrival, ticket, gear, and Watch updates for families and teams attending NDA Dallas."
  },
  {
    id: "dance-summit-season-preview",
    title: "The Dance Summit: season preview",
    type: "Spotlight",
    category: "Dance",
    activity: "Dance",
    audience: "All Star",
    brand: "Varsity All Star",
    eventId: "dance-summit-2027",
    eventType: "Competition",
    publishedDate: "2027-01-15",
    summary: "A customer-friendly story page that can explain bids, planning, Watch, event gear, and what teams can expect."
  },
  {
    id: "usa-dance-regionals-guide",
    title: "USA dance regionals: how to find the right event",
    type: "How-To",
    category: "Dance",
    activity: "Dance",
    audience: "School",
    brand: "USA",
    eventId: "",
    eventType: "Competition",
    publishedDate: "2026-11-18",
    summary: "A helpful guide for school dance teams comparing USA regional dates, locations, registration, and next steps."
  },
  {
    id: "cheer-camp-prep",
    title: "Cheer camp prep checklist",
    type: "How-To",
    category: "Cheer",
    activity: "Cheer",
    audience: "School",
    brand: "UCA",
    eventId: "uca-cheer-camp",
    eventType: "Camp",
    publishedDate: "2026-05-12",
    summary: "A simple checklist for athletes, parents, and coaches preparing for camp registration, packing, apparel, and account tasks."
  },
  {
    id: "what-to-pack-for-camp",
    title: "What to pack for camp",
    type: "How-To",
    category: "Events",
    activity: "",
    audience: "Parents / Athletes",
    brand: "Varsity Camps",
    eventId: "",
    eventType: "Camp",
    publishedDate: "2026-05-01",
    summary: "A general camp guide for packing, arrival, apparel, account tasks, and simple reminders before camp starts."
  },
  {
    id: "nca-all-star-classic-season",
    title: "NCA All Star Classic season updates",
    type: "Event Update",
    category: "Events",
    activity: "Cheer",
    audience: "All Star",
    brand: "NCA",
    eventId: "nca-richmond-classic-2027",
    eventType: "Competition",
    publishedDate: "2026-12-10",
    summary: "A news path for families and coaches tracking NCA classic dates, ticket status, event gear, and results."
  },
  {
    id: "varsity-cheer-league-guide",
    title: "The Varsity Cheer League: points and standings guide",
    type: "How-To",
    category: "Cheer",
    activity: "Cheer",
    audience: "All Star",
    brand: "The Varsity Cheer League",
    eventId: "",
    eventType: "Competition",
    publishedDate: "2026-12-15",
    summary: "A simple guide for All Star Cheer teams and families who want to find League point events and follow standings."
  },
  {
    id: "varsity-tv-weekend-watch-guide",
    title: "What to watch this weekend",
    type: "Announcement",
    category: "Watch",
    activity: "",
    audience: "Fans",
    brand: "Varsity TV",
    eventId: "",
    publishedDate: "2027-01-08",
    summary: "A Watch story that helps fans find live events, replays, featured teams, and upcoming coverage."
  },
  {
    id: "yearbook-order-deadlines",
    title: "Yearbook order reminders for families",
    type: "Announcement",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Students / Families",
    brand: "Varsity Yearbook",
    eventId: "",
    publishedDate: "2026-08-20",
    summary: "A family-facing reminder page for yearbook orders, ads, dedications, eShare photo submission, and customer help."
  },
  {
    id: "yearbook-adviser-workshop-recap",
    title: "Yearbook adviser workshop recap",
    type: "Results / Recap",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Adviser",
    brand: "Varsity Yearbook",
    eventId: "yearbook-workshop",
    eventType: "Workshop",
    publishedDate: "2026-08-28",
    summary: "A recap story for advisers with links back to workshop materials, eDesign, rep support, and next steps."
  },
  {
    id: "color-guard-uniform-guide",
    title: "Color guard uniform planning guide",
    type: "How-To",
    category: "Performing Arts",
    activity: "Color Guard",
    audience: "Performing Arts",
    brand: "Varsity Performing Arts",
    eventId: "",
    publishedDate: "2026-09-05",
    summary: "A planning story for directors who need catalog guidance, sizing help, inspiration, and a representative."
  },
  {
    id: "stanbury-band-season",
    title: "Stanbury band uniform planning for the season",
    type: "How-To",
    category: "Performing Arts",
    activity: "Band",
    audience: "Performing Arts",
    brand: "Stanbury",
    eventId: "",
    publishedDate: "2026-09-12",
    summary: "A director-focused page that connects band uniform planning with catalogs, rep help, and related Performing Arts content."
  },
  {
    id: "uniform-inspiration-cheer-dance",
    title: "Cheer and dance uniform inspiration",
    type: "Spotlight",
    category: "Fashion and Uniforms",
    activity: "",
    audience: "Coaches",
    brand: "Varsity Spirit Fashion",
    eventId: "",
    publishedDate: "2026-10-02",
    summary: "A visual story for coaches, parents, and athletes browsing apparel ideas before moving into catalogs or rep support."
  },
  {
    id: "my-team-shop-family-guide",
    title: "How to find your My Team Shop",
    type: "How-To",
    category: "Fashion and Uniforms",
    activity: "",
    audience: "Parents / Athletes",
    brand: "My Team Shop",
    eventId: "",
    publishedDate: "2026-10-14",
    summary: "A simple explanation for families using a team link, code, invite, or account sign-in to shop private team items."
  }
];

const knowledgeData = [
  {
    id: "how-to-start-competitive-cheer",
    title: "How to start competitive cheer",
    type: "Guide",
    category: "Start Here",
    activity: "Cheer",
    audience: "Parents / Athletes",
    summary: "A beginner path that explains School, All Star, camps, competitions, training, costs, uniforms, and what to do next.",
    answers: ["How do I start competitive cheer?", "What is the first step for a new cheer family?"],
    nextSteps: [
      card("Find Cheer Events", "Search camps and competitions connected to cheer.", "#/events?activity=Cheer", "Events"),
      card("School Cheer", "Explore the School Cheer path.", "#/audience/school?activity=Cheer", "Program"),
      card("All Star Cheer", "Explore the All Star Cheer path.", "#/audience/all-star?activity=Cheer", "Program")
    ]
  },
  {
    id: "school-vs-all-star-cheer",
    title: "School Cheer vs All Star Cheer",
    type: "Explainer",
    category: "Participation Pathways",
    activity: "Cheer",
    audience: "Parents / Athletes",
    summary: "A plain-language comparison of School Cheer and All Star Cheer so families can choose the right path.",
    answers: ["What is the difference between School Cheer and All Star Cheer?", "Which cheer path is right for my athlete?"],
    nextSteps: [
      card("School Cheer", "Camps, competitions, school brands, and school uniform paths.", "#/audience/school?activity=Cheer", "School"),
      card("All Star Cheer", "Competitions, rankings, All Star brands, and League paths.", "#/audience/all-star?activity=Cheer", "All Star")
    ]
  },
  {
    id: "best-cheer-camps-in-texas",
    title: "Best cheer camps in Texas",
    type: "Guide",
    category: "Camps and Training",
    activity: "Cheer",
    audience: "School",
    summary: "A school cheer camp guide for Texas families and coaches, with camp search, packing, prep, and registration next steps.",
    answers: ["Best cheer camps in Texas", "How do I find a cheer camp near me?"],
    nextSteps: [
      card("Find School Cheer Camps", "Search school cheer camp options and dates.", "#/events?activity=Cheer&audience=School&type=Camp&q=Texas", "Camps"),
      card("Camp Prep Checklist", "Read camp preparation and packing guidance.", "#/learn/what-to-pack-for-camp", "Guide")
    ]
  },
  {
    id: "what-to-pack-for-camp",
    title: "What to pack for camp",
    type: "Checklist",
    category: "Camps and Training",
    activity: "Cheer",
    audience: "School",
    summary: "A camp preparation checklist for athletes, parents, and coaches covering apparel, account tasks, arrival, and reminders.",
    answers: ["What should I pack for cheer camp?", "How should my team prepare for camp?"],
    nextSteps: [
      card("Find School Camps", "Search camp events by activity, brand, and date.", "#/events?audience=School&type=Camp", "Camps"),
      card("My Team Shop", "Use a private team shop when your team has one.", "#/handoff/myteamshop", "Private")
    ]
  },
  {
    id: "how-nationals-qualification-works",
    title: "How Nationals qualification works",
    type: "Explainer",
    category: "Competitions and Qualification",
    activity: "Cheer",
    audience: "Coaches / Families",
    summary: "A guide to bids, qualification paths, divisions, scoring, registration status, schedules, and results.",
    answers: ["How does Nationals qualification work?", "How do cheer teams qualify for Nationals?"],
    nextSteps: [
      card("Find Competitions", "Search competitions and qualification events.", "#/events?type=Competition", "Competitions"),
      card("Event Help", "Get help with registration, schedules, results, and policies.", "#/support-detail/events", "Support")
    ]
  },
  {
    id: "what-cheer-coach-needs-to-know",
    title: "What a cheer coach needs to know",
    type: "Guide",
    category: "Coach Resource Center",
    activity: "Cheer",
    audience: "Coaches",
    summary: "A coach-first guide to events, myVarsity, rosters, payments, uniforms, parent communication, safety, travel, and team shopping.",
    answers: ["What does a cheer coach need to know?", "How should a new cheer coach get started?"],
    nextSteps: [
      card("myVarsity", "Manage registration, rosters, status checks, and payments.", "#/handoff/myvarsity", "Account"),
      card("Fashion and Uniforms", "Find the right uniform catalog and rep path.", "#/fashion-uniforms", "Uniforms"),
      card("Support", "Get help with event and account tasks.", "#/support", "Support")
    ]
  },
  {
    id: "cheer-rules-scoring-safety-basics",
    title: "Cheer rules, scoring, and safety basics",
    type: "Guide",
    category: "Rules and Safety",
    activity: "Cheer",
    audience: "Coaches / Families",
    summary: "A starting point for rules, scoring, divisions, safety basics, required forms, and competition policies.",
    answers: ["What are cheer rules and scoring basics?", "What safety information should cheer families know?"],
    nextSteps: [
      card("Event Help", "Find rules, forms, schedules, and event support.", "#/support-detail/events", "Support"),
      card("Find Competitions", "Search competition events by activity and audience.", "#/events?activity=Cheer&type=Competition", "Events")
    ]
  },
  {
    id: "varsity-cheer-league-rankings-guide",
    title: "The Varsity Cheer League rankings guide",
    type: "Explainer",
    category: "Rankings",
    activity: "Cheer",
    audience: "All Star",
    summary: "A guide to The Varsity Cheer League, point events, All Star Cheer standings, and Varsity TV coverage.",
    answers: ["How do cheer rankings work?", "What is The Varsity Cheer League?"],
    nextSteps: [
      card("The Varsity Cheer League", "Follow League point events, standings, and coverage.", "#/the-varsity-cheer-league", "All Star Cheer"),
      card("League Standings", "Open Varsity TV standings.", "#/handoff/league-standings", "Varsity TV")
    ]
  },
  {
    id: "dance-participation-pathways",
    title: "Dance participation pathways",
    type: "Guide",
    category: "Participation Pathways",
    activity: "Dance",
    audience: "Parents / Athletes",
    summary: "A guide to School Dance, All Star Dance, dance brands, events, uniforms, Watch, and CLI Studios.",
    answers: ["How do I start dance team?", "What are the dance participation paths?"],
    nextSteps: [
      card("School Dance", "Explore school dance camps, competitions, brands, and uniforms.", "#/audience/school?activity=Dance", "School"),
      card("All Star Dance", "Explore All Star dance competitions, brands, and uniforms.", "#/audience/all-star?activity=Dance", "All Star"),
      card("CLI Studios", "Continue to online dance training.", "#/handoff/clistudios", "Training")
    ]
  },
  {
    id: "spirit-industry-career-paths",
    title: "Spirit industry career paths",
    type: "Guide",
    category: "Career Paths",
    activity: "",
    audience: "Students / Adults",
    summary: "A category guide to athlete, coach, judge, choreographer, event staff, educator, and industry career pathways.",
    answers: ["What careers exist in the spirit industry?", "How can someone work in cheer or dance?"],
    nextSteps: [
      card("Cheer", "Explore cheer programs, events, and support.", "#/cheer", "Cheer"),
      card("Dance", "Explore dance programs, events, and training.", "#/dance", "Dance"),
      card("Performing Arts", "Explore band, color guard, and performing arts paths.", "#/performing-arts", "Performing Arts")
    ]
  },
  {
    id: "my-kid-wants-to-play-an-instrument",
    title: "My kid wants to play an instrument",
    type: "Parent Guide",
    category: "Band and Marching Arts",
    activity: "Band",
    audience: "Parents / Families",
    summary: "A parent-friendly starting point for instrument choice, school music sign-up, practice expectations, rentals, costs, and how band can fit into school life.",
    answers: ["My kid wants to play an instrument. What should I know?", "How do we get started with school band?"],
    nextSteps: [
      card("Performing Arts", "Find band, color guard, uniforms, products, events, and rep help.", "#/performing-arts", "Performing Arts"),
      card("Band Wear", "Learn where band apparel and uniform needs fit.", "#/uniforms/band-wear", "Band"),
      card("Find Events", "Browse Performing Arts events and workshops.", "#/events?audience=Performing%20Arts", "Events")
    ]
  },
  {
    id: "marching-band-parent-starter-guide",
    title: "My child is signing up for marching band",
    type: "Parent Guide",
    category: "Band and Marching Arts",
    activity: "Band",
    audience: "Parents / Families",
    summary: "A practical parent guide to marching band season, rehearsals, football games, competitions, travel, uniforms, fees, communication, and volunteer roles.",
    answers: ["My child is signing up for marching band. What do I need to know?", "What should a new marching band parent expect?"],
    nextSteps: [
      card("Band Wear", "Find band wear and uniform support paths.", "#/uniforms/band-wear", "Uniforms"),
      card("Color Guard Wear", "Find color guard uniform and apparel support.", "#/uniforms/color-guard-wear", "Uniforms"),
      card("Performing Arts Events", "Find band and performing arts events.", "#/events?audience=Performing%20Arts", "Events")
    ]
  },
  {
    id: "choosing-a-school-band-instrument",
    title: "How to choose a school band instrument",
    type: "Guide",
    category: "Band and Marching Arts",
    activity: "Band",
    audience: "Parents / Students",
    summary: "A beginner guide to matching a student with an instrument, understanding director recommendations, rentals, supplies, practice habits, and confidence-building.",
    answers: ["What instrument should my child play?", "How do students choose a band instrument?"],
    nextSteps: [
      card("Marching Band Parent Guide", "Understand the bigger school band season.", "#/learn/marching-band-parent-starter-guide", "Guide"),
      card("Performing Arts", "Explore the Performing Arts front door.", "#/performing-arts", "Performing Arts")
    ]
  },
  {
    id: "what-to-know-before-band-camp",
    title: "What to know before band camp",
    type: "Checklist",
    category: "Band and Marching Arts",
    activity: "Band",
    audience: "Parents / Students",
    summary: "A band camp prep checklist covering rehearsal days, hydration, shoes, sun protection, music, forms, uniforms, transportation, and parent communication.",
    answers: ["What should my child bring to band camp?", "How should a first-year marcher prepare?"],
    nextSteps: [
      card("Band Wear", "Find band apparel and uniform support.", "#/uniforms/band-wear", "Band"),
      card("Performing Arts Events", "Browse Performing Arts events.", "#/events?audience=Performing%20Arts", "Events")
    ]
  },
  {
    id: "marching-band-uniform-and-gear-basics",
    title: "Marching band uniform and gear basics",
    type: "Explainer",
    category: "Band and Marching Arts",
    activity: "Band",
    audience: "Parents / Directors",
    summary: "A simple explanation of band uniforms, fittings, shoes, gloves, warmups, color guard coordination, care instructions, and when to contact a rep.",
    answers: ["What does my child need for marching band uniforms?", "How do band uniform orders usually work?"],
    nextSteps: [
      card("Band Wear", "Open the Band Wear uniform path.", "#/uniforms/band-wear", "Uniforms"),
      card("Color Guard Wear", "Open the Color Guard Wear path.", "#/uniforms/color-guard-wear", "Uniforms"),
      card("Contact a Rep", "Get routed to representative support.", "#/handoff/rep", "Rep")
    ]
  },
  {
    id: "my-kid-trying-out-for-school-cheerleader",
    title: "My kid is trying out for cheerleader at school",
    type: "Parent Guide",
    category: "School Tryouts",
    activity: "Cheer",
    audience: "Parents / Families",
    summary: "A parent-focused guide to school cheer tryouts, expectations, paperwork, practices, costs, camps, uniforms, communication, and how to support your athlete.",
    answers: ["My kid is trying out for cheerleader at her school. What should I know?", "How can a parent support school cheer tryouts?"],
    nextSteps: [
      card("School Cheer", "Explore the School Cheer path.", "#/audience/school?activity=Cheer", "School"),
      card("Tryout Prep for Athletes", "See the athlete version of this guide.", "#/learn/i-want-to-try-out-for-school-cheerleader", "Guide"),
      card("School Cheer Camps", "Find school cheer camps and events.", "#/events?activity=Cheer&audience=School&type=Camp", "Camps")
    ]
  },
  {
    id: "i-want-to-try-out-for-school-cheerleader",
    title: "I want to try out for cheerleader at my school",
    type: "Athlete Guide",
    category: "School Tryouts",
    activity: "Cheer",
    audience: "Students / Athletes",
    summary: "An athlete-friendly guide to school cheer tryout prep, skills, attitude, teamwork, practice habits, what to bring, and what happens after team selection.",
    answers: ["I want to try out for cheerleader at my school. How do I get ready?", "What should I expect at school cheer tryouts?"],
    nextSteps: [
      card("School Cheer", "Explore the School Cheer front door.", "#/audience/school?activity=Cheer", "School"),
      card("Find School Cheer Camps", "Look for camp and training opportunities.", "#/events?activity=Cheer&audience=School&type=Camp", "Camps"),
      card("Shop Cheer", "Find individual cheer products and event merchandise.", "#/shop?activity=Cheer", "Shop")
    ]
  },
  {
    id: "my-kid-trying-out-for-drill-team",
    title: "My kid is trying out for drill team at school",
    type: "Parent Guide",
    category: "School Tryouts",
    activity: "Dance",
    audience: "Parents / Families",
    summary: "A parent guide for school drill team or dance team tryouts, including expectations, practice load, costs, performance season, uniforms, and family support.",
    answers: ["My kid is trying out for drill team at school. What should I know?", "How can a parent support drill team tryouts?"],
    nextSteps: [
      card("School Dance", "Explore the School Dance path.", "#/audience/school?activity=Dance", "School"),
      card("Athlete Tryout Guide", "See the student version of this guide.", "#/learn/i-want-to-try-out-for-drill-team", "Guide"),
      card("School Dance Camps", "Find school dance camps and events.", "#/events?activity=Dance&audience=School&type=Camp", "Camps")
    ]
  },
  {
    id: "i-want-to-try-out-for-drill-team",
    title: "I want to try out for drill team at my school",
    type: "Athlete Guide",
    category: "School Tryouts",
    activity: "Dance",
    audience: "Students / Athletes",
    summary: "An athlete-friendly school dance and drill team tryout guide covering technique, performance, confidence, teamwork, practice habits, and what to expect.",
    answers: ["I want to try out for drill team at my school. How do I prepare?", "What happens at a school dance team tryout?"],
    nextSteps: [
      card("School Dance", "Explore school dance camps, competitions, brands, and uniforms.", "#/audience/school?activity=Dance", "School"),
      card("CLI Studios", "Use CLI Studios for online dance training.", "#/handoff/clistudios", "Training"),
      card("Find School Dance Camps", "Look for camp and training opportunities.", "#/events?activity=Dance&audience=School&type=Camp", "Camps")
    ]
  },
  {
    id: "why-work-on-yearbook",
    title: "Why working on the yearbook is a good idea",
    type: "Student Guide",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Students / Families",
    summary: "A student-friendly guide to yearbook as a place to build photography, writing, design, leadership, marketing, project management, and school connection.",
    answers: ["Why is working on the yearbook at school a good idea?", "What do students learn from yearbook?"],
    nextSteps: [
      card("Yearbook", "Explore adviser, staff, student, and family paths.", "#/yearbook", "Yearbook"),
      card("Students / Families", "Find family and student yearbook paths.", "#/audience/yearbook-family", "Audience"),
      card("eShare", "Submit photos for the yearbook.", "#/handoff/eshare", "Tool")
    ]
  },
  {
    id: "how-to-build-great-yearbook-team",
    title: "How to build a great yearbook team at your school",
    type: "Adviser Guide",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Advisers / Staff",
    summary: "An adviser and editor guide to recruiting, assigning roles, planning deadlines, training staffers, creating culture, and keeping the book on track.",
    answers: ["How do you build a great yearbook team at school?", "What does a yearbook adviser need to plan first?"],
    nextSteps: [
      card("Adviser / Staff", "Explore adviser and staff resources.", "#/audience/yearbook-adviser", "Audience"),
      card("Yearbook Workshops", "Find workshops through Events.", "#/events?activity=Yearbook", "Events"),
      card("Contact a Rep", "Get connected with a yearbook representative.", "#/handoff/rep", "Rep")
    ]
  },
  {
    id: "yearbook-staff-roles",
    title: "Yearbook staff roles explained",
    type: "Guide",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Advisers / Students",
    summary: "A clear breakdown of editor, designer, photographer, writer, sales, social, business manager, and adviser roles so teams can divide work well.",
    answers: ["What roles should a yearbook staff have?", "How do students know what to do on yearbook staff?"],
    nextSteps: [
      card("Build a Great Yearbook Team", "Plan roles, deadlines, training, and team culture.", "#/learn/how-to-build-great-yearbook-team", "Guide"),
      card("Adviser / Staff", "Open the adviser and staff path.", "#/audience/yearbook-adviser", "Audience")
    ]
  },
  {
    id: "yearbook-photo-collection-guide",
    title: "How to collect better yearbook photos",
    type: "How-To",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Advisers / Students",
    summary: "A photo collection guide for building coverage plans, inviting submissions, using eShare, organizing folders, and getting more students represented.",
    answers: ["How do we collect better photos for yearbook?", "How can families submit yearbook photos?"],
    nextSteps: [
      card("eShare Photo Upload", "Submit or collect school yearbook photos.", "#/handoff/eshare", "Tool"),
      card("Yearbook", "Return to the Yearbook front door.", "#/yearbook", "Yearbook")
    ]
  },
  {
    id: "how-to-sell-more-yearbooks",
    title: "How to sell more yearbooks",
    type: "How-To",
    category: "Yearbook",
    activity: "Yearbook",
    audience: "Advisers / Staff",
    summary: "A practical guide to yearbook sales campaigns, family reminders, school announcements, deadline planning, ads, dedications, and Order Center paths.",
    answers: ["How can our school sell more yearbooks?", "What are good yearbook sales campaign ideas?"],
    nextSteps: [
      card("Buy Yearbook or Ad", "Open the Yearbook Order Center path.", "#/handoff/yearbookorder", "Commerce"),
      card("Yearbook News", "Read yearbook reminders and stories.", "#/news?category=Yearbook", "News"),
      card("Contact a Rep", "Get rep support for yearbook planning.", "#/handoff/rep", "Rep")
    ]
  }
];

const directoryData = [
  {
    id: "north-texas-spirit-athletics",
    name: "North Texas Spirit Athletics",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Dallas",
    state: "TX",
    programs: ["All Star", "Recreational", "Training"],
    services: ["Competitive cheer", "Tumbling", "Stunt classes", "Tryout prep"],
    audience: "Families / Athletes",
    note: "Sample listing for testing how families could find a cheer gym."
  },
  {
    id: "lone-star-dance-company",
    name: "Lone Star Dance Company",
    type: "Dance Studio",
    activity: "Dance",
    city: "Plano",
    state: "TX",
    programs: ["School", "Recreational", "Training"],
    services: ["Jazz", "Pom", "Hip hop", "Drill team prep"],
    audience: "Families / Athletes",
    note: "Sample listing for testing dance and drill team discovery."
  },
  {
    id: "suncoast-all-star-cheer",
    name: "Suncoast All Star Cheer",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Tampa",
    state: "FL",
    programs: ["All Star", "Training"],
    services: ["All Star teams", "Tumbling", "Flyer flexibility", "Private lessons"],
    audience: "Families / Athletes",
    note: "Sample listing for All Star Cheer discovery."
  },
  {
    id: "orlando-performance-dance",
    name: "Orlando Performance Dance",
    type: "Dance Studio",
    activity: "Dance",
    city: "Orlando",
    state: "FL",
    programs: ["All Star", "School", "Training"],
    services: ["Pom", "Jazz", "Contemporary", "Competition prep"],
    audience: "Families / Athletes",
    note: "Sample listing for dance studio discovery."
  },
  {
    id: "west-coast-spirit-center",
    name: "West Coast Spirit Center",
    type: "Cheer Gym + Dance Studio",
    activity: "Cheer / Dance",
    city: "Anaheim",
    state: "CA",
    programs: ["All Star", "School", "Recreational"],
    services: ["Cheer teams", "Dance teams", "Tumbling", "Tryout clinics"],
    audience: "Families / Athletes",
    note: "Sample listing showing a combined cheer and dance program."
  },
  {
    id: "bay-area-dance-lab",
    name: "Bay Area Dance Lab",
    type: "Dance Studio",
    activity: "Dance",
    city: "San Jose",
    state: "CA",
    programs: ["School", "Training"],
    services: ["Technique", "Pom", "Kick", "Drill team prep"],
    audience: "Families / Athletes",
    note: "Sample listing for school dance and drill team training."
  },
  {
    id: "music-city-cheer-academy",
    name: "Music City Cheer Academy",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Nashville",
    state: "TN",
    programs: ["All Star", "Recreational", "Training"],
    services: ["Competitive cheer", "Tumbling", "School tryout prep", "Camps"],
    audience: "Families / Athletes",
    note: "Sample listing for cheer training discovery."
  },
  {
    id: "midtown-dance-collective",
    name: "Midtown Dance Collective",
    type: "Dance Studio",
    activity: "Dance",
    city: "Atlanta",
    state: "GA",
    programs: ["School", "Recreational", "Training"],
    services: ["Jazz", "Hip hop", "Game day routines", "Audition prep"],
    audience: "Families / Athletes",
    note: "Sample listing for school dance and audition preparation."
  },
  {
    id: "rocky-mountain-cheer",
    name: "Rocky Mountain Cheer",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Denver",
    state: "CO",
    programs: ["All Star", "Training"],
    services: ["All Star teams", "Tumbling", "Stunting", "Open gym"],
    audience: "Families / Athletes",
    note: "Sample listing for regional cheer discovery."
  },
  {
    id: "chicagoland-dance-studio",
    name: "Chicagoland Dance Studio",
    type: "Dance Studio",
    activity: "Dance",
    city: "Chicago",
    state: "IL",
    programs: ["School", "All Star", "Training"],
    services: ["Pom", "Jazz", "Technique", "Competition routines"],
    audience: "Families / Athletes",
    note: "Sample listing for dance studio filtering."
  },
  {
    id: "desert-spirit-gym",
    name: "Desert Spirit Gym",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Phoenix",
    state: "AZ",
    programs: ["All Star", "Recreational", "Training"],
    services: ["Competitive cheer", "Tumbling", "Intro classes", "School tryouts"],
    audience: "Families / Athletes",
    note: "Sample listing for cheer gym search."
  },
  {
    id: "hudson-valley-dance",
    name: "Hudson Valley Dance",
    type: "Dance Studio",
    activity: "Dance",
    city: "White Plains",
    state: "NY",
    programs: ["School", "Recreational", "Training"],
    services: ["Ballet", "Jazz", "Pom", "Team audition prep"],
    audience: "Families / Athletes",
    note: "Sample listing for dance studio search."
  },
  {
    id: "carolina-cheer-and-tumble",
    name: "Carolina Cheer and Tumble",
    type: "Cheer Gym",
    activity: "Cheer",
    city: "Charlotte",
    state: "NC",
    programs: ["All Star", "Training"],
    services: ["Tumbling", "All Star teams", "Stunt technique", "Private lessons"],
    audience: "Families / Athletes",
    note: "Sample listing for cheer and tumbling discovery."
  },
  {
    id: "great-lakes-performance-studio",
    name: "Great Lakes Performance Studio",
    type: "Cheer Gym + Dance Studio",
    activity: "Cheer / Dance",
    city: "Detroit",
    state: "MI",
    programs: ["School", "All Star", "Training"],
    services: ["Cheer tryout prep", "Dance team prep", "Tumbling", "Technique"],
    audience: "Families / Athletes",
    note: "Sample combined listing for both cheer and dance searches."
  }
];

const handoffs = {
  myvarsity: {
    title: "myVarsity",
    eyebrow: "Account and event management",
    copy: "Use myVarsity for most event registration, status checks, roster updates, and payments.",
    actions: ["Register for most events", "Manage registration", "Check status", "Make payment", "Review rosters"]
  },
  tickets: {
    title: "Ticketing",
    eyebrow: "Event commerce",
    copy: "For ticketed competitions and events, start here to find ticket options.",
    actions: ["Buy tickets", "Review ticket status", "Get ticket help"]
  },
  gear: {
    title: "Event Gear",
    eyebrow: "Event merchandise",
    copy: "Find event merchandise when gear is available for a competition or championship.",
    actions: ["Buy event gear", "Browse event merchandise", "Get order help"]
  },
  varsitytv: {
    title: "Varsity TV",
    eyebrow: "Watch",
    copy: "Watch live coverage, upcoming events, replays, and saved teams through Varsity TV.",
    actions: ["Watch live", "View replay", "Follow an event"]
  },
  "league-standings": {
    title: "The Varsity Cheer League Standings",
    eyebrow: "Varsity TV standings",
    copy: "Follow The League season-long All Star Cheer standings and point-event progress through Varsity TV.",
    actions: ["View standings", "Find League point events", "Watch related coverage"]
  },
  shop: {
    title: "Shop",
    eyebrow: "Individual commerce",
    copy: "Shop is where parents, athletes, fans, and other individual buyers can browse products and event merchandise.",
    actions: ["Buy products", "Shop event merchandise", "Get order help"]
  },
  myteamshop: {
    title: "My Team Shop",
    eyebrow: "Private team commerce",
    copy: "Use your team link, code, invite, or account sign-in to get to a private school or team shop.",
    actions: ["Find private shop", "Create or manage shop", "Buy team-specific items"]
  },
  clistudios: {
    title: "CLI Studios",
    eyebrow: "Dance training",
    copy: "Explore CLI Studios for online dance classes, teacher training, conservatory programs, auditions, intensives, sign-in, and CLI support.",
    actions: ["Conservatory Online", "For Teachers", "Conservatory", "Auditions", "Intensives"]
  },
  yearbookorder: {
    title: "Yearbook Order Center",
    eyebrow: "Yearbook commerce",
    copy: "Students and families use the order path to buy yearbooks, ads, or dedications.",
    actions: ["Buy a yearbook", "Buy an ad", "Get order help"]
  },
  eshare: {
    title: "eShare",
    eyebrow: "Yearbook photo upload",
    copy: "Families and students can submit photos through eShare.",
    actions: ["Submit photos", "Find school", "Get help"]
  },
  rep: {
    title: "Contact a Rep",
    eyebrow: "Contact a rep",
    copy: "Get help from a representative for uniforms, catalogs, Performing Arts products, and some event questions.",
    actions: ["Contact rep", "Request catalog", "Start consultation"]
  },
  "school-cheer-uniform-catalog": {
    title: "School Cheer Uniforms Catalog",
    eyebrow: "School Cheer catalog",
    copy: "Browse the catalog path for school cheer uniforms, game day looks, campwear, sizing, and inspiration.",
    actions: ["View School Cheer catalog", "Save styles", "Get sizing help"]
  },
  "school-cheer-uniform-rep": {
    title: "School Cheer Uniforms Rep",
    eyebrow: "School Cheer rep",
    copy: "Get routed to the representative who supports school cheer uniform needs.",
    actions: ["Contact School Cheer rep", "Request quote", "Start uniform order"]
  },
  "all-star-cheer-uniform-catalog": {
    title: "All Star Cheer Uniforms Catalog",
    eyebrow: "All Star Cheer catalog",
    copy: "Browse the catalog path for All Star cheer uniforms, practicewear, customization, sizing, and inspiration.",
    actions: ["View All Star Cheer catalog", "Save styles", "Get sizing help"]
  },
  "all-star-cheer-uniform-rep": {
    title: "All Star Cheer Uniforms Rep",
    eyebrow: "All Star Cheer rep",
    copy: "Get routed to the representative who supports All Star cheer uniform needs.",
    actions: ["Contact All Star Cheer rep", "Request quote", "Start uniform order"]
  },
  "dance-uniform-catalog": {
    title: "School Dance Uniforms Catalog",
    eyebrow: "School Dance catalog",
    copy: "Browse the catalog path for school dance uniforms, performance looks, warmups, sizing, and inspiration.",
    actions: ["View School Dance catalog", "Save styles", "Get sizing help"]
  },
  "dance-uniform-rep": {
    title: "School Dance Uniforms Rep",
    eyebrow: "School Dance rep",
    copy: "Get routed to the representative who supports school dance uniform needs.",
    actions: ["Contact School Dance rep", "Request quote", "Start uniform order"]
  },
  "all-star-dance-uniform-catalog": {
    title: "All Star Dance Uniforms Catalog",
    eyebrow: "All Star Dance catalog",
    copy: "Browse the catalog path for All Star dance uniforms, performance looks, customization, sizing, and inspiration.",
    actions: ["View All Star Dance catalog", "Save styles", "Get sizing help"]
  },
  "all-star-dance-uniform-rep": {
    title: "All Star Dance Uniforms Rep",
    eyebrow: "All Star Dance rep",
    copy: "Get routed to the representative who supports All Star dance uniform needs.",
    actions: ["Contact All Star Dance rep", "Request quote", "Start uniform order"]
  },
  "band-wear-catalog": {
    title: "Band Wear Catalog",
    eyebrow: "Band Wear catalog",
    copy: "Browse the catalog path for band apparel, uniforms, sizing, and performance wear inspiration.",
    actions: ["View Band Wear catalog", "Save styles", "Get sizing help"]
  },
  "band-wear-rep": {
    title: "Band Wear Rep",
    eyebrow: "Band Wear rep",
    copy: "Get routed to the representative who supports band wear and uniform needs.",
    actions: ["Contact Band Wear rep", "Request quote", "Start uniform order"]
  },
  "color-guard-wear-catalog": {
    title: "Color Guard Wear Catalog",
    eyebrow: "Color Guard Wear catalog",
    copy: "Browse the catalog path for color guard uniforms, accessories, sizing, and performance wear inspiration.",
    actions: ["View Color Guard Wear catalog", "Save styles", "Get sizing help"]
  },
  "color-guard-wear-rep": {
    title: "Color Guard Wear Rep",
    eyebrow: "Color Guard Wear rep",
    copy: "Get routed to the representative who supports color guard wear and uniform needs.",
    actions: ["Contact Color Guard Wear rep", "Request quote", "Start uniform order"]
  }
};

const uniformPathData = {
  "school-cheer-uniforms": {
    title: "School Cheer Uniforms",
    eyebrow: "School Cheer",
    copy: "Use this path for school cheer uniform needs, including the right catalog, sizing help, inspiration, and school cheer representative.",
    activity: "Cheer",
    audience: "School",
    catalogHandoff: "school-cheer-uniform-catalog",
    repHandoff: "school-cheer-uniform-rep",
    relatedAudienceHref: "#/audience/school?activity=Cheer"
  },
  "all-star-cheer-uniforms": {
    title: "All Star Cheer Uniforms",
    eyebrow: "All Star Cheer",
    copy: "Use this path for All Star cheer uniform needs, including the right catalog, customization help, inspiration, and All Star cheer representative.",
    activity: "Cheer",
    audience: "All Star",
    catalogHandoff: "all-star-cheer-uniform-catalog",
    repHandoff: "all-star-cheer-uniform-rep",
    relatedAudienceHref: "#/audience/all-star?activity=Cheer"
  },
  "dance-uniforms": {
    title: "School Dance Uniforms",
    eyebrow: "School Dance",
    copy: "Use this path for school dance uniform needs, including the right catalog, sizing help, inspiration, and school dance representative.",
    activity: "Dance",
    audience: "School",
    catalogHandoff: "dance-uniform-catalog",
    repHandoff: "dance-uniform-rep",
    relatedAudienceHref: "#/audience/school?activity=Dance"
  },
  "all-star-dance-uniforms": {
    title: "All Star Dance Uniforms",
    eyebrow: "All Star Dance",
    copy: "Use this path for All Star dance uniform needs, including the right catalog, customization help, inspiration, and All Star dance representative.",
    activity: "Dance",
    audience: "All Star",
    catalogHandoff: "all-star-dance-uniform-catalog",
    repHandoff: "all-star-dance-uniform-rep",
    relatedAudienceHref: "#/audience/all-star?activity=Dance"
  },
  "band-wear": {
    title: "Band Wear",
    eyebrow: "Band Wear",
    copy: "Use this path for band wear and uniform needs, including the right catalog, sizing help, inspiration, and representative.",
    activity: "Performing Arts",
    audience: "Band",
    catalogHandoff: "band-wear-catalog",
    repHandoff: "band-wear-rep",
    relatedAudienceHref: "#/performing-arts",
    relatedLabel: "Performing Arts"
  },
  "color-guard-wear": {
    title: "Color Guard Wear",
    eyebrow: "Color Guard Wear",
    copy: "Use this path for color guard wear and uniform needs, including the right catalog, sizing help, inspiration, and representative.",
    activity: "Performing Arts",
    audience: "Color Guard",
    catalogHandoff: "color-guard-wear-catalog",
    repHandoff: "color-guard-wear-rep",
    relatedAudienceHref: "#/performing-arts",
    relatedLabel: "Performing Arts"
  }
};

const routes = {
  "/": {
    title: "Hero Slideshow",
    eyebrow: "Featured",
    copy: "Use the homepage to find featured stories, events, videos, shopping, and account actions.",
    hideHero: true,
    custom: renderHome,
    cards: [
      card("Cheer", "Start here for cheer camps, competitions, School, All Star, uniforms, Watch, and support.", "#/cheer", "Explore"),
      card("Dance", "Start here for School, All Star, dance events, UDA/NDA, CLI Studios, fashion/uniforms, Watch, and support.", "#/dance", "Explore"),
      card("Events", "Find camps, competitions, tickets, event gear, schedules, results, Watch, and myVarsity.", "#/events", "Explore"),
      card("Yearbook", "Find adviser, family, ordering, eShare, workshop, login, and rep help.", "#/yearbook", "Explore"),
      card("Performing Arts", "Find band, color guard, Stanbury, events, catalog, and rep help.", "#/performing-arts", "Explore"),
      card("Fashion and Uniforms", "Browse team apparel, uniforms, catalogs, inspiration, rep help, and My Team Shop.", "#/fashion-uniforms", "Explore"),
      card("Watch", "Watch live coverage, upcoming events, replays, and event videos.", "#/watch", "Explore"),
      card("Shop", "Shop products and event merchandise for parents, athletes, fans, and individual buyers.", "#/shop", "Explore")
    ]
  },
  "/search": {
    title: "Search Results",
    eyebrow: "Search",
    copy: (path, query) => {
      const searchTerm = query.get("q") || "";
      return searchTerm
        ? `Results for "${searchTerm}".`
        : "Search Varsity.com prototype pages, events, guides, news, support routes, and handoffs.";
    },
    custom: renderSearchPage
  },
  "/cheer": {
    title: "Cheer",
    eyebrow: "Start with Cheer",
    copy: "Choose the cheer path that fits you, whether you are with a school, all star program, youth/rec team, or family.",
    custom: () => renderRouteCardsWithNews("/cheer", "Latest Cheer news", "Helpful updates, guides, and stories connected to cheer.", { activity: "Cheer" }),
    cards: [
      card("Cheer Events", "Camps, competitions, special events, schedules, results, tickets, gear, and registration help.", "#/events?activity=Cheer", "Events"),
      card("School", "Find school cheer camps, competitions, resources, fashion/uniforms, and news.", "#/audience/school?activity=Cheer", "Program"),
      card("All Star", "Find All Star competitions, results, scoring, The Varsity Cheer League, resources, and fashion/uniforms.", "#/audience/all-star?activity=Cheer", "Program"),
      card("Learn Cheer", "Beginner guides, participation pathways, camps, rankings, rules, safety, and coach resources.", "#/learn?activity=Cheer", "Knowledge"),
      card("Find a Cheer Gym", "Search prototype cheer gym listings by location, program type, and services.", "#/directory?type=Cheer%20Gym", "Directory"),
      card("The Varsity Cheer League", "Follow The League for All Star Cheer point events, standings, rankings, and related Varsity TV coverage.", "#/the-varsity-cheer-league", "All Star Cheer"),
      card("Fashion and Uniforms", "Cheer fashion, uniforms, My Team Shop, catalogs, sizing, and rep support.", "#/fashion-uniforms?activity=Cheer", "Apparel"),
      card("Shop", "Shop cheer products and event merchandise as an athlete, parent, or fan.", "#/shop?activity=Cheer", "Commerce"),
      card("Watch Cheer", "Live and replay coverage for cheer events.", "#/watch?activity=Cheer", "Watch"),
      card("Cheer Support", "Registration, payment, ticket, event gear, uniform, and account help.", "#/support?topic=Cheer", "Support")
    ]
  },
  "/the-varsity-cheer-league": {
    title: "The Varsity Cheer League",
    eyebrow: "All Star Cheer standings",
    copy: "Use this path when you want to follow The League: All Star Cheer point events, standings, rankings, and related Varsity TV coverage.",
    custom: renderLeaguePage
  },
  "/dance": {
    title: "Dance",
    eyebrow: "Start with Dance",
    copy: "Choose the dance path that fits you, including School, All Star, events, dance brands, rules, results, uniforms, Watch, CLI Studios, and support.",
    custom: () => renderRouteCardsWithNews("/dance", "Latest Dance news", "Helpful updates, guides, and stories connected to dance.", { activity: "Dance" }),
    cards: [
      card("Dance Events", "Dance camps, competitions, schedules, results, tickets, gear, and registration help.", "#/events?activity=Dance", "Events"),
      card("School", "Find school dance camps, competitions, resources, fashion/uniforms, and news.", "#/audience/school?activity=Dance", "Program"),
      card("All Star", "Find All Star dance competitions, results, scoring, resources, and fashion/uniforms.", "#/audience/all-star?activity=Dance", "Program"),
      card("Learn Dance", "Participation pathways, dance brands, training, event guidance, uniforms, and next steps.", "#/learn?activity=Dance", "Knowledge"),
      card("Find a Dance Studio", "Search prototype dance studio listings by location, program type, and services.", "#/directory?type=Dance%20Studio", "Directory"),
      card("School Dance / Drill Team Tryouts", "Help for parents and students preparing for school dance or drill team tryouts.", "#/learn?category=School%20Tryouts&activity=Dance", "Tryouts"),
      card("CLI Studios", "Explore online classes, teacher training, conservatory programs, auditions, and intensives.", "#/handoff/clistudios", "Dance training"),
      card("Dance Brands", "Explore UDA, NDA, USA, Varsity All Star, and other dance event brands.", "#/dance-brands", "Dance"),
      card("Dance Fashion and Uniforms", "Dance fashion, uniforms, shoes, warmups, My Team Shop, and rep support.", "#/fashion-uniforms?activity=Dance", "Apparel"),
      card("Shop", "Shop dance products and event merchandise as an athlete, parent, or fan.", "#/shop?activity=Dance", "Commerce"),
      card("Watch Dance", "Live and replay coverage for dance events.", "#/watch?activity=Dance", "Watch"),
      card("Dance Support", "Dance event, registration, payment, fashion, Varsity TV, and CLI help.", "#/support?topic=Dance", "Support")
    ]
  },
  "/yearbook": {
    title: "Yearbook",
    eyebrow: "Yearbook help",
    copy: "Choose whether you are working on the yearbook staff or looking to buy, submit, or get help as a student or family member.",
    cards: [
      card("Adviser / Staff", "eDesign, classroom support, business tools, printing, workshops, login, and rep support.", "#/audience/yearbook-adviser", "Audience"),
      card("Students / Families", "Buy a yearbook or ad, submit photos, get customer service, and learn why yearbooks matter.", "#/audience/yearbook-family", "Audience"),
      card("Yearbook Knowledge Hub", "Student, adviser, staff, sales, photo collection, and team-building guides.", "#/learn?activity=Yearbook", "Knowledge"),
      card("Buy Yearbook or Ad", "Go to the Yearbook Order Center to purchase a yearbook, ad, or dedication.", "#/handoff/yearbookorder", "Commerce"),
      card("eShare Photo Upload", "Submit photos for your school yearbook through eShare.", "#/handoff/eshare", "Tool"),
      card("Events and Workshops", "Yearbook workshops are discoverable through Events too.", "#/events?activity=Yearbook", "Events"),
      card("Yearbook News", "Read order reminders, adviser updates, workshop recaps, and family tips.", "#/news?category=Yearbook", "News"),
      card("Find Your Rep", "Get connected with the right representative for your school.", "#/handoff/rep", "Rep")
    ]
  },
  "/performing-arts": {
    title: "Performing Arts",
    eyebrow: "Performing Arts",
    copy: "Find products, uniforms, events, catalogs, and rep help for band, color guard, and performing arts programs.",
    cards: [
      card("Band Wear", "Find band apparel, products, and uniform help.", "#/performing-product/band-wear", "Products"),
      card("Band Knowledge Hub", "Beginner band, marching band, instrument, band camp, uniform, and parent guides.", "#/learn?activity=Band", "Knowledge"),
      card("Color Guard", "Find color guard uniforms, accessories, catalogs, and rep help.", "#/performing-product/color-guard", "Products"),
      card("Stanbury", "Learn about Stanbury uniforms and get help from a representative.", "#/performing-product/stanbury", "Uniforms"),
      card("Performing Arts Events", "Celebration of Bands and related event details.", "#/events?audience=Performing Arts", "Events"),
      card("Catalog", "View catalog or request product guidance.", "#/handoff/rep", "Catalog"),
      card("Performing Arts News", "Read planning guides, product stories, and event updates.", "#/news?category=Performing%20Arts", "News"),
      card("Contact Event Rep", "Get help with event or product questions.", "#/handoff/rep", "Rep")
    ]
  },
  "/events": {
    title: "Events",
    eyebrow: "Find events",
    copy: getEventsRouteCopy,
    custom: renderEvents
  },
  "/fashion-uniforms": {
    title: "Fashion and Uniforms",
    eyebrow: "Team apparel and uniforms",
    copy: "Browse team apparel, uniforms, catalogs, inspiration, rep help, and My Team Shop. Anyone can look around, and coaches or directors can start order-related conversations.",
    custom: renderFashionUniforms
  },
  "/watch": {
    title: "Watch",
    eyebrow: "Varsity TV",
    copy: "Find live events, upcoming coverage, replays, saved teams, and event videos.",
    cards: [
      card("Live Now", "Current and live-soon event coverage.", "#/handoff/varsitytv", "Varsity TV"),
      card("Upcoming", "Upcoming coverage by event, team, activity, and date.", "#/handoff/varsitytv", "Varsity TV"),
      card("Replays", "Watch replays from completed or archived events.", "#/handoff/varsitytv", "Varsity TV"),
      card("Cheer Coverage", "Cheer event streams and replays.", "#/watch?activity=Cheer", "Cheer"),
      card("Dance Coverage", "Dance event streams and replays.", "#/watch?activity=Dance", "Dance"),
      card("The Varsity Cheer League Standings", "Follow All Star Cheer standings and point-event progress.", "#/handoff/league-standings", "Standings"),
      card("Watch News", "Find coverage guides, replay updates, and featured stories.", "#/news?category=Watch%20Online", "News"),
      card("Event Coverage", "Find an event first, then continue to the coverage available for that event.", "#/events", "Events")
    ]
  },
  "/shop": {
    title: "Shop",
    eyebrow: "Individual commerce",
    copy: "Shop products and event merchandise as a parent, athlete, fan, or individual buyer. For team uniforms or My Team Shop, start with Fashion and Uniforms.",
    cards: [
      card("Shoes", "Individual shoe shopping.", "#/handoff/shop", "Shop"),
      card("Poms", "Individual product shopping.", "#/handoff/shop", "Shop"),
      card("Apparel", "Apparel and activewear.", "#/handoff/shop", "Shop"),
      card("Beauty", "Beauty products.", "#/handoff/shop", "Shop"),
      card("Event Merchandise", "Gear tied to a competition or event.", "#/events", "Event gear"),
      card("Need My Team Shop?", "Use your team link, code, or sign-in to find your private shop.", "#/handoff/myteamshop", "Private")
    ]
  },
  "/support": {
    title: "Support",
    eyebrow: "Help center",
    copy: "Start here when you need help with an event, order, account, team shop, uniform, ticket, or yearbook question.",
    cards: [
      card("Event Help", "Registration, status, payment, tickets, event gear, schedule, results, and travel help.", "#/support-detail/events", "Events"),
      card("myVarsity Help", "Account, registration, roster, status, and payment help.", "#/handoff/myvarsity", "Account"),
      card("Ticket Help", "Ticketing support for competitions and ticketed events.", "#/handoff/tickets", "Tickets"),
      card("Event Gear Help", "Event merchandise and order help.", "#/handoff/gear", "Commerce"),
      card("Fashion / Uniforms Help", "Catalog, sizing, rep, My Team Shop, and order help.", "#/support-detail/fashion-uniforms", "Products"),
      card("Yearbook Help", "Order Center, eShare, adviser login, rep, and customer service.", "#/yearbook", "Yearbook")
    ]
  },
  "/social": {
    title: "Social Channels",
    eyebrow: "Follow Varsity",
    copy: "Find official Varsity social channels by brand, activity, program, and platform.",
    custom: renderSocialDirectory
  },
  "/news": {
    title: "News & Stories",
    eyebrow: "Latest updates",
    copy: "Find helpful updates, stories, recaps, guides, and announcements by activity, brand, event, or topic.",
    custom: renderNews
  },
  "/learn": {
    title: "Spirit Industry Knowledge Hub",
    eyebrow: "Category authority",
    copy: "Evergreen guides for families, athletes, coaches, advisers, directors, and anyone learning how cheer, dance, band, yearbook, events, rules, rankings, training, and career paths work.",
    custom: renderKnowledgeHub
  },
  "/directory": {
    title: "Cheer Gym and Dance Studio Directory",
    eyebrow: "Find a program",
    copy: "Search prototype cheer gym and dance studio listings by location, program type, and services.",
    custom: renderDirectory
  },
  "/myvarsity": {
    title: "myVarsity",
    eyebrow: "Account and event management",
    copy: "Use myVarsity for most event registration, management, status checks, rosters, and payments.",
    custom: () => renderHandoff("myvarsity")
  }
};

function card(title, copy, href, label = "") {
  return { title, copy, href, label };
}

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, queryString = ""] = raw.split("?");
  const query = new URLSearchParams(queryString);
  return { path, query };
}

function setActiveLinks(path) {
  document.querySelectorAll(".site-menu a, .mobile-quick-nav a").forEach((link) => {
    const linkPath = link.getAttribute("href").replace("#", "");
    const isMyVarsityAlias = linkPath === "/myvarsity" && path === "/handoff/myvarsity";
    const isHelpAlias = linkPath === "/support" && path.startsWith("/support");
    const isActive = linkPath === path || (path.startsWith(linkPath) && linkPath !== "/") || isMyVarsityAlias || isHelpAlias;
    link.toggleAttribute("aria-current", isActive);
  });
}

function render() {
  const { path, query } = parseHash();
  const route = resolveRoute(path);
  const routeCopy = getRouteCopy(route, path, query);
  setActiveLinks(path);
  renderBreadcrumbs(path, route.title);
  syncSearchInput(path, query);

  view.innerHTML = `
    ${route.hideHero ? "" : `
      <div class="hero-wire">
        <p class="eyebrow">${route.eyebrow || "Start here"}</p>
        <h1>${route.title}</h1>
        <p class="lede">${routeCopy}</p>
      </div>
    `}
    ${route.custom ? route.custom(path, query) : renderCards(route.cards || [])}
  `;

  view.focus({ preventScroll: true });
  resetPageScroll();
  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function syncSearchInput(path, query) {
  if (path === "/search") {
    searchInput.value = query.get("q") || "";
  }
  searchResults.hidden = true;
  searchResults.innerHTML = "";
}

function resetPageScroll() {
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

function getRouteCopy(route, path, query) {
  if (typeof route.copy === "function") return route.copy(path, query);
  return route.copy || "";
}

function resolveRoute(path) {
  if (routes[path]) return routes[path];

  if (path.startsWith("/event/")) {
    const id = path.split("/").pop();
    const event = eventData.find((item) => item.id === id) || eventData[0];
    return {
      title: event.title,
      eyebrow: `${event.type} detail`,
      copy: "Use this event page to review details and choose what you need next.",
      custom: () => renderEventDetail(event)
    };
  }

  if (path.startsWith("/news/")) {
    const id = path.split("/").pop();
    const story = newsData.find((item) => item.id === id) || newsData[0];
    return {
      title: story.title,
      eyebrow: `${story.type} | ${story.category}`,
      copy: story.summary,
      custom: () => renderNewsDetail(story)
    };
  }

  if (path.startsWith("/learn/")) {
    const id = path.split("/").pop();
    const guide = knowledgeData.find((item) => item.id === id) || knowledgeData[0];
    return {
      title: guide.title,
      eyebrow: `${guide.type} | ${guide.category}`,
      copy: guide.summary,
      custom: () => renderKnowledgeDetail(guide)
    };
  }

  if (path.startsWith("/directory/")) {
    const id = path.split("/").pop();
    const listing = directoryData.find((item) => item.id === id) || directoryData[0];
    return {
      title: listing.name,
      eyebrow: listing.type,
      copy: `${listing.city}, ${listing.state} | ${listing.programs.join(", ")}`,
      custom: () => renderDirectoryDetail(listing)
    };
  }

  if (path.startsWith("/handoff/")) {
    const key = path.split("/").pop();
    return {
      title: handoffs[key]?.title || "Next step",
      eyebrow: "Next step",
      copy: "Continue here for the option you selected.",
      custom: () => renderHandoff(key)
    };
  }

  if (path.startsWith("/audience/")) {
    return renderAudienceRoute(path.split("/").pop());
  }

  if (path.startsWith("/support-detail/")) {
    return renderSupportDetail(path.split("/").pop());
  }

  if (path.startsWith("/performing-product/")) {
    return renderPerformingProduct(path.split("/").pop());
  }

  if (path.startsWith("/uniforms/")) {
    return renderUniformRoute(path.split("/").pop());
  }

  if (path === "/dance-brands") {
    return {
      title: "Dance Brands",
      eyebrow: "Dance brand choices",
      copy: "Choose from several dance brands to find events, camps, rules, scoring, results, Watch, Fashion and Uniforms, and support.",
      custom: renderDanceBrands
    };
  }

  return routes["/"];
}

function renderHome() {
  return `
    <section class="home-hero-module simple-home-hero" aria-label="Homepage hero slideshow">
      <div class="hero-media-placeholder">
        <span>Hero slideshow image / video</span>
      </div>
      <div class="hero-controls" aria-label="Hero slideshow controls">
        <button type="button" aria-label="Previous slide">‹</button>
        <div class="hero-dots" aria-label="Slide position">
          <span class="is-active"></span>
          <span></span>
          <span></span>
        </div>
        <button type="button" aria-label="Next slide">›</button>
      </div>
    </section>

    <section class="view-section">
      <div class="card-grid">${routes["/"].cards.map(renderCard).join("")}</div>
    </section>
  `;
}

function renderDanceBrands() {
  const cards = [
    card("UDA Events", "Find UDA dance camps and competitions.", "#/events?activity=Dance&brand=UDA", "Events"),
    card("NDA Events", "Find NDA dance camps and competitions.", "#/events?activity=Dance&brand=NDA", "Events"),
    card("USA Dance Events", "Find USA school dance, song, pom, and spirit competitions.", "#/events?activity=Dance&brand=USA", "Events"),
    card("Varsity All Star Dance", "Find All Star dance championship events like The Dance Summit.", "#/events?activity=Dance&audience=All%20Star&brand=Varsity%20All%20Star", "Events"),
    card("Athletic Championships", "Find dance events connected to Athletic Championships.", "#/events?activity=Dance&brand=Athletic%20Championships", "Events"),
    card("All Star Championships", "Find dance events connected to All Star Championships.", "#/events?activity=Dance&brand=All%20Star%20Championships", "Events"),
    card("All Dance Events", "Browse the full dance event list across brands.", "#/events?activity=Dance", "Events"),
    card("Dance News", "Read dance brand updates, event guides, and helpful stories.", "#/news?activity=Dance", "News"),
    card("Dance Rules and Scoring", "Rules, scoring, divisions, and requirements.", "#/support-detail/events", "Learn"),
    card("Shop", "Shop dance products and event merchandise.", "#/shop?activity=Dance", "Commerce"),
    card("Watch Dance", "Varsity TV coverage for dance events.", "#/watch?activity=Dance", "Watch")
  ];

  return `
    ${renderCards(cards)}
    ${renderNewsTeaserSection({
      title: "Latest Dance news",
      copy: "Helpful updates, guides, and stories connected to dance brands and events.",
      filters: { activity: "Dance" },
      limit: 3,
      ctaHref: getNewsHref({ activity: "Dance" }),
      ctaLabel: "See Dance news"
    })}
  `;
}

function renderLeaguePage() {
  const leagueEvents = getLeagueEvents();
  const cards = [
    card("League Standings", "Go to Varsity TV standings for The League season-long All Star Cheer rankings.", "#/handoff/league-standings", "Standings"),
    card("League Point Events", "Find All Star Cheer competitions in this prototype that are marked as League point events.", "#/events?activity=Cheer&audience=All%20Star&q=The%20Varsity%20Cheer%20League", "Events"),
    card("All Star Cheer Events", "Browse the broader All Star Cheer event list for registration, tickets, gear, schedules, and results.", "#/events?activity=Cheer&audience=All%20Star", "Events"),
    card("Watch Cheer", "Find live and replay coverage tied to Cheer events.", "#/watch?activity=Cheer", "Watch"),
    card("Rules and Scoring", "Use the event help path for rules, scoring, divisions, and event requirements.", "#/support-detail/events", "Support"),
    card("League News", "Read helpful updates and stories connected to The Varsity Cheer League.", "#/news?activity=Cheer&audience=All%20Star", "News")
  ];

  return `
    ${renderCards(cards)}
    <section class="view-section">
      <div class="section-head">
        <h2>League point events in this prototype</h2>
        <p>These sample All Star Cheer events are marked with League point information so a customer can move from the League page into event details.</p>
      </div>
      <div class="event-list">
        ${leagueEvents.length ? leagueEvents.slice(0, 6).map(renderEventCard).join("") : `<article class="event-card"><span class="status-pill">Coming soon</span><h3>League point events</h3><p>Point-event labels can appear here when the event list is connected to live data.</p></article>`}
      </div>
      ${leagueEvents.length > 6 ? `<div class="action-grid"><a class="ghost-button" href="#/events?activity=Cheer&audience=All%20Star&q=The%20Varsity%20Cheer%20League">See all League point events</a></div>` : ""}
    </section>
    ${renderNewsTeaserSection({
      title: "League news",
      copy: "Helpful updates, guides, and stories connected to The Varsity Cheer League.",
      filters: { activity: "Cheer", audience: "All Star" },
      limit: 3,
      ctaHref: getNewsHref({ activity: "Cheer", audience: "All Star" }),
      ctaLabel: "See Cheer news"
    })}
  `;
}

function getEventsRouteCopy(path, query) {
  if (query?.get("audience") === "All Star") {
    return "Search All Star competitions, special events, tickets, event gear, schedules, results, Watch, and myVarsity help.";
  }

  if (query?.get("audience") === "School") {
    return "Search school camps, competitions, special events, Spirit Days, tickets, event gear, schedules, results, Watch, and myVarsity help.";
  }

  return "Search school camps, competitions, special events, Spirit Days, workshops, performing arts events, tickets, event gear, schedules, results, Watch, and myVarsity help.";
}

function renderCards(cards) {
  return `
    <section class="view-section">
      <div class="card-grid">
        ${cards.map(renderCard).join("")}
      </div>
    </section>
  `;
}

function renderRouteCardsWithNews(routePath, newsTitle, newsCopy, filters) {
  const route = routes[routePath];

  return `
    ${renderCards(route.cards || [])}
    ${renderNewsTeaserSection({
      title: newsTitle,
      copy: newsCopy,
      filters,
      limit: 3,
      ctaHref: getNewsHref(filters),
      ctaLabel: "See more news"
    })}
  `;
}

function renderCard(item) {
  return `
    <a class="route-card" href="${item.href}">
      ${item.label ? `<span>${item.label}</span>` : ""}
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </a>
  `;
}

function renderNews(path, query) {
  const filters = getNewsFilters(query);
  const activeFilter = filters.category || filters.activity || "All";
  const filterOptions = ["All", "Cheer", "Dance", "Events", "Yearbook", "Performing Arts", "Fashion and Uniforms", "Watch"];
  const stories = getFilteredNews(filters);

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Browse news</h2>
        <p>Choose a topic to find updates, guides, recaps, announcements, and stories.</p>
      </div>
      <div class="filters" aria-label="News filters">
        ${filterOptions.map((item) => `<a class="tag-button ${item === activeFilter ? "is-active" : ""}" href="${getNewsFilterHref(item, filters)}">${item}</a>`).join("")}
      </div>
      <p class="event-meta">${stories.length} stor${stories.length === 1 ? "y" : "ies"} shown${getNewsFilterLabel(filters)}.</p>
      <div class="card-grid">
        ${stories.length ? stories.map(renderNewsCard).join("") : renderNoNewsMatches()}
      </div>
    </section>
  `;
}

function renderNewsCard(story) {
  return `
    <a class="route-card news-card" href="#/news/${story.id}">
      <span>${story.type}</span>
      <h3>${story.title}</h3>
      <p>${story.summary}</p>
      <p class="event-meta">${formatNewsDate(story.publishedDate)} | ${[story.activity, story.audience, story.brand].filter(Boolean).join(" | ")}</p>
    </a>
  `;
}

function renderNoNewsMatches() {
  return `<article class="route-card"><span>No match</span><h3>No stories found</h3><p>Try another topic or clear the filter.</p></article>`;
}

function renderNewsDetail(story) {
  const relatedEvent = story.eventId ? eventData.find((event) => event.id === story.eventId) : null;
  const relatedCards = [
    relatedEvent ? card("Related Event", `Open details for ${relatedEvent.title}.`, `#/event/${relatedEvent.id}`, "Event") : null,
    story.activity ? card(`${story.activity} Events`, `Find ${story.activity.toLowerCase()} events connected to this topic.`, `#/events?activity=${encodeURIComponent(story.activity)}`, "Events") : null,
    story.activity === "Cheer" || story.activity === "Dance" ? card("Shop", `Shop ${story.activity.toLowerCase()} products and event merchandise.`, `#/shop?activity=${encodeURIComponent(story.activity)}`, "Commerce") : null,
    card("Need Help?", "Get support for events, orders, accounts, team shops, or other questions.", "#/support", "Support")
  ].filter(Boolean);

  return `
    <section class="view-section">
      <div class="detail-card">
        <span>${story.type}</span>
        <h2>${story.title}</h2>
        <p>${story.summary}</p>
        <ul class="status-list">
          <li><span>Published</span><strong>${formatNewsDate(story.publishedDate)}</strong></li>
          <li><span>Topic</span><strong>${story.category}</strong></li>
          ${story.activity ? `<li><span>Activity</span><strong>${story.activity}</strong></li>` : ""}
          ${story.audience ? `<li><span>Audience</span><strong>${story.audience}</strong></li>` : ""}
          ${story.brand ? `<li><span>Brand</span><strong>${story.brand}</strong></li>` : ""}
        </ul>
      </div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Helpful next steps</h2>
        <p>Continue to the event, activity, shopping, or support area connected to this story.</p>
      </div>
      <div class="card-grid">${relatedCards.map(renderCard).join("")}</div>
    </section>
  `;
}

function renderKnowledgeHub(path, query) {
  const filters = getKnowledgeFilters(query);
  const activeFilter = filters.activity || filters.category || "All";
  const filterOptions = [
    { label: "All", filters: {} },
    { label: "Cheer", filters: { activity: "Cheer" } },
    { label: "Dance", filters: { activity: "Dance" } },
    { label: "Band", filters: { activity: "Band" } },
    { label: "Yearbook", filters: { activity: "Yearbook" } },
    { label: "Tryouts", filters: { category: "School Tryouts" } },
    { label: "Camps", filters: { category: "Camps and Training" } },
    { label: "Competitions", filters: { category: "Competitions and Qualification" } },
    { label: "Coaches", filters: { category: "Coach Resource Center" } },
    { label: "Rules", filters: { category: "Rules and Safety" } },
    { label: "Rankings", filters: { category: "Rankings" } },
    { label: "Careers", filters: { category: "Career Paths" } }
  ];
  const guides = getFilteredKnowledge(filters);
  const grouped = groupKnowledgeByCategory(guides);

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Ask Varsity</h2>
        <p>Use this hub for evergreen answers to beginner, parent, athlete, coach, and industry questions.</p>
      </div>
      <div class="filters" aria-label="Knowledge filters">
        ${filterOptions.map((item) => `<a class="tag-button ${isKnowledgeFilterActive(item.filters, filters, activeFilter) ? "is-active" : ""}" href="${getKnowledgeHref(item.filters)}">${item.label}</a>`).join("")}
      </div>
      <div class="card-grid">
        ${[
          card("How do I start competitive cheer?", "A beginner path for families and athletes entering cheer.", "#/learn/how-to-start-competitive-cheer", "Question"),
          card("My kid wants to play an instrument", "A parent path for school band and instrument sign-up questions.", "#/learn/my-kid-wants-to-play-an-instrument", "Question"),
          card("My kid is trying out for cheerleader", "A parent path for school cheer tryouts.", "#/learn/my-kid-trying-out-for-school-cheerleader", "Question"),
          card("I want to try out for drill team", "A student path for school dance and drill team tryouts.", "#/learn/i-want-to-try-out-for-drill-team", "Question"),
          card("Best cheer camps in Texas", "A school cheer camp discovery path with prep and registration next steps.", "#/learn/best-cheer-camps-in-texas", "Question"),
          card("How does Nationals qualification work?", "A competition and qualification explainer for families and coaches.", "#/learn/how-nationals-qualification-works", "Question"),
          card("What does a cheer coach need to know?", "A coach resource path for events, rosters, payments, uniforms, and support.", "#/learn/what-cheer-coach-needs-to-know", "Question"),
          card("Why work on the yearbook?", "A student path for yearbook skills, leadership, and school storytelling.", "#/learn/why-work-on-yearbook", "Question")
        ].map(renderCard).join("")}
      </div>
    </section>
    ${grouped.map((group) => `
      <section class="view-section">
        <div class="section-head">
          <h2>${escapeHtml(group.category)}</h2>
        </div>
        <div class="card-grid">${group.guides.map(renderKnowledgeCard).join("")}</div>
      </section>
    `).join("")}
  `;
}

function renderKnowledgeCard(guide) {
  return `
    <a class="route-card knowledge-card" href="#/learn/${guide.id}">
      <span>${escapeHtml(guide.type)}</span>
      <h3>${escapeHtml(guide.title)}</h3>
      <p>${escapeHtml(guide.summary)}</p>
      <p class="event-meta">${[guide.activity, guide.audience].filter(Boolean).map(escapeHtml).join(" | ")}</p>
    </a>
  `;
}

function renderKnowledgeDetail(guide) {
  const relatedGuides = knowledgeData
    .filter((item) => item.id !== guide.id && (item.category === guide.category || (guide.activity && item.activity === guide.activity)))
    .slice(0, 3)
    .map((item) => card(item.title, item.summary, `#/learn/${item.id}`, item.type));

  return `
    <section class="view-section">
      <div class="detail-card">
        <span>${escapeHtml(guide.type)}</span>
        <h2>${escapeHtml(guide.title)}</h2>
        <p>${escapeHtml(guide.summary)}</p>
        <ul class="status-list">
          <li><span>Hub category</span><strong>${escapeHtml(guide.category)}</strong></li>
          ${guide.activity ? `<li><span>Activity</span><strong>${escapeHtml(guide.activity)}</strong></li>` : ""}
          ${guide.audience ? `<li><span>Audience</span><strong>${escapeHtml(guide.audience)}</strong></li>` : ""}
        </ul>
      </div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Questions this answers</h2>
      </div>
      <div class="event-info-grid">
        ${(guide.answers || []).map((answer) => `
          <div class="detail-card">
            <span>Question</span>
            <h2>${escapeHtml(answer)}</h2>
            <p>This guide should answer the question directly, then help the visitor choose the right Varsity next step.</p>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Helpful next steps</h2>
      </div>
      <div class="card-grid">${(guide.nextSteps || []).map(renderCard).join("")}</div>
    </section>
    ${relatedGuides.length ? `
      <section class="view-section">
        <div class="section-head">
          <h2>Related guides</h2>
        </div>
        <div class="card-grid">${relatedGuides.map(renderCard).join("")}</div>
      </section>
    ` : ""}
  `;
}

function getKnowledgeFilters(query) {
  return {
    activity: query.get("activity") || "",
    category: query.get("category") || ""
  };
}

function isKnowledgeFilterActive(optionFilters, activeFilters, activeFilter) {
  if (!optionFilters.activity && !optionFilters.category) return activeFilter === "All";
  if (optionFilters.activity) return activeFilters.activity === optionFilters.activity;
  if (optionFilters.category) return activeFilters.category === optionFilters.category;
  return false;
}

function getKnowledgeHref(filters = {}) {
  const params = new URLSearchParams();
  if (filters.activity) params.set("activity", filters.activity);
  if (filters.category) params.set("category", filters.category);
  const queryString = params.toString();
  return `#/learn${queryString ? `?${queryString}` : ""}`;
}

function getFilteredKnowledge(filters = {}) {
  return knowledgeData.filter((guide) => {
    if (filters.activity && guide.activity !== filters.activity) return false;
    if (filters.category && guide.category !== filters.category) return false;
    return true;
  });
}

function groupKnowledgeByCategory(guides) {
  const categories = ["Start Here", "School Tryouts", "Participation Pathways", "Band and Marching Arts", "Yearbook", "Camps and Training", "Competitions and Qualification", "Coach Resource Center", "Rules and Safety", "Rankings", "Career Paths"];
  return categories
    .map((category) => ({
      category,
      guides: guides.filter((guide) => guide.category === category)
    }))
    .filter((group) => group.guides.length);
}

function renderDirectory(path, query) {
  const filters = getDirectoryFilters(query);
  const directorySearch = query.get("q") || "";
  const filtered = getRankedDirectoryItems(filters, directorySearch);
  const activeType = filters.type || "All";
  const activeState = filters.state || "All";
  const activeProgram = filters.program || "All";
  const typeOptions = ["All", "Cheer Gym", "Dance Studio", "Cheer Gym + Dance Studio"];
  const stateOptions = ["All", ...Array.from(new Set(directoryData.map((item) => item.state))).sort()];
  const programOptions = ["All", "School", "All Star", "Recreational", "Training"];

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Find a cheer gym or dance studio</h2>
        <p>Search by name, city, state, program type, or service. These are sample listings for the prototype so we can test how a real directory could work.</p>
      </div>
      <label class="event-search-field" for="directory-search">Search gyms and studios</label>
      <div class="search-row event-search-row">
        <input id="directory-search" type="search" autocomplete="off" value="${escapeAttribute(directorySearch)}" placeholder="Try Dallas cheer, dance studio, tumbling, drill team prep">
        <button type="button" id="clear-directory-search">Clear</button>
      </div>
      <div class="directory-filter-block">
        <div>
          <p class="mini-filter-label">Type</p>
          <div class="filters" aria-label="Directory type filters">
            ${typeOptions.map((item) => `<a class="tag-button ${item === activeType ? "is-active" : ""}" href="${getDirectoryFilterHref({ ...filters, type: item === "All" ? "" : item }, directorySearch)}">${item}</a>`).join("")}
          </div>
        </div>
        <div>
          <p class="mini-filter-label">State</p>
          <div class="filters" aria-label="Directory state filters">
            ${stateOptions.map((item) => `<a class="tag-button ${item === activeState ? "is-active" : ""}" href="${getDirectoryFilterHref({ ...filters, state: item === "All" ? "" : item }, directorySearch)}">${item}</a>`).join("")}
          </div>
        </div>
        <div>
          <p class="mini-filter-label">Program</p>
          <div class="filters" aria-label="Directory program filters">
            ${programOptions.map((item) => `<a class="tag-button ${item === activeProgram ? "is-active" : ""}" href="${getDirectoryFilterHref({ ...filters, program: item === "All" ? "" : item }, directorySearch)}">${item}</a>`).join("")}
          </div>
        </div>
      </div>
      <div class="event-result-summary" id="directory-result-summary">${renderDirectorySummary(filtered.length, directorySearch, filters)}</div>
      <div class="directory-list" id="directory-list">
        ${filtered.length ? filtered.map(renderDirectoryCard).join("") : renderNoDirectoryMatches(directorySearch)}
      </div>
      <div class="notice">
        Directory data in this prototype is sample content. A production directory would need a verified source of gyms, studios, locations, program types, and contact rules.
      </div>
    </section>
  `;
}

function renderDirectoryCard(listing) {
  return `
    <article class="event-card directory-card">
      <div class="event-card-header">
        <div>
          <span class="status-pill">Sample listing</span>
          <h3>${escapeHtml(listing.name)}</h3>
          <p class="event-meta">${escapeHtml(listing.type)} | ${escapeHtml(listing.city)}, ${escapeHtml(listing.state)}</p>
        </div>
      </div>
      <ul class="status-list">
        <li><span>Programs</span><strong>${listing.programs.map(escapeHtml).join(", ")}</strong></li>
        <li><span>Services</span><strong>${listing.services.slice(0, 3).map(escapeHtml).join(", ")}</strong></li>
      </ul>
      <div class="action-grid">
        <a class="button" href="#/directory/${listing.id}">Open listing</a>
        <a class="ghost-button" href="#/learn?activity=${encodeURIComponent(listing.activity.split(" / ")[0])}">Learn ${escapeHtml(listing.activity.split(" / ")[0])}</a>
        <a class="ghost-button" href="#/events?activity=${encodeURIComponent(listing.activity.split(" / ")[0])}">Find related events</a>
      </div>
    </article>
  `;
}

function renderDirectoryDetail(listing) {
  const activity = listing.activity.split(" / ")[0];
  const nextStepCards = [
    card(`Learn ${activity}`, `Read beginner guides and helpful next steps connected to ${activity.toLowerCase()}.`, `#/learn?activity=${encodeURIComponent(activity)}`, "Knowledge"),
    card(`${activity} Events`, `Find camps, competitions, schedules, results, registration, and event help connected to ${activity.toLowerCase()}.`, `#/events?activity=${encodeURIComponent(activity)}`, "Events"),
    card(`${activity} Shop`, `Shop ${activity.toLowerCase()} products and event merchandise.`, `#/shop?activity=${encodeURIComponent(activity)}`, "Shop"),
    card("Directory", "Return to the searchable gym and studio directory.", "#/directory", "Directory")
  ];

  return `
    <section class="view-section">
      <div class="detail-card">
        <span>Sample listing</span>
        <h2>${escapeHtml(listing.name)}</h2>
        <p>${escapeHtml(listing.note)}</p>
        <ul class="status-list">
          <li><span>Type</span><strong>${escapeHtml(listing.type)}</strong></li>
          <li><span>Location</span><strong>${escapeHtml(listing.city)}, ${escapeHtml(listing.state)}</strong></li>
          <li><span>Programs</span><strong>${listing.programs.map(escapeHtml).join(", ")}</strong></li>
          <li><span>Audience</span><strong>${escapeHtml(listing.audience)}</strong></li>
        </ul>
      </div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Services</h2>
      </div>
      <div class="card-grid">
        ${listing.services.map((service) => card(service, "A production listing could describe this service, age ranges, schedules, and next steps.", "#/directory", "Service")).map(renderCard).join("")}
      </div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Helpful next steps</h2>
      </div>
      <div class="card-grid">${nextStepCards.map(renderCard).join("")}</div>
      <div class="notice">This is a prototype listing. Production should define whether listings are verified, sponsored, user-submitted, rep-managed, or powered by a partner data source.</div>
    </section>
  `;
}

function getDirectoryFilters(query) {
  return {
    activity: query.get("activity") || "",
    type: query.get("type") || "",
    state: query.get("state") || "",
    program: query.get("program") || ""
  };
}

function getDirectoryFilterHref(filters = {}, directorySearch = "") {
  const params = new URLSearchParams();
  if (filters.activity) params.set("activity", filters.activity);
  if (filters.type) params.set("type", filters.type);
  if (filters.state) params.set("state", filters.state);
  if (filters.program) params.set("program", filters.program);
  if (directorySearch) params.set("q", directorySearch);
  const queryString = params.toString();
  return `#/directory${queryString ? `?${queryString}` : ""}`;
}

function getDirectoryHaystack(listing) {
  return [
    listing.name,
    listing.type,
    listing.activity,
    listing.city,
    listing.state,
    listing.programs.join(" "),
    listing.services.join(" "),
    listing.audience,
    listing.note
  ].join(" ").toLowerCase();
}

function getRankedDirectoryItems(filters = {}, query = "") {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  return directoryData
    .filter((listing) => {
      if (filters.activity && !listing.activity.toLowerCase().includes(filters.activity.toLowerCase())) return false;
      if (filters.type && !listing.type.includes(filters.type)) return false;
      if (filters.state && listing.state !== filters.state) return false;
      if (filters.program && !listing.programs.includes(filters.program)) return false;
      if (!tokens.length) return true;
      const haystack = getDirectoryHaystack(listing);
      return tokens.every((token) => haystack.includes(token));
    })
    .map((listing) => ({ listing, score: scoreDirectoryItem(listing, tokens) }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.listing.name.localeCompare(b.listing.name);
    })
    .map((item) => item.listing);
}

function scoreDirectoryItem(listing, tokens) {
  if (!tokens.length) return 0;

  const phrase = tokens.join(" ");
  const name = listing.name.toLowerCase();
  const type = listing.type.toLowerCase();
  const city = listing.city.toLowerCase();
  const state = listing.state.toLowerCase();
  const services = listing.services.join(" ").toLowerCase();
  const haystack = getDirectoryHaystack(listing);
  let score = 0;

  if (name.includes(phrase)) score += 160;
  if (city.includes(phrase)) score += 120;
  if (type.includes(phrase)) score += 90;
  if (services.includes(phrase)) score += 70;

  return tokens.reduce((total, token) => {
    if (name.includes(token)) total += 50;
    if (city.includes(token)) total += 40;
    if (state === token) total += 35;
    if (type.includes(token)) total += 30;
    if (services.includes(token)) total += 25;
    if (haystack.includes(token)) total += 5;
    return total;
  }, score);
}

function renderDirectorySummary(count, query, filters) {
  const queryText = query.trim() ? ` for "${escapeHtml(query.trim())}"` : "";
  const labels = [filters.activity, filters.type, filters.state, filters.program].filter(Boolean);
  const filterText = labels.length ? ` in ${labels.map(escapeHtml).join(" / ")}` : "";
  return `<p class="event-meta">${count} listing${count === 1 ? "" : "s"} shown${queryText}${filterText}. Best matches appear first.</p>`;
}

function renderNoDirectoryMatches(query) {
  return `
    <article class="event-card">
      <span class="status-pill">No matches</span>
      <h3>No gyms or studios found</h3>
      <p>Try a broader search like cheer, dance, Dallas, tumbling, school, All Star, or drill team prep.</p>
      ${query.trim() ? `<p class="event-meta">You searched: ${escapeHtml(query.trim())}</p>` : ""}
    </article>
  `;
}

function renderNewsTeaserSection({ title, copy, filters = {}, limit = 3, ctaHref = "#/news", ctaLabel = "See more news" }) {
  const stories = getFilteredNews(filters).slice(0, limit);
  return renderNewsTeaserStories({ title, copy, stories, ctaHref, ctaLabel });
}

function renderNewsTeaserStories({ title, copy, stories = [], ctaHref = "#/news", ctaLabel = "See more news" }) {
  if (!stories.length) return "";

  return `
    <section class="view-section news-section">
      <div class="section-head">
        <h2>${title}</h2>
        <p>${copy}</p>
      </div>
      <div class="card-grid">${stories.map(renderNewsCard).join("")}</div>
      <div class="action-grid">
        <a class="ghost-button" href="${ctaHref}">${ctaLabel}</a>
      </div>
    </section>
  `;
}

function getNewsFilters(query) {
  return {
    category: query.get("category") || "",
    activity: query.get("activity") || "",
    audience: query.get("audience") || "",
    brand: query.get("brand") || "",
    eventId: query.get("eventId") || "",
    eventType: query.get("eventType") || "",
    type: query.get("type") || ""
  };
}

function getFilteredNews(filters = {}) {
  return newsData
    .filter((story) => {
      if (filters.category && story.category !== filters.category) return false;
      if (filters.activity && story.activity !== filters.activity) return false;
      if (filters.audience && story.audience !== filters.audience) return false;
      if (filters.brand && story.brand !== filters.brand) return false;
      if (filters.eventId && story.eventId !== filters.eventId) return false;
      if (filters.eventType && getNewsEventType(story) !== filters.eventType) return false;
      if (filters.type && story.type !== filters.type) return false;
      return true;
    })
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
}

function getNewsFilterHref(item, filters = {}) {
  if (item === "All") return "#/news";
  const nextFilters = {};

  if (item === "Cheer" || item === "Dance") {
    nextFilters.activity = item;
  } else {
    nextFilters.category = item;
  }

  if (filters.eventId) nextFilters.eventId = filters.eventId;
  if (filters.audience) nextFilters.audience = filters.audience;
  if (filters.brand) nextFilters.brand = filters.brand;
  return getNewsHref(nextFilters);
}

function getNewsHref(filters = {}) {
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.activity) params.set("activity", filters.activity);
  if (filters.audience) params.set("audience", filters.audience);
  if (filters.brand) params.set("brand", filters.brand);
  if (filters.eventId) params.set("eventId", filters.eventId);
  if (filters.eventType) params.set("eventType", filters.eventType);
  if (filters.type) params.set("type", filters.type);
  const queryString = params.toString();
  return `#/news${queryString ? `?${queryString}` : ""}`;
}

function getNewsFilterLabel(filters = {}) {
  const labels = [filters.category, filters.activity, filters.audience, filters.brand, filters.eventType, filters.type].filter(Boolean);
  return labels.length ? ` in ${labels.join(" / ")}` : "";
}

function getNewsEventType(story) {
  if (story.eventType) return story.eventType;
  if (!story.eventId) return "";
  return eventData.find((event) => event.id === story.eventId)?.type || "";
}

function formatNewsDate(value) {
  const parts = value.split("-");
  const date = parts.length === 3
    ? new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
    : new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function renderEvents(path, query) {
  const filters = getEventFilters(query);
  const activeFilter = filters.activity || filters.audience || filters.type || "All";
  const eventSearch = query.get("q") || "";
  const filterOptions = filters.audience === "All Star"
    ? ["All", "Cheer", "Dance", "Yearbook", "Performing Arts", "Competition"]
    : ["All", "Cheer", "Dance", "Yearbook", "Performing Arts", "Competition", "Camp"];
  const filtered = getRankedEvents(filters, eventSearch);

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Find an event</h2>
        <p>Type a brand, city, state, event name, activity, or event type to narrow the list.</p>
      </div>
      <label class="event-search-field" for="event-search">Search events</label>
      <div class="search-row event-search-row">
        <input id="event-search" type="search" autocomplete="off" value="${escapeAttribute(eventSearch)}" placeholder="Try NDA, NDA Dallas, UCA Memphis, Dance Orlando">
        <button type="button" id="clear-event-search">Clear</button>
      </div>
      <div class="filters" aria-label="Event filters">
        ${filterOptions
          .map((item) => `<a class="tag-button ${item === activeFilter ? "is-active" : ""}" href="${getEventFilterHref(item, filters, eventSearch)}">${item}</a>`)
          .join("")}
      </div>
      <div class="event-date-filter" aria-label="Event date filter">
        <div class="date-field">
          <label for="event-date-from">From</label>
          <input id="event-date-from" type="date" value="${escapeAttribute(filters.dateFrom)}">
        </div>
        <div class="date-field">
          <label for="event-date-to">To</label>
          <input id="event-date-to" type="date" value="${escapeAttribute(filters.dateTo)}">
        </div>
        <button type="button" id="apply-event-date">Apply date</button>
        <button type="button" id="clear-event-date">Clear date</button>
      </div>
      <div class="event-result-summary" id="event-result-summary">${renderEventSummary(filtered.length, eventSearch, filters)}</div>
      <div class="event-list" id="event-list">
        ${filtered.length ? filtered.map(renderEventCard).join("") : renderNoEventMatches(eventSearch)}
      </div>
    </section>
    ${renderEventGuideSection(filters)}
  `;
}

function renderEventGuideSection(filters) {
  const cards = getEventGuideCards(filters);
  if (!cards.length) return "";

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Event guides</h2>
        <p>Learn how camps, competitions, qualification, rules, rankings, and registration tasks work.</p>
      </div>
      <div class="card-grid">${cards.map(renderCard).join("")}</div>
    </section>
  `;
}

function getEventGuideCards(filters = {}) {
  if (filters.audience === "All Star" && filters.activity === "Cheer") {
    return [
      card("How Nationals qualification works", "Learn about bids, qualification, scoring, schedules, and results.", "#/learn/how-nationals-qualification-works", "Guide"),
      card("The Varsity Cheer League rankings guide", "Understand All Star Cheer point events and standings.", "#/learn/varsity-cheer-league-rankings-guide", "Rankings"),
      card("Rules, scoring, and safety basics", "Start with rules, scoring, safety, and required forms.", "#/learn/cheer-rules-scoring-safety-basics", "Rules")
    ];
  }

  if (filters.audience === "School" && filters.activity === "Cheer") {
    return [
      card("Best cheer camps in Texas", "Use camp guidance as a model for finding school cheer camps.", "#/learn/best-cheer-camps-in-texas", "Camps"),
      card("What to pack for camp", "Prepare for school cheer camp.", "#/learn/what-to-pack-for-camp", "Checklist"),
      card("What a cheer coach needs to know", "Events, rosters, payments, uniforms, parent communication, and support.", "#/learn/what-cheer-coach-needs-to-know", "Coaches")
    ];
  }

  if (filters.activity === "Dance") {
    return [
      card("Dance participation pathways", "Understand School Dance, All Star Dance, brands, training, and next steps.", "#/learn/dance-participation-pathways", "Guide"),
      card("How Nationals qualification works", "Learn about competition and qualification basics.", "#/learn/how-nationals-qualification-works", "Guide")
    ];
  }

  return [
    card("How to start competitive cheer", "Beginner path for families and athletes.", "#/learn/how-to-start-competitive-cheer", "Start Here"),
    card("How Nationals qualification works", "Competition and qualification basics.", "#/learn/how-nationals-qualification-works", "Guide"),
    card("What a cheer coach needs to know", "Coach-first resource path.", "#/learn/what-cheer-coach-needs-to-know", "Coaches")
  ];
}

function getEventFilterHref(item, filters, eventSearch) {
  const nextFilters = {
    brand: filters.brand,
    dateFrom: filters.dateFrom,
    dateTo: filters.dateTo,
    q: eventSearch
  };

  if (item === "Cheer" || item === "Dance") {
    nextFilters.activity = item;
  }

  if (item === "Yearbook") {
    nextFilters.activity = "Yearbook";
  }

  if (item === "Performing Arts") {
    nextFilters.audience = "Performing Arts";
  }

  if (item === "Competition" || item === "Camp") {
    nextFilters.type = item;
  }

  return buildEventsHref(nextFilters);
}

function getEventHaystack(event) {
  return [
    event.title,
    event.type,
    event.activity,
    event.audience,
    event.brand,
    event.date,
    event.location,
    event.registration,
    event.tickets,
    event.gear,
    event.watch,
    event.results,
    event.points
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getEventFilters(query) {
  return {
    activity: query.get("activity") || "",
    audience: query.get("audience") || "",
    type: query.get("type") || "",
    brand: query.get("brand") || "",
    dateFrom: query.get("dateFrom") || "",
    dateTo: query.get("dateTo") || ""
  };
}

function getEventFilterLabel(filters) {
  const labels = [filters.brand, filters.activity, filters.audience, filters.type, getDateFilterLabel(filters)].filter(Boolean);
  return labels.length ? labels.join(" / ") : "All";
}

function getDateFilterLabel(filters) {
  if (filters.dateFrom && filters.dateTo) return `${formatDateFilterValue(filters.dateFrom)} to ${formatDateFilterValue(filters.dateTo)}`;
  if (filters.dateFrom) return `${formatDateFilterValue(filters.dateFrom)} or later`;
  if (filters.dateTo) return `Through ${formatDateFilterValue(filters.dateTo)}`;
  return "";
}

function formatDateFilterValue(value) {
  const parts = value.split("-");
  if (parts.length !== 3) return value;
  const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getRankedEvents(filters = {}, query = "") {
  const tokens = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return eventData
    .filter((event) => {
      if (filters.activity && event.activity !== filters.activity) return false;
      if (filters.audience && event.audience !== filters.audience) return false;
      if (filters.type && event.type !== filters.type) return false;
      if (filters.brand && !event.brand.toLowerCase().includes(filters.brand.toLowerCase())) return false;
      if (!eventMatchesDateFilter(event, filters)) return false;
      if (!tokens.length) return true;
      const haystack = getEventHaystack(event);
      return tokens.every((token) => haystack.includes(token));
    })
    .map((event) => ({ event, score: scoreEvent(event, tokens) }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.event.sortDate || "1900-01-01") - new Date(a.event.sortDate || "1900-01-01");
    })
    .map((item) => item.event);
}

function getLeagueEvents() {
  return eventData
    .filter(isLeagueEvent)
    .sort((a, b) => new Date(a.sortDate || "1900-01-01") - new Date(b.sortDate || "1900-01-01"));
}

function isLeagueEvent(event) {
  return event.activity === "Cheer" && event.audience === "All Star" && /Varsity Cheer League/i.test(event.points || "");
}

function eventMatchesDateFilter(event, filters) {
  const sortDate = event.sortDate || "";
  if (!sortDate) return true;
  if (filters.dateFrom && sortDate < filters.dateFrom) return false;
  if (filters.dateTo && sortDate > filters.dateTo) return false;
  return true;
}

function scoreEvent(event, tokens) {
  if (!tokens.length) return 0;

  const phrase = tokens.join(" ");
  const title = event.title.toLowerCase();
  const brand = (event.brand || "").toLowerCase();
  const location = event.location.toLowerCase();
  const activity = event.activity.toLowerCase();
  const type = event.type.toLowerCase();
  const audience = event.audience.toLowerCase();
  const haystack = getEventHaystack(event);
  let phraseScore = 0;

  if (brand === phrase) phraseScore += 300;
  if (brand.includes(phrase)) phraseScore += 180;
  if (title.includes(phrase)) phraseScore += 160;
  if (location.includes(phrase)) phraseScore += 120;

  return tokens.reduce((score, token) => {
    if (brand === token) score += 80;
    if (title.includes(token)) score += 50;
    if (location.includes(token)) score += 40;
    if (activity.includes(token)) score += 20;
    if (type.includes(token)) score += 15;
    if (audience.includes(token)) score += 10;
    if (haystack.includes(token)) score += 5;
    return score;
  }, phraseScore);
}

function renderEventSummary(count, query, filters) {
  const queryText = query.trim() ? ` for "${escapeHtml(query.trim())}"` : "";
  const filterLabel = getEventFilterLabel(filters);
  const filterText = filterLabel === "All" ? "" : ` in ${escapeHtml(filterLabel)}`;
  return `<p class="event-meta">${count} event${count === 1 ? "" : "s"} shown${queryText}${filterText}. Best matches appear first.</p>`;
}

function renderNoEventMatches(query) {
  return `
    <article class="event-card">
      <span class="status-pill">No matches</span>
      <h3>No events found</h3>
      <p>Try a broader search like NDA, Dallas, Dance, Camp, Competition, or Orlando.</p>
      ${query.trim() ? `<p class="event-meta">You searched: ${escapeHtml(query.trim())}</p>` : ""}
    </article>
  `;
}

function renderEventCard(event) {
  const hasTickets = eventHasTickets(event);
  const hasLeague = isLeagueEvent(event);

  return `
    <article class="event-card">
      <div class="event-card-header">
        <div>
          <span class="status-pill">${event.type}</span>
          ${hasLeague ? `<span class="league-chip">League point event</span>` : ""}
          <h3>${event.title}</h3>
          <p class="event-meta">${event.activity} | ${event.audience} | ${event.date} | ${event.location}</p>
        </div>
      </div>
      <ul class="status-list">
        <li><span>myVarsity</span><strong>${event.myVarsity}</strong></li>
        ${hasTickets ? `<li><span>Tickets</span><strong>${event.tickets}</strong></li>` : ""}
        <li><span>Event gear</span><strong>${event.gear}</strong></li>
        ${hasLeague ? `<li><span>League</span><strong>${event.points}</strong></li>` : ""}
      </ul>
      <div class="action-grid">
        <a class="button" href="#/event/${event.id}">Open event detail</a>
        <a class="ghost-button" href="#/handoff/myvarsity">Register / status / payment</a>
        ${hasTickets ? `<a class="ghost-button" href="#/handoff/tickets">Buy tickets</a>` : ""}
        ${hasLeague ? `<a class="ghost-button" href="#/handoff/league-standings">League standings</a>` : ""}
      </div>
    </article>
  `;
}

function renderEventDetail(event) {
  const detail = getEventDetailInfo(event);
  const addressLines = getDisplayAddressLines(event, detail);
  const actionCards = [
    {
      label: "myVarsity",
      status: event.myVarsity,
      copy: "Registration, status checks, roster updates, and payments.",
      cta: "Open myVarsity",
      href: "#/handoff/myvarsity",
      show: event.myVarsity !== "Not available",
      primary: true
    },
    {
      label: "Tickets",
      status: event.tickets,
      copy: "Ticket purchase path for this competition.",
      cta: "Buy tickets",
      href: "#/handoff/tickets",
      show: eventHasTickets(event)
    },
    {
      label: "Event gear",
      status: event.gear,
      copy: "Event merchandise and championship gear.",
      cta: "Shop event gear",
      href: "#/handoff/gear",
      show: event.gear !== "Not applicable"
    },
    {
      label: "Watch",
      status: event.watch,
      copy: "Live, upcoming, and replay coverage when available.",
      cta: "Open coverage",
      href: "#/handoff/varsitytv",
      show: event.watch !== "Not streamed"
    },
    {
      label: "League standings",
      status: "Varsity TV standings",
      copy: "Season-long All Star Cheer rankings and point-event progress.",
      cta: "View standings",
      href: "#/handoff/league-standings",
      show: isLeagueEvent(event)
    },
    {
      label: "Schedule",
      status: detail.scheduleStatus,
      copy: "Performance order, timing, and event updates.",
      cta: "View schedule",
      href: "#/support-detail/events",
      show: true
    },
    {
      label: "Results",
      status: event.results,
      copy: "Final placements and results after the event.",
      cta: "View results",
      href: "#/support-detail/events",
      show: event.results !== "Not applicable"
    }
  ].filter((action) => action.show);

  return `
    <section class="event-detail-hero">
      <div>
        <p class="eyebrow">${event.brand} | ${event.activity} | ${event.audience}</p>
        <h1>${event.title}</h1>
      </div>
    </section>

    <section class="view-section">
      <div class="section-head">
        <h2>Event details</h2>
      </div>
      <div class="event-info-grid">
        <div class="detail-card">
          <span>When and where</span>
          <h2>${detail.venue}</h2>
          <ul class="status-list">
            <li><span>Date</span><strong>${event.date}</strong></li>
            <li><span>Location</span><strong>${event.location}</strong></li>
          </ul>
          ${addressLines.length ? `<ul class="plain-info-list">${addressLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` : ""}
          ${detail.doorOpenLines.length ? `<ul class="plain-info-list event-note-list">${detail.doorOpenLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` : ""}
        </div>
        <div class="detail-card">
          <span>Planning</span>
          <h2>Housing, bids, and qualification</h2>
          <ul class="status-list">
            <li><span>Event type</span><strong>${event.type}</strong></li>
            <li><span>Housing</span><strong>${detail.housing}</strong></li>
            <li><span>Points / bids</span><strong>${detail.points}</strong></li>
          </ul>
        </div>
        <div class="detail-card">
          <span>Support</span>
          <h2>Rules, forms, and advisor</h2>
          <ul class="plain-info-list">
            ${detail.resources.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <p>Advisor: ${detail.advisor}</p>
          <a class="ghost-button" href="#/handoff/rep">Get event support</a>
        </div>
      </div>
    </section>

    <section class="view-section">
      <div class="section-head">
        <h2>Event actions</h2>
      </div>
      <div class="event-info-grid">
        ${actionCards.map(renderEventStatusCard).join("")}
      </div>
    </section>
    ${renderEventNewsSection(event)}
    ${renderEventKnowledgeSection(event)}
  `;
}

function eventHasTickets(event) {
  return event.type !== "Camp" && event.tickets !== "Not applicable";
}

function renderEventStatusCard(action) {
  return `
    <div class="detail-card">
      <span>${action.label}</span>
      <h2>${action.status}</h2>
      <p>${action.copy}</p>
      <a class="${action.primary ? "button" : "ghost-button"}" href="${action.href}">${action.cta}</a>
    </div>
  `;
}

function renderEventNewsSection(event) {
  const stories = getEventDetailNews(event).slice(0, 3);
  const hasExactStory = stories.some((story) => story.eventId === event.id);
  const isCamp = event.type === "Camp";

  return renderNewsTeaserStories({
    title: hasExactStory ? "Latest updates for this event" : "Camp guides",
    copy: isCamp
      ? "News and helpful guides connected to this camp or general camp preparation."
      : "News, reminders, and helpful stories connected to this event.",
    stories,
    ctaHref: isCamp ? getNewsHref({ eventType: "Camp" }) : getNewsHref({ eventId: event.id }),
    ctaLabel: isCamp ? "See camp guides" : "See event updates"
  });
}

function getEventDetailNews(event) {
  return newsData
    .filter((story) => story.eventId === event.id || isGeneralCampStoryForEvent(story, event))
    .sort((a, b) => {
      if (a.eventId === event.id && b.eventId !== event.id) return -1;
      if (b.eventId === event.id && a.eventId !== event.id) return 1;
      return new Date(b.publishedDate) - new Date(a.publishedDate);
    });
}

function isGeneralCampStoryForEvent(story, event) {
  return event.type === "Camp" && !story.eventId && getNewsEventType(story) === "Camp";
}

function renderEventKnowledgeSection(event) {
  const cards = getEventKnowledgeCards(event);
  if (!cards.length) return "";

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Related guides</h2>
        <p>Use these guides to understand the bigger process around this event.</p>
      </div>
      <div class="card-grid">${cards.map(renderCard).join("")}</div>
    </section>
  `;
}

function getEventKnowledgeCards(event) {
  if (event.type === "Camp" && event.audience === "School") {
    if (event.activity === "Dance") {
      return [
        card("Dance participation pathways", "Understand School Dance, All Star Dance, brands, training, and next steps.", "#/learn/dance-participation-pathways", "Guide"),
        card("I want to try out for drill team", "Prepare for school dance or drill team tryouts.", "#/learn/i-want-to-try-out-for-drill-team", "Tryouts"),
        card("What to pack for camp", "Camp preparation for athletes, parents, and coaches.", "#/learn/what-to-pack-for-camp", "Checklist")
      ];
    }

    return [
      card("What to pack for camp", "Camp preparation for athletes, parents, and coaches.", "#/learn/what-to-pack-for-camp", "Checklist"),
      card("Best cheer camps in Texas", "A model for finding school cheer camp options by location.", "#/learn/best-cheer-camps-in-texas", "Camps"),
      card("I want to try out for cheerleader", "Prepare for school cheer tryouts.", "#/learn/i-want-to-try-out-for-school-cheerleader", "Tryouts")
    ];
  }

  if (event.activity === "Cheer" && event.audience === "All Star") {
    return [
      card("How Nationals qualification works", "Understand bids, qualification, divisions, scoring, and results.", "#/learn/how-nationals-qualification-works", "Guide"),
      card("The Varsity Cheer League rankings guide", "Understand All Star Cheer point events and standings.", "#/learn/varsity-cheer-league-rankings-guide", "Rankings")
    ];
  }

  if (event.type === "Competition") {
    return [
      card("How Nationals qualification works", "Understand competition and qualification basics.", "#/learn/how-nationals-qualification-works", "Guide"),
      card("Rules, scoring, and safety basics", "Start with rules, scoring, safety, and required forms.", "#/learn/cheer-rules-scoring-safety-basics", "Rules")
    ];
  }

  return [];
}

function getDisplayAddressLines(event, detail) {
  const eventLocation = normalizeInfoLine(event.location);

  return detail.addressLines.filter((line) => {
    const normalizedLine = normalizeInfoLine(line);
    if (!normalizedLine) return false;
    if (normalizedLine === "us") return true;
    if (eventLocation === normalizedLine) return false;
    if (eventLocation.includes(normalizedLine)) return false;
    return true;
  });
}

function normalizeInfoLine(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getEventDetailInfo(event) {
  const override = eventDetailOverrides[event.id] || {};
  const isCompetition = event.type === "Competition";
  const resources = override.resources || event.resources || [
    "Division, Rules & Scoring",
    "Required Forms / FAQs",
    "Event policies"
  ];

  return {
    venue: override.venue || event.venue || (event.location === "Multiple locations" ? "Venue varies by event" : `${event.location} venue TBD`),
    addressLines: override.addressLines || event.addressLines || ["Venue address TBD", event.location, "US"],
    doorOpenLines: override.doorOpenLines || event.doorOpenLines || [isCompetition ? "Doors open - TBD" : "Check-in time - TBD"],
    housing: override.housing || event.housing || (isCompetition ? "Housing designation TBD" : "Not applicable for this event type"),
    points: override.points || event.points || (event.audience === "All Star" ? "Varsity points / bid information TBD" : "Points or qualification information TBD"),
    advisor: override.advisor || event.advisor || (event.audience === "All Star" ? "All Star Advisor" : "Competition Specialist"),
    pageLocation: override.pageLocation || event.pageLocation || (event.audience === "All Star" ? "legacy-all-star" : "event-detail"),
    scheduleStatus: override.scheduleStatus || event.scheduleStatus || (event.results === "Not applicable" ? "Details TBD" : "Pending / latest update needed"),
    resources
  };
}

function renderFashionUniforms() {
  const uniformCards = [
    card("School Cheer Uniforms", "School cheer catalog, sizing, inspiration, and school cheer rep routing.", "#/uniforms/school-cheer-uniforms", "Cheer"),
    card("All Star Cheer Uniforms", "All Star cheer catalog, customization, inspiration, and All Star cheer rep routing.", "#/uniforms/all-star-cheer-uniforms", "Cheer"),
    card("School Dance Uniforms", "School dance catalog, sizing, inspiration, and school dance rep routing.", "#/uniforms/dance-uniforms", "Dance"),
    card("All Star Dance Uniforms", "All Star dance catalog, customization, inspiration, and All Star dance rep routing.", "#/uniforms/all-star-dance-uniforms", "Dance"),
    card("Band Wear", "Band wear catalog, sizing, inspiration, and rep routing.", "#/uniforms/band-wear", "Performing Arts"),
    card("Color Guard Wear", "Color guard wear catalog, sizing, inspiration, and rep routing.", "#/uniforms/color-guard-wear", "Performing Arts")
  ];
  const serviceCards = [
    card("My Team Shop", "Use a team invite, code, link, or account sign-in to get to your private shop.", "#/handoff/myteamshop", "Private"),
    card("Shop", "Shop products and event merchandise as an individual buyer.", "#/handoff/shop", "Commerce")
  ];

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Uniform paths</h2>
        <p>Start with the right uniform line because each one can have its own catalog, sizing support, and representative.</p>
      </div>
      <div class="card-grid">${uniformCards.map(renderCard).join("")}</div>
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Related shopping and product paths</h2>
      </div>
      <div class="card-grid">${serviceCards.map(renderCard).join("")}</div>
      <div class="notice">
        My Team Shop: use your school or team link, code, invite, or account sign-in when you have one.
      </div>
    </section>
    ${renderNewsTeaserSection({
      title: "Fashion and Uniforms news",
      copy: "Helpful guides, inspiration, and reminders for team apparel, uniforms, and My Team Shop.",
      filters: { category: "Fashion and Uniforms" },
      limit: 3,
      ctaHref: getNewsHref({ category: "Fashion and Uniforms" }),
      ctaLabel: "See apparel news"
    })}
  `;
}

function renderUniformRoute(slug) {
  const path = uniformPathData[slug] || uniformPathData["school-cheer-uniforms"];
  return {
    title: path.title,
    eyebrow: path.eyebrow,
    copy: path.copy,
    custom: () => renderUniformPath(path)
  };
}

function renderUniformPath(path) {
  const catalog = handoffs[path.catalogHandoff];
  const rep = handoffs[path.repHandoff];
  const relatedLabel = path.relatedLabel || `${path.audience} ${path.activity}`;
  const cards = [
    card(catalog.title, catalog.copy, `#/handoff/${path.catalogHandoff}`, "Catalog"),
    card(rep.title, rep.copy, `#/handoff/${path.repHandoff}`, "Rep"),
    card("My Team Shop", "Use your private team shop link, code, invite, or sign-in when your school or team has a shop.", "#/handoff/myteamshop", "Private"),
    card("Related Program", `Go back to the ${relatedLabel} path for events, news, and support.`, path.relatedAudienceHref, "Program"),
    card("Shop", "Shop individual products and event merchandise.", "#/handoff/shop", "Commerce"),
    card("Support", "Get help with uniforms, catalogs, sizing, team shops, or order questions.", "#/support-detail/fashion-uniforms", "Support")
  ];

  return `
    <section class="view-section">
      <div class="detail-card">
        <span>${path.eyebrow}</span>
        <h2>${path.title}</h2>
        <p>${path.copy}</p>
        <ul class="status-list">
          <li><span>Activity</span><strong>${path.activity}</strong></li>
          <li><span>Program</span><strong>${path.audience}</strong></li>
          <li><span>Catalog</span><strong>${catalog.title}</strong></li>
          <li><span>Rep route</span><strong>${rep.title}</strong></li>
        </ul>
      </div>
    </section>
    <section class="view-section">
      <div class="card-grid">${cards.map(renderCard).join("")}</div>
    </section>
  `;
}

function renderSocialDirectory() {
  const { query } = parseHash();
  const selectedChannel = query.get("channel");
  const platformText = selectedChannel
    ? `<div class="notice">Selected platform: ${escapeHtml(selectedChannel)}. This could help you find the official account or narrow the social directory.</div>`
    : "";

  const directoryCards = [
    card("Master Varsity Channels", "Official Varsity brand accounts for broad news, announcements, culture, and major stories.", "#/social?channel=master", "Official"),
    card("Cheer Channels", "Cheer-specific accounts for School, All Star, competitions, results, and high-interest coverage.", "#/social?channel=cheer", "Activity"),
    card("Dance Channels", "Dance-specific accounts for UDA, NDA, Dance events, CLI Studios, and performance content.", "#/social?channel=dance", "Activity"),
    card("Event Channels", "Channels tied to major championships, event coverage, Varsity TV, results, and event gear moments.", "#/events", "Events"),
    card("Yearbook Channels", "Yearbook social paths for advisers, staffs, families, campaigns, and school storytelling.", "#/yearbook", "Yearbook"),
    card("Performing Arts Channels", "Band, color guard, Stanbury, event, and director-focused updates.", "#/performing-arts", "Performing Arts")
  ];

  const platformCards = [
    card("Instagram", "Best for visual storytelling, event moments, reveals, athletes, teams, and campaign highlights.", "#/social?channel=instagram", "Platform"),
    card("TikTok", "Best for short-form performance, behind-the-scenes, trends, and high-energy event content.", "#/social?channel=tiktok", "Platform"),
    card("YouTube", "Best for long-form video, replays, explainers, training, event previews, and archived content.", "#/social?channel=youtube", "Platform"),
    card("Facebook", "Best for parent, family, alumni, and community sharing.", "#/social?channel=facebook", "Platform"),
    card("X", "Best for timely updates, event alerts, results, and media/news moments.", "#/social?channel=x", "Platform"),
    card("LinkedIn", "Best for company, careers, corporate news, education, and partner updates.", "#/social?channel=linkedin", "Platform")
  ];

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Find official channels</h2>
        <p>Use this directory when you are looking for a specific Varsity brand, program, event, or platform account.</p>
      </div>
      <div class="card-grid">${directoryCards.map(renderCard).join("")}</div>
      ${platformText}
    </section>
    <section class="view-section">
      <div class="section-head">
        <h2>Platform roles</h2>
        <p>Each platform can help with a different kind of update, from event moments to replays to company news.</p>
      </div>
      <div class="card-grid">${platformCards.map(renderCard).join("")}</div>
      <div class="notice">
        Footer social links can stay simple, while this page helps you find the specific official account you need.
      </div>
    </section>
  `;
}

function renderHandoff(key) {
  const handoff = handoffs[key] || handoffs.myvarsity;
  return `
    <section class="view-section">
      <article class="detail-card handoff">
        <span>${handoff.eyebrow}</span>
        <h2>${handoff.title}</h2>
        <p>${handoff.copy}</p>
        <ul class="status-list">
          ${handoff.actions.map((action) => `<li><span>Available here</span><strong>${action}</strong></li>`).join("")}
        </ul>
        <div class="action-grid">
          <a class="button" href="#/">Return to Varsity.com</a>
          <a class="ghost-button" href="#/support">Need help</a>
        </div>
      </article>
    </section>
  `;
}

function renderAudienceRoute(slug) {
  const { query } = parseHash();
  const activity = query.get("activity") || "";
  const programLabels = {
    school: "School",
    "all-star": "All Star",
    "yearbook-adviser": ["Yearbook Adviser / Staff", "Find eDesign, classroom support, business tools, printing, workshops, login, and rep help."],
    "yearbook-family": ["Students / Families", "Buy a yearbook or ad, submit photos, get customer service, and find yearbook resources."]
  };

  if (Array.isArray(programLabels[slug])) {
    const [title, copy] = programLabels[slug];
    const yearbookCards = slug === "yearbook-adviser"
      ? [
          card("Build a Great Yearbook Team", "Recruit staff, assign roles, set deadlines, train students, and build team culture.", "#/learn/how-to-build-great-yearbook-team", "Guide"),
          card("Yearbook Staff Roles", "Help students understand editor, designer, photographer, writer, sales, and business roles.", "#/learn/yearbook-staff-roles", "Guide"),
          card("Sell More Yearbooks", "Plan campaigns, reminders, ads, dedications, and Order Center paths.", "#/learn/how-to-sell-more-yearbooks", "How-To"),
          card("Events and Workshops", "Find yearbook workshops and related events.", "#/events?activity=Yearbook", "Events"),
          card("Contact a Rep", "Get connected with the right representative for your school.", "#/handoff/rep", "Rep"),
          card("Support", "Get help for this area.", "#/support", "Support")
        ]
      : [
          card("Why Work on the Yearbook?", "See how yearbook builds photography, writing, design, leadership, marketing, and school connection.", "#/learn/why-work-on-yearbook", "Guide"),
          card("How to Submit Better Photos", "Learn how families and students can help the yearbook staff collect better coverage.", "#/learn/yearbook-photo-collection-guide", "How-To"),
          card("Buy Yearbook or Ad", "Go to the Yearbook Order Center.", "#/handoff/yearbookorder", "Commerce"),
          card("eShare Photo Upload", "Submit photos for your school yearbook.", "#/handoff/eshare", "Tool"),
          card("Yearbook", "Return to the Yearbook front door.", "#/yearbook", "Yearbook"),
          card("Support", "Get help for this area.", "#/support", "Support")
        ];
    return {
      title,
      eyebrow: "Choose your path",
      copy,
      cards: yearbookCards
    };
  }

  const program = programLabels[slug] || "Audience";
  const title = activity ? `${program} ${activity}` : program;
  const copy = activity
    ? `Use this page to find ${program} ${activity} brands, events, fashion/uniforms, resources, and support.`
    : `Use this page to choose Cheer or Dance brands, events, fashion/uniforms, resources, and support.`;

  return {
    title,
    eyebrow: "Choose your path",
    copy,
    custom: () => renderAudiencePage(slug, activity, program)
  };
}

function renderAudiencePage(slug, activity, program) {
  const audience = program === "All Star" ? "All Star" : program;
  const eventHref = buildEventsHref({ activity, audience });
  const isSchoolProgram = audience === "School";
  const eventCardCopy = isSchoolProgram
    ? "Find applicable camps, competitions, schedules, results, registration, tickets, and event gear."
    : "Find applicable competitions, schedules, results, registration, tickets, and event gear.";
  const newsFilters = activity ? { activity, audience } : {};
  const uniformHref = getUniformHrefForAudience(activity, audience);
  const learnHref = activity ? getKnowledgeHref({ activity }) : "#/learn";
  const shopCard = activity === "Cheer" || activity === "Dance"
    ? [card("Shop", `Shop ${activity.toLowerCase()} products and event merchandise.`, `#/shop?activity=${encodeURIComponent(activity)}`, "Commerce")]
    : [];
  const directoryCard = activity === "Cheer"
    ? [card("Find a Cheer Gym", "Search prototype cheer gym listings by location, program type, and services.", "#/directory?type=Cheer%20Gym", "Directory")]
    : activity === "Dance"
      ? [card("Find a Dance Studio", "Search prototype dance studio listings by location, program type, and services.", "#/directory?type=Dance%20Studio", "Directory")]
      : [];
  const tryoutCard = audience === "School" && activity === "Cheer"
    ? [card("School Cheer Tryouts", "Parent and student guides for school cheer tryout preparation.", "#/learn?category=School%20Tryouts&activity=Cheer", "Tryouts")]
    : audience === "School" && activity === "Dance"
      ? [card("School Dance / Drill Team Tryouts", "Parent and student guides for school dance or drill team tryout preparation.", "#/learn?category=School%20Tryouts&activity=Dance", "Tryouts")]
      : [];
  const leagueCard = activity === "Cheer" && audience === "All Star"
    ? [card("The Varsity Cheer League", "Follow The League for All Star Cheer point events, standings, rankings, and related Varsity TV coverage.", "#/the-varsity-cheer-league", "Standings")]
    : [];
  const taskCards = [
    card("Events", eventCardCopy, eventHref, "Events"),
    ...leagueCard,
    card("Learn", "Guides, participation pathways, rules, rankings, training, and coach resources.", learnHref, "Knowledge"),
    ...tryoutCard,
    ...directoryCard,
    card("Fashion and Uniforms", "Find the right uniform catalog, rep route, My Team Shop, or individual shopping path.", uniformHref, "Products"),
    ...shopCard,
    card("Watch", "Find live or replay coverage connected to this activity and program.", activity ? `#/watch?activity=${encodeURIComponent(activity)}` : "#/watch", "Varsity TV"),
    card("Support", "Get help for this program.", "#/support", "Support")
  ];

  return `
    <section class="view-section">
      <div class="card-grid">${taskCards.map(renderCard).join("")}</div>
    </section>
    ${activity ? renderNewsTeaserSection({
      title: `${activity} news`,
      copy: `Helpful updates, stories, and guides connected to ${program} ${activity}.`,
      filters: newsFilters,
      limit: 3,
      ctaHref: getNewsHref(newsFilters),
      ctaLabel: `See ${activity.toLowerCase()} news`
    }) : ""}
    ${renderBrandModule(slug, activity, audience)}
  `;
}

function getUniformHrefForAudience(activity, audience) {
  if (activity === "Cheer" && audience === "School") return "#/uniforms/school-cheer-uniforms";
  if (activity === "Cheer" && audience === "All Star") return "#/uniforms/all-star-cheer-uniforms";
  if (activity === "Dance" && audience === "All Star") return "#/uniforms/all-star-dance-uniforms";
  if (activity === "Dance") return "#/uniforms/dance-uniforms";
  return "#/fashion-uniforms";
}

function renderBrandModule(slug, activity, audience) {
  const groups = getBrandGroups(slug, activity);
  if (!groups.length) return "";

  return `
    <section class="view-section brand-module">
      <div class="section-head">
        <h2>Brands</h2>
        <p>Choose a brand to see events that match this Cheer or Dance program.</p>
      </div>
      ${groups.map((group) => `
        <div class="brand-group">
          <h3>${group.title}</h3>
          <div class="brand-icon-grid">
            ${group.brands.map((brand) => renderBrandIcon(brand, group.activity, audience)).join("")}
          </div>
        </div>
      `).join("")}
    </section>
  `;
}

function getBrandGroups(slug, activity) {
  const group = audienceBrandGroups[slug] || {};
  const activities = activity ? [activity] : ["Cheer", "Dance"];
  const programLabel = getBrandProgramLabel(slug);
  return activities
    .map((item) => ({
      title: `${programLabel} ${item} brands`,
      activity: item,
      brands: group[item] || []
    }))
    .filter((item) => item.brands.length);
}

function getBrandProgramLabel(slug) {
  if (slug === "school") return "School";
  if (slug === "all-star") return "All Star";
  return "Program";
}

function renderBrandIcon(brand, activity, audience) {
  const href = buildEventsHref({ activity, audience, brand: brand.brand, q: brand.query || "" });
  return `
    <a class="brand-icon-card" href="${href}" aria-label="${escapeAttribute(brand.label)} events" title="${escapeAttribute(brand.label)}">
      <span class="brand-mark">${escapeHtml(brand.label)}</span>
    </a>
  `;
}

function buildEventsHref({ activity = "", audience = "", type = "", brand = "", dateFrom = "", dateTo = "", q = "" }) {
  const params = new URLSearchParams();
  if (activity) params.set("activity", activity);
  if (audience) params.set("audience", audience);
  if (type) params.set("type", type);
  if (brand) params.set("brand", brand);
  if (dateFrom) params.set("dateFrom", dateFrom);
  if (dateTo) params.set("dateTo", dateTo);
  if (q) params.set("q", q);
  const queryString = params.toString();
  return `#/events${queryString ? `?${queryString}` : ""}`;
}

function renderSupportDetail(slug) {
  const title = slug === "fashion-uniforms" ? "Fashion / Uniforms / My Team Shop Help" : "Event Help";
  const copy =
    slug === "fashion-uniforms"
      ? "Choose the kind of help you need: browsing, uniforms, catalogs, sizing, My Team Shop, or order support."
      : "Choose the kind of help you need: registration, status, payment, tickets, event gear, schedule, results, Varsity TV, or travel.";
  const cards = slug === "fashion-uniforms"
    ? [
        card("School Cheer Uniforms", "Catalog, sizing, rep, and order support for school cheer uniforms.", "#/uniforms/school-cheer-uniforms", "Cheer"),
        card("All Star Cheer Uniforms", "Catalog, sizing, rep, and order support for All Star cheer uniforms.", "#/uniforms/all-star-cheer-uniforms", "Cheer"),
        card("School Dance Uniforms", "Catalog, sizing, rep, and order support for school dance uniforms.", "#/uniforms/dance-uniforms", "Dance"),
        card("All Star Dance Uniforms", "Catalog, sizing, rep, and order support for All Star dance uniforms.", "#/uniforms/all-star-dance-uniforms", "Dance"),
        card("Band Wear", "Catalog, sizing, rep, and order support for band wear.", "#/uniforms/band-wear", "Performing Arts"),
        card("Color Guard Wear", "Catalog, sizing, rep, and order support for color guard wear.", "#/uniforms/color-guard-wear", "Performing Arts"),
        card("My Team Shop", "Use your team link, code, invite, or account sign-in.", "#/handoff/myteamshop", "Private"),
        card("Back to Fashion and Uniforms", "Return to the Fashion and Uniforms front door.", "#/fashion-uniforms", "Products")
      ]
    : [
        card("Go to myVarsity", "Registration, status, roster, and payment help.", "#/handoff/myvarsity", "Account"),
        card("Contact support", "Share a few details so support can help with the right issue.", "#/support", "Support"),
        card("Back to Events", "Return to event discovery.", "#/events", "Events")
      ];
  return {
    title,
    eyebrow: "Support detail",
    copy,
    cards
  };
}

function renderPerformingProduct(slug) {
  const names = {
    "band-wear": "Band Wear",
    "color-guard": "Color Guard",
    stanbury: "Stanbury"
  };
  return {
    title: names[slug] || "Performing Arts Product",
    eyebrow: "Performing Arts",
    copy: "Find catalog information, related events, uniforms, and representative help.",
    cards: [
      card("View catalog", "Catalog or product details.", "#/handoff/rep", "Catalog"),
      card("Contact rep", "Get help with a product or event question.", "#/handoff/rep", "Rep"),
      card("Related events", "Find Performing Arts events.", "#/events?audience=Performing Arts", "Events")
    ]
  };
}

function renderBreadcrumbs(path, title) {
  breadcrumbs.innerHTML = path === "/"
    ? `<span>Home</span>`
    : `<a href="#/">Home</a><span>/</span><span>${title}</span>`;
}

function buildSearchIndex() {
  const routeItems = Object.entries(routes)
    .filter(([path]) => path !== "/")
    .map(([path, route]) => ({
      title: route.title,
      copy: getRouteCopy(route, path, new URLSearchParams()),
      href: `#${path}`,
      label: route.eyebrow || "Page"
    }));

  const eventItems = eventData.map((event) => ({
    title: event.title,
    copy: `${event.type} ${event.activity} ${event.audience} ${event.date} ${event.location} ${event.points || ""} tickets gear register status payment`,
    href: `#/event/${event.id}`,
    label: "Event"
  }));

  const uniformItems = Object.entries(uniformPathData).map(([slug, path]) => ({
    title: path.title,
    copy: `${path.copy} ${path.activity} ${path.audience} uniforms catalog rep sizing inspiration My Team Shop`,
    href: `#/uniforms/${slug}`,
    label: "Uniforms"
  }));

  const knowledgeItems = knowledgeData.map((guide) => ({
    title: guide.title,
    copy: `${guide.summary} ${guide.type} ${guide.category} ${guide.activity} ${guide.audience} ${(guide.answers || []).join(" ")}`,
    href: `#/learn/${guide.id}`,
    label: "Knowledge"
  }));

  const directoryItems = directoryData.map((listing) => ({
    title: listing.name,
    copy: `${listing.type} ${listing.activity} ${listing.city} ${listing.state} ${listing.programs.join(" ")} ${listing.services.join(" ")} ${listing.note}`,
    href: `#/directory/${listing.id}`,
    label: "Directory"
  }));

  const handoffItems = Object.entries(handoffs).map(([key, handoff]) => ({
    title: handoff.title,
    copy: `${handoff.copy} ${handoff.actions.join(" ")}`,
    href: `#/handoff/${key}`,
    label: "Next step"
  }));

  const newsItems = newsData.map((story) => ({
    title: story.title,
    copy: `${story.summary} ${story.type} ${story.category} ${story.activity} ${story.audience} ${story.brand}`,
    href: `#/news/${story.id}`,
    label: "News"
  }));

  return [...routeItems, ...eventItems, ...uniformItems, ...knowledgeItems, ...directoryItems, ...newsItems, ...handoffItems];
}

const searchIndex = buildSearchIndex();

function getSearchMatches(value, limit = 8) {
  const query = value.trim().toLowerCase();
  if (!query) return [];

  return searchIndex
    .filter((item) => `${item.title} ${item.copy} ${item.label}`.toLowerCase().includes(query))
    .slice(0, limit);
}

function runSearch(value) {
  const query = value.trim().toLowerCase();
  if (!query) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  const matches = getSearchMatches(value, 8);

  searchResults.hidden = false;
  searchResults.innerHTML = matches.length
    ? matches.map((item) => renderSearchResultCard(item)).join("")
    : `<article class="route-card"><span>No match</span><h3>Try another search</h3><p>Search for tickets, status, Dance, CLI, My Team Shop, event gear, eShare, or uniforms.</p></article>`;
}

function submitSiteSearch() {
  const value = searchInput.value.trim();
  searchResults.hidden = true;
  searchResults.innerHTML = "";

  if (!value) {
    searchInput.focus();
    return;
  }

  window.location.hash = `/search?q=${encodeURIComponent(value)}`;
}

function renderSearchPage(path, query) {
  const searchTerm = query.get("q") || "";
  const matches = getSearchMatches(searchTerm, 24);

  return `
    <section class="view-section">
      <div class="section-head">
        <h2>Search results</h2>
        <p>${searchTerm ? `Showing prototype results for "${escapeHtml(searchTerm)}".` : "Use the search field above to search across the prototype."}</p>
      </div>
      ${searchTerm ? `
        <div class="event-result-summary">${matches.length} ${matches.length === 1 ? "result" : "results"} found</div>
        <div class="card-grid">
          ${matches.length ? matches.map((item) => renderSearchResultCard(item)).join("") : `
            <article class="route-card">
              <span>No match</span>
              <h3>Try another search</h3>
              <p>Search for tickets, status, Dance, CLI, My Team Shop, event gear, eShare, uniforms, camps, or results.</p>
            </article>
          `}
        </div>
      ` : ""}
    </section>
  `;
}

function renderSearchResultCard(item) {
  return `
    <a class="route-card search-result-card" href="${item.href}">
      ${item.label ? `<span>${item.label}</span>` : ""}
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
      <strong class="search-result-action">Open</strong>
    </a>
  `;
}

function updateEventResults(value) {
  const filters = getActiveEventFilters();
  const ranked = getRankedEvents(filters, value);
  const eventList = document.querySelector("#event-list");
  const summary = document.querySelector("#event-result-summary");

  if (!eventList || !summary) return;

  summary.innerHTML = renderEventSummary(ranked.length, value, filters);
  eventList.innerHTML = ranked.length ? ranked.map(renderEventCard).join("") : renderNoEventMatches(value);
}

function updateDirectoryResults(value) {
  const { query } = parseHash();
  const filters = getDirectoryFilters(query);
  const ranked = getRankedDirectoryItems(filters, value);
  const directoryList = document.querySelector("#directory-list");
  const summary = document.querySelector("#directory-result-summary");

  if (!directoryList || !summary) return;

  summary.innerHTML = renderDirectorySummary(ranked.length, value, filters);
  directoryList.innerHTML = ranked.length ? ranked.map(renderDirectoryCard).join("") : renderNoDirectoryMatches(value);
}

function getActiveEventFilters() {
  const { query } = parseHash();
  const filters = getEventFilters(query);
  const fromInput = document.querySelector("#event-date-from");
  const toInput = document.querySelector("#event-date-to");

  if (fromInput) filters.dateFrom = fromInput.value;
  if (toInput) filters.dateTo = toInput.value;

  return normalizeFilterDateRange(filters);
}

function normalizeFilterDateRange(filters) {
  if (filters.dateFrom && filters.dateTo && filters.dateFrom > filters.dateTo) {
    return { ...filters, dateFrom: filters.dateTo, dateTo: filters.dateFrom };
  }

  return filters;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

searchInput.addEventListener("input", (event) => runSearch(event.target.value));

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSiteSearch();
});

searchResults.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link) return;
  searchInput.value = "";
  searchResults.hidden = true;
  searchResults.innerHTML = "";
});

view.addEventListener("input", (event) => {
  if (event.target && event.target.id === "event-search") {
    updateEventResults(event.target.value);
  }

  if (event.target && event.target.id === "directory-search") {
    updateDirectoryResults(event.target.value);
  }

  if (event.target && (event.target.id === "event-date-from" || event.target.id === "event-date-to")) {
    updateEventResults(document.querySelector("#event-search")?.value || "");
  }
});

view.addEventListener("click", (event) => {
  if (event.target && event.target.id === "clear-event-search") {
    const input = document.querySelector("#event-search");
    if (!input) return;
    input.value = "";
    updateEventResults("");
    input.focus();
  }

  if (event.target && event.target.id === "clear-directory-search") {
    const input = document.querySelector("#directory-search");
    if (!input) return;
    input.value = "";
    updateDirectoryResults("");
    input.focus();
  }

  if (event.target && event.target.id === "apply-event-date") {
    applyEventDateFilter(false);
  }

  if (event.target && event.target.id === "clear-event-date") {
    applyEventDateFilter(true);
  }
});

function applyEventDateFilter(clearDate) {
  const { query } = parseHash();
  const filters = getEventFilters(query);
  const eventSearch = document.querySelector("#event-search")?.value || query.get("q") || "";
  const fromInput = document.querySelector("#event-date-from");
  const toInput = document.querySelector("#event-date-to");
  const range = clearDate
    ? { dateFrom: "", dateTo: "" }
    : normalizeDateRange(fromInput?.value || "", toInput?.value || "");

  window.location.hash = buildEventsHref({
    activity: filters.activity,
    audience: filters.audience,
    type: filters.type,
    brand: filters.brand,
    dateFrom: range.dateFrom,
    dateTo: range.dateTo,
    q: eventSearch
  }).replace("#", "");
}

function normalizeDateRange(dateFrom, dateTo) {
  if (dateFrom && dateTo && dateFrom > dateTo) {
    return { dateFrom: dateTo, dateTo: dateFrom };
  }

  return { dateFrom, dateTo };
}

window.addEventListener("hashchange", render);
render();
