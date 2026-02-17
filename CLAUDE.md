# Project Plan: Lake Cruise Timetable (PoC)

## 🚢 Project Overview

A PWA clone of the BLS Lake Cruise timetable for Lake Thun and Lake Brienz.

* **Goal:** Proof of Concept focusing on ease of use.
* **Timeline:** 2 Sprints (4 weeks total).
* **Core Value:** Real-time boat schedules with steamship/motor vessel identification.

---

## 🛠 Tech Stack

* **Monorepo:** Turborepo
* **Frontend:** React (Vite) + Tailwind CSS
* **Component Library:** ShadCN UI (built in `packages/ui` and documented via **Storybook**)
* **State Management:** TanStack Query (React Query)
* **Backend:** Serverless Functions (Vercel/Netlify)
* **PWA:** `vite-plugin-pwa` (Workbox)
* **API:** [Swiss Transport API]()

---

## 🏗 Architecture & Workspace

```text
/
├── apps/
│   └── web/                # React PWA (The Main App)
├── packages/
│   ├── ui/                 # ShadCN + Storybook components
│   ├── tailwind-config/    # Shared design tokens from Figma
│   └── tsconfig/           # Shared TS configuration

```

---

## 📊 Data Logic & API Mapping

* **Transport API Endpoint:** `https://transport.opendata.ch/v1/connections`
* **Filtering:** - Only show connections where `sections[].journey.category === "BAT"`.
* **Vessel Identification:**
* **Steamship (DS):** Match `journey.name` against `["Blümlisalp", "Spiez", "Lötschberg"]` or contains "DS".
* **Motor Vessel (MS):** Default for other "BAT" categories.


* **Search Logic:**
* Must support `from`, `to`, `date`, `time`, and `isArrivalTime`.



---

## 🏃 Sprint 1: Foundation & UI System

**Focus: Design System and Data Proxy**

* [ ] **Setup Monorepo:** Initialize Turborepo with `apps/web` and `packages/ui`.
* [ ] **Design Tokens:** Export Figma colors/spacing to Tailwind config in `packages/ui`.
* [ ] **ShadCN + Storybook:**
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

## 📋 Implementation Guidelines

* **Ease of Use:** Minimize typing. Use selectable lists for major piers (Thun, Interlaken West, Spiez, Brienz).
* **Performance:** All UI components must be imported from the `@repo/ui` package.
* **Styling:** Strictly follow the Figma-defined theme using Tailwind utility classes.
* **Mocking:** Provide a mock JSON response in Storybook for all `ConnectionCard` states (Steamship vs Motor).
