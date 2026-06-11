const fs = require("fs");
const d3 = require("../outputs/vendor/d3.min.js");
const topojson = require("../outputs/vendor/topojson-client.min.js");

const world = JSON.parse(fs.readFileSync("../outputs/vendor/countries-110m.json", "utf8"));
const rows = d3.tsvParse(fs.readFileSync("../outputs/vendor/countries-110m.tsv", "utf8"));

function normalizeName(name) {
  return name.toLowerCase().replace(/^the\s+/, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
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
    "name", "name_long", "name_en", "admin", "sovereignt", "geounit", "subunit",
    "brk_name", "formal_en", "name_sort", "name_alt", "adm0_a3", "iso_a2",
    "iso_a3", "postal", "abbrev",
  ].forEach(key => addIfPresent(names, meta[key]));
  const aliasMap = {
    "United States": ["United States of America", "USA", "U.S.A.", "US", "U.S.", "America"],
    "United Kingdom": ["UK", "Britain", "Great Britain"],
    "United Arab Emirates": ["UAE", "U.A.E.", "Emirates"],
    Russia: ["Russian Federation"],
    "Democratic Republic of the Congo": ["DR Congo", "Congo Kinshasa", "DRC"],
    "Republic of the Congo": ["Congo", "Congo Brazzaville"],
    Czechia: ["Czech Republic"],
    "South Korea": ["Korea", "Republic of Korea"],
    "North Korea": ["DPRK"],
    "Cote d'Ivoire": ["Ivory Coast"],
    "Côte d'Ivoire": ["Ivory Coast"],
    Eswatini: ["Swaziland"],
    Myanmar: ["Burma"],
    "Türkiye": ["Turkey"],
  };
  return names.concat(aliasMap[base] || []);
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
  const aPoints = a.borderPoints;
  const bPoints = b.borderPoints;
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

const idToMeta = new Map();
rows.forEach(row => {
  if (row.iso_n3 && row.iso_n3 !== "-99") {
    idToMeta.set(row.iso_n3, row);
    idToMeta.set(String(Number(row.iso_n3)), row);
  }
});

const countries = topojson.feature(world, world.objects.countries).features
  .filter(feature => feature.id != null)
  .map(feature => {
    const meta = idToMeta.get(String(feature.id));
    return {
      ...feature,
      id: String(feature.id),
      name: meta?.name || meta?.name_en || `Country ${feature.id}`,
      meta,
      borderPoints: collectPositions(feature.geometry),
    };
  })
  .filter(country => country.name !== "Antarctica");

const byName = new Map();
countries.forEach(country => aliases(country).forEach(name => byName.set(normalizeName(name), country)));

const result = {
  USA: byName.get(normalizeName("USA"))?.name,
  US: byName.get(normalizeName("U.S."))?.name,
  UAE: byName.get(normalizeName("UAE"))?.name,
  UAEDots: byName.get(normalizeName("U.A.E."))?.name,
  chinaMongoliaKm: closestBorderDistanceKm(byName.get(normalizeName("China")), byName.get(normalizeName("Mongolia"))),
  countryCount: countries.length,
};

console.log(JSON.stringify(result, null, 2));
