---

## 🏃 Sprint 1: Foundation & UI System

**Focus: Design System and Data Proxy**

* [x] **Setup Monorepo:** Initialize Turborepo with `apps/web` and `packages/ui`.
* [ ] **Figma:** Adapt design in Figma, so it can be used with Figma MCP for the export.
* [ ] **Design Tokens:** Export Figma colors/spacing to Tailwind config in `packages/ui`.
* [ ] **ShadCN:** We would like to replace the code of the Figma components with ShadCN. How can we do that? Can we do it with Code Connect?
* [ ] **Storybook:**: Add components to Storybook as the main UI package. Test variants using Playwright

* Build `SearchForm` component (Combobox for piers, Date/Time pickers).
* Build `ConnectionCard` (Showing departure, arrival, duration, and vessel icon).
* Build `PassList` (Accordion for intermediate stops).


* [ ] **Serverless API:** Create a Node.js proxy to fetch from Transport API, filter for boat lines, and inject `vesselType` metadata.

---

## 🏃 Sprint 2: Integration & PWA

**Focus: App logic and Offline capabilities**

* [ ] **Search Implementation:** Connect `apps/web` to the Serverless API.
* [ ] **Quick-Time Selectors:** Add "Now", "+1h", "+2h", "+3h" shortcut buttons to the UI.
* [ ] **PWA Configuration:**
* Setup Manifest (icons, colors).
* Configure Service Worker for "Network First" caching on API calls.
* Implement "Offline Mode" banner when no network is detected.


* [ ] **Installation Flow:** Add a custom "Install App" prompt for iOS/Android.
* [ ] **Pull-to-Refresh:** Implement refresh logic for live updates.

---