# Project 1 — Background Color Changer

## 📌 What is Implemented

An interactive **dynamic background color changer** built with React and Tailwind CSS:

- The full-screen background color changes **instantly** when a color button is clicked
- Available colors: **Red, Black, Olive, Grey, Blue**
- Buttons are displayed in a floating panel pinned to the bottom of the screen
- Each button is styled to match its color using inline `style` props

```jsx
const [color, setColor] = useState("olive")

<div style={{ backgroundColor: color }} className="h-screen w-full">
  <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>
    red
  </button>
</div>
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **`useState` + Inline Dynamic Styles — Reactive UI without re-fetching**

The `color` state drives the `backgroundColor` of the full-page `div` through an **inline style**. This is the simplest form of data-driven rendering in React.

| Approach | Problem |
|---|---|
| Hardcoded colors in CSS | Cannot change at runtime without JavaScript hacks |
| Toggle CSS classes | Limited to pre-defined class names, not arbitrary color values |
| ✅ `useState` + `style` prop | Any valid CSS color value can be applied dynamically, instantly |

**Why this is better:**  
The `style` prop accepts any JavaScript value — hex codes, RGB, HSL, CSS variables — not just class names. This makes it ideal for user-driven theming where the set of colors isn't known ahead of time.

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Dynamic State + Styles Applies |
|---|---|
| **User profile theme** | Let users pick their accent color from a color picker — stored in state and applied via inline style |
| **Presentation slides** | Each slide has its own background color driven by state |
| **Map heatmaps** | Cell color intensity driven by a numeric value in state |
| **Kanban boards** | Card or column label colors are stored in state per item |
| **Brand color previewer** | Let a designer preview how a logo looks on different backgrounds |