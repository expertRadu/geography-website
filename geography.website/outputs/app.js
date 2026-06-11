const WORLD_URL = "./vendor/countries-110m.json";
const NAMES_URL = "./vendor/countries-110m.tsv";
const REST_URL = "https://restcountries.com/v3.1/alpha/";
const RELIEFWEB_URL = "https://api.reliefweb.int/v1/reports";

const religionData = {
  Afghanistan: [{ name: "Islam", pct: 99 }],
  Albania: [{ name: "Islam", pct: 57 }, { name: "Christianity", pct: 17 }],
  Algeria: [{ name: "Islam", pct: 99 }],
  Argentina: [{ name: "Christianity", pct: 79 }, { name: "Unaffiliated", pct: 15 }],
  Australia: [{ name: "Christianity", pct: 44 }, { name: "Unaffiliated", pct: 39 }, { name: "Islam", pct: 3 }],
  Austria: [{ name: "Christianity", pct: 68 }, { name: "Unaffiliated", pct: 22 }, { name: "Islam", pct: 8 }],
  Bangladesh: [{ name: "Islam", pct: 91 }, { name: "Hinduism", pct: 8 }],
  Belgium: [{ name: "Christianity", pct: 54 }, { name: "Unaffiliated", pct: 31 }, { name: "Islam", pct: 7 }],
  Brazil: [{ name: "Christianity", pct: 88 }, { name: "Unaffiliated", pct: 8 }],
  Canada: [{ name: "Christianity", pct: 53 }, { name: "Unaffiliated", pct: 34 }, { name: "Islam", pct: 5 }],
  Chile: [{ name: "Christianity", pct: 70 }, { name: "Unaffiliated", pct: 25 }],
  China: [{ name: "Unaffiliated/folk", pct: 74 }, { name: "Buddhism", pct: 16 }, { name: "Christianity", pct: 5 }],
  Colombia: [{ name: "Christianity", pct: 88 }, { name: "Unaffiliated", pct: 7 }],
  "Democratic Republic of the Congo": [{ name: "Christianity", pct: 95 }, { name: "Traditional faiths", pct: 3 }],
  Egypt: [{ name: "Islam", pct: 90 }, { name: "Christianity", pct: 10 }],
  Ethiopia: [{ name: "Christianity", pct: 63 }, { name: "Islam", pct: 34 }, { name: "Traditional faiths", pct: 3 }],
  France: [{ name: "Christianity", pct: 48 }, { name: "Unaffiliated", pct: 40 }, { name: "Islam", pct: 8 }],
  Germany: [{ name: "Christianity", pct: 52 }, { name: "Unaffiliated", pct: 38 }, { name: "Islam", pct: 6 }],
  Ghana: [{ name: "Christianity", pct: 71 }, { name: "Islam", pct: 18 }, { name: "Traditional faiths", pct: 5 }],
  Greece: [{ name: "Christianity", pct: 90 }, { name: "Unaffiliated", pct: 5 }, { name: "Islam", pct: 2 }],
  India: [{ name: "Hinduism", pct: 79 }, { name: "Islam", pct: 14 }, { name: "Christianity", pct: 2 }],
  Indonesia: [{ name: "Islam", pct: 87 }, { name: "Christianity", pct: 10 }, { name: "Hinduism", pct: 2 }],
  Iran: [{ name: "Islam", pct: 99 }],
  Iraq: [{ name: "Islam", pct: 98 }, { name: "Christianity", pct: 1 }],
  Ireland: [{ name: "Christianity", pct: 76 }, { name: "Unaffiliated", pct: 19 }],
  Israel: [{ name: "Judaism", pct: 74 }, { name: "Islam", pct: 18 }, { name: "Christianity", pct: 2 }],
  Italy: [{ name: "Christianity", pct: 74 }, { name: "Unaffiliated", pct: 18 }, { name: "Islam", pct: 4 }],
  Japan: [{ name: "Shinto/Buddhism", pct: 69 }, { name: "Unaffiliated", pct: 29 }, { name: "Christianity", pct: 2 }],
  Kenya: [{ name: "Christianity", pct: 85 }, { name: "Islam", pct: 11 }, { name: "Traditional faiths", pct: 2 }],
  Malaysia: [{ name: "Islam", pct: 64 }, { name: "Buddhism", pct: 19 }, { name: "Christianity", pct: 9 }],
  Mexico: [{ name: "Christianity", pct: 88 }, { name: "Unaffiliated", pct: 9 }],
  Morocco: [{ name: "Islam", pct: 99 }],
  Myanmar: [{ name: "Buddhism", pct: 88 }, { name: "Christianity", pct: 6 }, { name: "Islam", pct: 4 }],
  Netherlands: [{ name: "Unaffiliated", pct: 55 }, { name: "Christianity", pct: 37 }, { name: "Islam", pct: 5 }],
  Nigeria: [{ name: "Islam", pct: 53 }, { name: "Christianity", pct: 46 }],
  Pakistan: [{ name: "Islam", pct: 96 }, { name: "Hinduism", pct: 2 }, { name: "Christianity", pct: 2 }],
  Peru: [{ name: "Christianity", pct: 89 }, { name: "Unaffiliated", pct: 6 }],
  Philippines: [{ name: "Christianity", pct: 89 }, { name: "Islam", pct: 6 }],
  Poland: [{ name: "Christianity", pct: 85 }, { name: "Unaffiliated", pct: 8 }],
  Portugal: [{ name: "Christianity", pct: 84 }, { name: "Unaffiliated", pct: 10 }],
  Romania: [{ name: "Christianity", pct: 92 }, { name: "Unaffiliated", pct: 6 }],
  Russia: [{ name: "Christianity", pct: 71 }, { name: "Islam", pct: 10 }, { name: "Unaffiliated", pct: 15 }],
  "Saudi Arabia": [{ name: "Islam", pct: 93 }, { name: "Christianity", pct: 4 }],
  "South Africa": [{ name: "Christianity", pct: 78 }, { name: "Traditional faiths", pct: 5 }, { name: "Islam", pct: 2 }],
  "South Korea": [{ name: "Unaffiliated", pct: 56 }, { name: "Christianity", pct: 28 }, { name: "Buddhism", pct: 16 }],
  Spain: [{ name: "Christianity", pct: 58 }, { name: "Unaffiliated", pct: 37 }, { name: "Islam", pct: 3 }],
  Sudan: [{ name: "Islam", pct: 91 }, { name: "Traditional/Christian", pct: 6 }],
  Sweden: [{ name: "Christianity", pct: 52 }, { name: "Unaffiliated", pct: 39 }, { name: "Islam", pct: 5 }],
  Thailand: [{ name: "Buddhism", pct: 93 }, { name: "Islam", pct: 5 }],
  Turkey: [{ name: "Islam", pct: 99 }],
  Ukraine: [{ name: "Christianity", pct: 87 }, { name: "Unaffiliated", pct: 11 }],
  "United Arab Emirates": [{ name: "Islam", pct: 76 }, { name: "Christianity", pct: 9 }, { name: "Hinduism", pct: 7 }],
  "United Kingdom": [{ name: "Christianity", pct: 46 }, { name: "Unaffiliated", pct: 37 }, { name: "Islam", pct: 6 }],
  "United States of America": [{ name: "Christianity", pct: 63 }, { name: "Unaffiliated", pct: 29 }, { name: "Judaism", pct: 2 }],
  Vietnam: [{ name: "Unaffiliated/folk", pct: 73 }, { name: "Buddhism", pct: 14 }, { name: "Christianity", pct: 7 }],
};

