# Project Plan: Lake Cruise Timetable (PoC)

## 🚢 Project Overview

A PWA clone of the BLS Lake Cruise timetable for Lake Thun and Lake Brienz.

* **Goal:** Proof of Concept focusing on ease of use.
* **Timeline:** 2 Sprints (4 weeks total).
* **Core Value:** Real-time boat schedules with steamship/motor vessel identification.

---

## 🛠 Tech Stack

* **Monorepo:** Turborepo
* **JS Runtime:** Bun (instead of Node.js) for the Web app and the Component Library with Storybook
* **Linting:** Use Biome (instead of Eslint and Prettier) for custom apps and custom packages
* **Web App (Frontend):** React (Vite) + Tailwind CSS using Bun instead of Node.js
* **Component Library:** ShadCN (built in `packages/ui` and documented via **Storybook**) - also use Bun instead of Node.js
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

**Focus: Basic App with Component System**

* [x] **Setup Monorepo:** Initialize Turborepo with `apps/web` and `packages/ui`.
* [x] **ShadCN:** Install ShadCN with Tailwind 4
* [x] **Storybook:**: Add components to Storybook as the main UI package.

---

## 🏃 Sprint 2: Search Form

**Focus: Create a Search Form**

* [ ] **Create a Search Form Component:** Create a search form component and import it into the homepage.
* [ ] **Create a Typeahead Component:** Create a typeahead component using ShadCN's combobox component and import it into Search Form component. It will be used for "form" and "to" piers.
* [ ] **Add Date/Picker to Search Form:** Add ShadCN's Date Picker component and import it
Search form contains:
    * 2 typeaheads for piers "from" and "to" using the Combobox component. As the user starts typing in to the field It will fetch the piers names from the api and display the results dynamically in a ShadCN combobox component.
    * Date picker.
    * Time picker either for departure or arrival. The user can check departure or arrival above the time selection.
    Time selection 

* [ ] **Setup Monorepo:** Initialize Turborepo with `apps/web` and `packages/ui`.


---

## 📋 Implementation Guidelines

* **Ease of Use:** Minimize typing. Use selectable lists for major piers (Thun, Interlaken West, Spiez, Brienz).
* **Performance:** All UI components must be imported from the `@repo/ui` package.
* **Styling:** Strictly follow the Figma-defined theme using Tailwind utility classes.
* **Mocking:** Provide a mock JSON response in Storybook for all `ConnectionCard` states (Steamship vs Motor).
