# How to map Figma designs to the ShadCN components?


While **Figma Make** (part of Figma’s AI suite) doesn't have a single "Map to ShadCN" button, you can absolutely achieve this mapping using Figma's official developer tool, **Code Connect**, or specialized third-party plugins.

Here is how you can handle the mapping specifically for ShadCN.

---

## 1. The Official Way: Figma Code Connect

If you are on a Figma **Organization** or **Enterprise** plan, **Code Connect** is the most powerful way to map your design components to your local ShadCN code.

* **How it works:** You link a component in your Figma file (e.g., your "Search Button") to the actual file path in your codebase (e.g., `@/components/ui/button.tsx`).
* **The AI Connection:** Once mapped, when you use Figma’s AI features or **Dev Mode**, the code snippets generated will no longer be generic CSS; they will use your actual ShadCN `<Button />` component with the correct props.

### How to set it up:

1. **Install the CLI:** Run `npm install -g @figma/code-connect` in your project.
2. **Create a Mapping:** Use the command `figma connect create` to link a Figma component URL to your ShadCN component.
3. **Define Props:** You can map Figma variants (like `size` or `variant`) directly to ShadCN props in a `.figma.tsx` file.

---

## 2. The "Figma Make" AI Workflow

If you want to use the **Figma Make** (prompt-to-design) feature and have it "know" ShadCN, you need to provide context:

* **System Prompts:** When using Figma Make to generate or iterate on your design, you can explicitly tell the AI: *"Use the ShadCN design system architecture for this layout."*
* **Component Context:** Figma Make is most effective when it is pulling from a library you have already enabled. If you have a **ShadCN Figma Kit** (like the ones from the Figma Community) enabled as a library in your file, Figma Make is more likely to use those specific instances rather than drawing random shapes.

---

## 3. Specialized Plugins (Easier for ShadCN)

Since ShadCN is so popular, there are plugins specifically built to skip the manual mapping work:

* **Anima:** Recently added **ShadCN support**. You can select your Figma components, tag them as ShadCN primitives, and it will generate the React code using the library's syntax.
* **Builder.io (Visual Copilot):** This plugin is excellent at "seeing" a design and mapping it to a codebase. It can scan your existing ShadCN components and attempt to use them when you "Sync to Code."
* **Shadcn UI Plugin:** There are community plugins (like "Figma to Shadcn/ui") that allow you to select a frame and instantly get a v0-style code block that uses ShadCN primitives.

---

## 4. The "v0.dev" Shortcut

Many teams find the following "Hybrid" workflow faster than direct Figma mapping:

1. **Export Frame as Image:** Take your Lake Cruise Timetable design from Figma.
2. **Upload to [v0.dev](https://v0.dev):** Ask it: *"Build this UI using ShadCN and Tailwind."*
3. **Copy-Paste:** v0 is specifically trained on ShadCN and will give you nearly perfect component mapping (using `Card`, `Tabs`, `Input`, etc.) in seconds.

### Summary of Options

| Goal | Tool to Use |
| --- | --- |
| **Permanent mapping** for a team | **Code Connect** (Figma Official) |
| **Instant code** from a design | **Anima** or **v0.dev** |
| **AI-driven** design generation | **Figma Make** (with a ShadCN library enabled) |

**Would you like me to help you write the `.figma.tsx` mapping file for one of your specific components (like the Search input)?**