const fallbackDisasters = {
  Afghanistan: "Recent humanitarian reporting frequently cites earthquakes, flash floods, drought, and winter weather impacts.",
  Australia: "Recent hazard reporting commonly includes bushfires, floods, cyclones, heatwaves, and severe storms.",
  Brazil: "Recent disaster reporting has included floods, landslides, drought, and severe weather in multiple regions.",
  Canada: "Recent reporting commonly includes wildfires, floods, winter storms, and heat events.",
  China: "Recent reporting commonly includes floods, typhoons, earthquakes, landslides, and extreme heat.",
  France: "Recent reporting commonly includes floods, heatwaves, storms, and wildfire risk.",
  India: "Recent reporting commonly includes floods, cyclones, heatwaves, landslides, and earthquakes.",
  Indonesia: "Recent reporting commonly includes earthquakes, volcanic activity, floods, landslides, and tsunamis.",
  Japan: "Recent reporting commonly includes earthquakes, typhoons, floods, landslides, and volcanic activity.",
  Mexico: "Recent reporting commonly includes earthquakes, hurricanes, floods, drought, and wildfires.",
  Philippines: "Recent reporting commonly includes typhoons, floods, landslides, volcanic activity, and earthquakes.",
  Turkey: "Recent reporting commonly includes earthquakes, floods, landslides, wildfires, and severe winter weather.",
  "United Kingdom": "Recent reporting commonly includes floods, storms, heatwaves, and coastal weather impacts.",
  "United States of America": "Recent reporting commonly includes hurricanes, floods, tornadoes, wildfires, winter storms, and severe heat.",
};

