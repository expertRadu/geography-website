# GlobeQuest: Interactive Geographical Data & Discovery Platform

GlobeQuest is a lightweight, client-side web application built from scratch using vanilla JavaScript, semantic HTML5, and custom CSS3. Designed as an engaging educational platform, it features an interactive, rotatable 3D globe visualization that allows users to explore global demographic data, cultural distributions, and real-time humanitarian tracking data, as well as a gamified "Country Guesser" distance-detection application.

This project was engineered independently of visual website builders, automated CMS platforms, or pre-packaged templates as part of a formal academic portfolio focused on programmatic autonomy, user experience mapping, and structural technical design.

---

## 🗺️ Core User Features

The platform is split into two main structural interaction environments, accommodating different learning dynamics:

### 1. Explore & Learn Mode (Passive Discovery)
* **Fluid 3D Visualization:** Users can freely rotate an orthographic projection of the Earth via natural mouse drag gestures and scale perspective coordinates dynamically using mouse-scroll zoom.
* **Real-Time Tooltips:** Hovering over geometric country vectors highlights boundary paths and exposes the common name coordinates instantly.
* **Integrated Knowledge Sidebar:** Clicking a country locks its visual state and updates a responsive informational pane populated with four distinct data layers:
  * *Geopolitical Data:* Official names, global region divisions, and capital city locations.
  * *Demographic Scope:* Total population statistics parsed with readable punctuation formatting.
  * *Sociocultural Metrics:* Responsive distribution charts visualizing primary domestic religious percentages.
  * *Live Humanitarian Risk Tracking:* Asynchronous network connections pull live reporting data (briefing titles, activation dates, and documentation URLs) covering active environmental or natural disaster incidents.

### 2. Knowledge Test Mode (Active Gamification)
* **Secret Target Selector:** The system selects a randomized target country from a local array, turning off standard mouse-hover map labels to mandate mental recall.
* **Flexible Input Normalization:** A text validation pipeline sanitizes user search entries by stripping special characters, removing leading articles, and cross-referencing input against an extensive registry of historical country abbreviations and political aliases (e.g., matching "UK" to "United Kingdom").
* **Proximity Feedback Tracking:** Incorrect guesses highlight on the globe, spin the coordinate view to focus on the entry point, and generate a historical guess list calculating the exact boundary deviation distance in kilometers. The logic appends dynamic direction indicators ("Warmer" or "Colder") to narrow down the global grid.
* **Regulated Victory States:** Correct entries trigger a visual success cascade, lock inputs to prevent duplication, and expose a reset interface to generate subsequent challenge sequences.

---

## 🛠️ Technical Architecture & Directory Layout

The application avoids external compilation frameworks, dependencies, or server runtimes. It is engineered to compile entirely within a standard browser sandbox environment, allowing it to be hosted and distributed offline over a Local Area Network (LAN).

```text
├── index.html                   # Core user interface architecture and semantic structure
├── styles.css                   # Custom visual design rules, design variables, and media break-points
├── app.js                       # Main interaction state engines, API fetch loops, and normalization logic
└── vendor/                      # Localized framework directory for offline validation
    ├── d3.min.js                # D3 Core geospatial visualization rendering asset
    ├── topojson-client.min.js   # Vector geometry client parsing utility
    ├── countries-110m.json      # Global geometric coordinate map boundaries file
    └── countries-110m.tsv       # Tabular international naming configuration index