const els = {
  svg: d3.select("#globe"),
  tooltip: document.getElementById("tooltip"),
  loading: document.getElementById("loading"),
  learnMode: document.getElementById("learnMode"),
  testMode: document.getElementById("testMode"),
  learnPanel: document.getElementById("learnPanel"),
  quizPanel: document.getElementById("quizPanel"),
  countryName: document.getElementById("countryName"),
  countryPrompt: document.getElementById("countryPrompt"),
  stats: document.getElementById("stats"),
  population: document.getElementById("population"),
  capital: document.getElementById("capital"),
  religionBlock: document.getElementById("religionBlock"),
  religions: document.getElementById("religions"),
  disasterBlock: document.getElementById("disasterBlock"),
  disaster: document.getElementById("disaster"),
  disasterLink: document.getElementById("disasterLink"),
  zoomRange: document.getElementById("zoomRange"),
  zoomValue: document.getElementById("zoomValue"),
  resetView: document.getElementById("resetView"),
  guessForm: document.getElementById("guessForm"),
  guessInput: document.getElementById("guessInput"),
  feedback: document.getElementById("feedback"),
  guessList: document.getElementById("guessList"),
  winActions: document.getElementById("winActions"),
  playAgain: document.getElementById("playAgain"),
  exitQuiz: document.getElementById("exitQuiz"),
};

let countries = [];
let countryByName = new Map();
let countryById = new Map();
let selectedId = null;
let hoveredId = null;
let quizTarget = null;
let guessedIds = new Set();
let currentDistance = null;

const width = () => Math.max(320, els.svg.node().clientWidth);
const height = () => Math.max(320, els.svg.node().clientHeight);
const projection = d3.geoOrthographic().clipAngle(90).precision(0.35);
const path = d3.geoPath(projection);
const graticule = d3.geoGraticule10();
const sphere = { type: "Sphere" };
const g = els.svg.append("g");
const spherePath = g.append("path").attr("class", "sphere").datum(sphere);
const graticulePath = g.append("path").attr("class", "graticule").datum(graticule);
const countryLayer = g.append("g");

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/^the\s+/, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function addIfPresent(list, value) {
  if (!value || value === "-99") return;
  String(value).split(/[;,]/).forEach(part => {
    const cleaned = part.trim();
    if (cleaned) list.push(cleaned);
  });
}

function aliases(country) {
  const base = country.name;
  const meta = country.meta || {};
  const names = [base];
  [
    "name",
    "name_long",
    "name_en",
    "admin",
    "sovereignt",
    "geounit",
    "subunit",
    "brk_name",
    "formal_en",
    "name_sort",
    "name_alt",
    "adm0_a3",
    "iso_a2",
    "iso_a3",
    "postal",
    "abbrev",
  ].forEach(key => addIfPresent(names, meta[key]));
  const aliasMap = {
    "United States": ["United States of America", "USA", "U.S.A.", "US", "U.S.", "America"],
    "United Kingdom": ["UK", "Britain", "Great Britain"],
    "United Arab Emirates": ["UAE", "U.A.E.", "Emirates"],
    "Russia": ["Russian Federation"],
    "Democratic Republic of the Congo": ["DR Congo", "Congo Kinshasa", "DRC"],
    "Republic of the Congo": ["Congo", "Congo Brazzaville"],
    "Czechia": ["Czech Republic"],
    "South Korea": ["Korea", "Republic of Korea"],
    "North Korea": ["DPRK"],
    "Cote d'Ivoire": ["Ivory Coast"],
    "Eswatini": ["Swaziland"],
    "Myanmar": ["Burma"],
    "Türkiye": ["Turkey"],
  };
  return names.concat(aliasMap[base] || []);
}

function formatNumber(value) {
  return value ? new Intl.NumberFormat().format(value) : "Unknown";
}

function collectPositions(geometry, points = []) {
  if (!geometry) return points;
  if (geometry.type === "Point") points.push(geometry.coordinates);
  if (geometry.type === "MultiPoint" || geometry.type === "LineString") points.push(...geometry.coordinates);
  if (geometry.type === "MultiLineString" || geometry.type === "Polygon") geometry.coordinates.flat(1).forEach(point => points.push(point));
  if (geometry.type === "MultiPolygon") geometry.coordinates.flat(2).forEach(point => points.push(point));
  if (geometry.type === "GeometryCollection") geometry.geometries.forEach(item => collectPositions(item, points));
  return points;
}

function closestBorderDistanceKm(a, b) {
  const aPoints = a.borderPoints || collectPositions(a.geometry);
  const bPoints = b.borderPoints || collectPositions(b.geometry);
  let closest = Infinity;
  for (const pointA of aPoints) {
    if (d3.geoContains(b, pointA)) return 0;
    for (const pointB of bPoints) {
      const km = d3.geoDistance(pointA, pointB) * 6371;
      if (km < closest) closest = km;
      if (closest < 1) return 0;
    }
  }
  for (const pointB of bPoints) {
    if (d3.geoContains(a, pointB)) return 0;
  }
  return Math.round(closest);
}

function resize() {
  const w = width();
  const h = height();
  els.svg.attr("viewBox", `0 0 ${w} ${h}`);
  projection.translate([w / 2, h / 2]).scale(Number(els.zoomRange.value));
  render();
}

function render() {
  spherePath.attr("d", path);
  graticulePath.attr("d", path);
  countryLayer
    .selectAll("path")
    .attr("d", path)
    .attr("aria-label", d => quizTarget ? "Country shape" : d.name)
    .attr("tabindex", quizTarget ? -1 : 0)
    .attr("class", d => {
      const classes = ["country"];
      if (d.id === hoveredId) classes.push("hovered");
      if (d.id === selectedId) classes.push("selected");
      if (guessedIds.has(d.id)) classes.push("guessed");
      if (quizTarget && d.id === quizTarget.id && els.winActions.classList.contains("hidden") === false) classes.push("target");
      return classes.join(" ");
    });
}

function setZoomValue() {
  const pct = Math.round((Number(els.zoomRange.value) / 380) * 100);
  els.zoomValue.textContent = `${pct}%`;
}

function applyZoom(value) {
  const min = Number(els.zoomRange.min);
  const max = Number(els.zoomRange.max);
  const next = Math.max(min, Math.min(max, value));
  els.zoomRange.value = String(next);
  setZoomValue();
  resize();
}

function showTooltip(event, name) {
  if (quizTarget) return;
  els.tooltip.textContent = name;
  els.tooltip.style.display = "block";
  els.tooltip.style.transform = `translate(${event.offsetX + 14}px, ${event.offsetY + 14}px)`;
}

function hideTooltip() {
  hoveredId = null;
  els.tooltip.style.display = "none";
  render();
}

async function selectCountry(country) {
  selectedId = country.id;
  render();
  els.countryName.textContent = country.name;
  els.countryPrompt.textContent = "Loading country details...";
  els.stats.hidden = false;
  els.religionBlock.hidden = false;
  els.disasterBlock.hidden = false;
  els.population.textContent = "Loading";
  els.capital.textContent = "Loading";
  renderReligion(country.name);
  await Promise.all([loadCountryFacts(country), loadDisaster(country)]);
}

function renderReligion(name) {
  const data = religionData[name] || [];
  if (!data.length) {
    els.religions.innerHTML = `<p class="muted">No local religion percentage reference is included yet for ${name}.</p>`;
    return;
  }
  els.religions.innerHTML = data.map(item => `
    <div class="religion-row">
      <span>${item.name}</span>
      <div class="bar" aria-label="${item.name} ${item.pct}%"><span style="width:${item.pct}%"></span></div>
      <strong>${item.pct}%</strong>
    </div>
  `).join("");
}

async function loadCountryFacts(country) {
  try {
    const res = await fetch(`${REST_URL}${country.iso || country.id}`);
    if (!res.ok) throw new Error("Country lookup failed");
    const [data] = await res.json();
    els.population.textContent = formatNumber(data.population);
    els.capital.textContent = data.capital?.[0] || "Unknown";
    els.countryPrompt.textContent = data.region ? `${data.region}${data.subregion ? `, ${data.subregion}` : ""}` : "Country details";
  } catch {
    els.population.textContent = "Unavailable";
    els.capital.textContent = "Unavailable";
    els.countryPrompt.textContent = "Country lookup is unavailable right now.";
  }
}

async function loadDisaster(country) {
  els.disaster.textContent = "Checking ReliefWeb for recent reporting...";
  els.disasterLink.style.display = "none";
  try {
    const url = new URL(RELIEFWEB_URL);
    url.searchParams.set("appname", "globequest");
    url.searchParams.set("limit", "1");
    url.searchParams.set("sort[]", "date:desc");
    url.searchParams.set("profile", "full");
    url.searchParams.set("filter[field]", "country.name");
    url.searchParams.set("filter[value]", country.name);
    const res = await fetch(url);
    if (!res.ok) throw new Error("ReliefWeb lookup failed");
    const data = await res.json();
    const report = data.data?.[0]?.fields;
    if (!report) throw new Error("No recent report");
    const date = report.date?.created ? new Date(report.date.created).toLocaleDateString() : "recent";
    els.disaster.textContent = `${report.title} (${date}).`;
    els.disasterLink.href = report.url || `https://reliefweb.int/updates?search=${encodeURIComponent(country.name)}`;
    els.disasterLink.style.display = "inline";
  } catch {
    els.disaster.textContent = fallbackDisasters[country.name] || "No live ReliefWeb disaster report could be loaded. Try again with an internet connection, or choose another country.";
    els.disasterLink.href = `https://reliefweb.int/updates?search=${encodeURIComponent(country.name)}`;
    els.disasterLink.style.display = "inline";
  }
}

function startQuiz() {
  els.learnMode.classList.remove("active");
  els.testMode.classList.add("active");
  els.learnPanel.classList.add("hidden");
  els.quizPanel.classList.remove("hidden");
  hideTooltip();
  newRound();
}

function exitQuiz() {
  els.testMode.classList.remove("active");
  els.learnMode.classList.add("active");
  els.quizPanel.classList.add("hidden");
  els.learnPanel.classList.remove("hidden");
  quizTarget = null;
  guessedIds.clear();
  currentDistance = null;
  els.winActions.classList.add("hidden");
  render();
}

function newRound() {
  guessedIds.clear();
  currentDistance = null;
  quizTarget = countries[Math.floor(Math.random() * countries.length)];
  els.feedback.textContent = "A random country is ready.";
  els.guessList.innerHTML = "";
  els.winActions.classList.add("hidden");
  els.guessInput.disabled = false;
  els.guessInput.value = "";
  els.guessInput.focus();
  render();
}

function handleGuess(event) {
  event.preventDefault();
  const raw = els.guessInput.value.trim();
  if (!raw || !quizTarget) return;
  const guess = countryByName.get(normalizeName(raw));
  if (!guess) {
    els.feedback.textContent = "I could not match that to a country on the globe. Check spelling and try again.";
    return;
  }
  guessedIds.add(guess.id);
  selectedId = guess.id;
  const dist = closestBorderDistanceKm(guess, quizTarget);
  const warmer = currentDistance == null ? "" : dist < currentDistance ? " Warmer." : dist > currentDistance ? " Colder." : " Same distance.";
  currentDistance = dist;
  const li = document.createElement("li");
  li.textContent = `${guess.name}: ${dist.toLocaleString()} km away.${warmer}`;
  els.guessList.prepend(li);
  if (guess.id === quizTarget.id) {
    els.feedback.textContent = `Correct. The country was ${quizTarget.name}.`;
    els.winActions.classList.remove("hidden");
    els.guessInput.disabled = true;
  } else {
    els.feedback.textContent = `${guess.name} is ${dist.toLocaleString()} km away from the secret country.${warmer}`;
  }
  els.guessInput.value = "";
  rotateTo(guess.centroid);
  render();
}

function rotateTo([lon, lat]) {
  projection.rotate([-lon, -lat, 0]);
}

function installDrag() {
  let startRotation;
  let startPoint;
  els.svg.call(d3.drag()
    .on("start", event => {
      startRotation = projection.rotate();
      startPoint = [event.x, event.y];
    })
    .on("drag", event => {
      const scale = projection.scale();
      const dx = (event.x - startPoint[0]) / scale * 130;
      const dy = (event.y - startPoint[1]) / scale * 130;
      projection.rotate([startRotation[0] + dx, Math.max(-89, Math.min(89, startRotation[1] - dy)), startRotation[2]]);
      render();
    }));
}

function installWheelZoom() {
  els.svg.node().addEventListener("wheel", event => {
    event.preventDefault();
    const current = Number(els.zoomRange.value);
    const multiplier = event.deltaY < 0 ? 1.08 : 0.92;
    applyZoom(Math.round(current * multiplier));
  }, { passive: false });
}

async function boot() {
  installDrag();
  installWheelZoom();
  const [world, namesText] = await Promise.all([
    fetch(WORLD_URL).then(res => res.json()),
    fetch(NAMES_URL).then(res => res.text()),
  ]);
  const nameRows = d3.tsvParse(namesText);
  const idToMeta = new Map();
  nameRows.forEach(row => {
    if (row.iso_n3 && row.iso_n3 !== "-99") {
      idToMeta.set(row.iso_n3, row);
      idToMeta.set(String(Number(row.iso_n3)), row);
    }
  });
  countries = topojson.feature(world, world.objects.countries).features
    .filter(feature => feature.id != null)
    .map(feature => {
      const meta = idToMeta.get(String(feature.id));
      const country = {
        ...feature,
        id: String(feature.id),
        iso: meta?.iso_n3 || meta?.iso_a3 || String(feature.id),
        name: meta?.name || meta?.name_en || `Country ${feature.id}`,
        meta,
        centroid: d3.geoCentroid(feature),
        borderPoints: collectPositions(feature.geometry),
      };
      return country;
    })
    .filter(country => country.name !== "Antarctica");

  countries.forEach(country => {
    countryById.set(country.id, country);
    aliases(country).forEach(name => countryByName.set(normalizeName(name), country));
  });

  countryLayer
    .selectAll("path")
    .data(countries)
    .join("path")
    .attr("class", "country")
    .attr("tabindex", 0)
    .attr("aria-label", d => d.name)
    .on("mousemove", (event, d) => {
      if (quizTarget) return;
      hoveredId = d.id;
      showTooltip(event, d.name);
      render();
    })
    .on("mouseleave", hideTooltip)
    .on("click", (_, d) => {
      if (!quizTarget) selectCountry(d);
    })
    .on("keydown", (event, d) => {
      if (!quizTarget && (event.key === "Enter" || event.key === " ")) selectCountry(d);
    });

  els.loading.style.display = "none";
  resize();
}

els.zoomRange.addEventListener("input", () => {
  applyZoom(Number(els.zoomRange.value));
});
els.resetView.addEventListener("click", () => {
  projection.rotate([0, -18, 0]);
  applyZoom(380);
});
els.learnMode.addEventListener("click", exitQuiz);
els.testMode.addEventListener("click", startQuiz);
els.guessForm.addEventListener("submit", handleGuess);
els.playAgain.addEventListener("click", newRound);
els.exitQuiz.addEventListener("click", exitQuiz);
window.addEventListener("resize", resize);

setZoomValue();
projection.rotate([0, -18, 0]);
boot().catch(error => {
  console.error(error);
  els.loading.textContent = "Could not load the globe. Check your internet connection and refresh.";
});
