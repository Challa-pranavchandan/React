# propsTailwind — Reusable Card Component with Props & Tailwind CSS

## 📌 What is Implemented

A demonstration of **React Props** and **reusable components** styled with Tailwind CSS:

- A `Card` component that accepts `Itemname`, `price`, `id`, and `img` as props
- Two card instances are rendered in `App.jsx` with different data — showing component reusability
- Tailwind CSS classes applied directly in JSX for rapid UI development

```jsx
// App.jsx — same component, different data
<Card Itemname="OG"      price="20" id="1" img="https://..." />
<Card Itemname="Friends" price="50" id="2" img="https://..." />
```

```jsx
// Card.jsx — reusable template
function Card({ Itemname, price, id, img }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={img} alt={Itemname} />
      <h2>{Itemname}</h2>
      <p>Price: {price}</p>
    </div>
  )
}
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice 1: **Props — One Component, Many Instances**
Instead of writing separate `OGCard` and `FriendsCard` components, one `Card` component is parameterized with props. This is the **DRY (Don't Repeat Yourself)** principle applied to UI.

| Without Props | With Props |
|---|---|
| New component file for each card | One `Card` component for all cards |
| UI bug must be fixed in N places | Fix once, applies everywhere |
| Data hardcoded in JSX | Data passed from parent — easier to come from an API |

### Practice 2: **Tailwind CSS — Utility-First Styling**
Tailwind applies styles directly as class names on elements, eliminating the need to switch between JSX and CSS files for basic styling.

| CSS Modules / Plain CSS | Tailwind |
|---|---|
| Separate `.css` file per component | Styles co-located with markup |
| Class naming fatigue (`.card-title`) | Semantic utility names (`text-xl font-bold`) |
| Hard to see layout at a glance | Layout is visible directly in JSX |

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Props + Reusable Components Apply |
|---|---|
| **Product listing page** | `ProductCard` component rendered for each item in an API response array |
| **Notification system** | `Toast` component receives `type`, `message`, `duration` as props |
| **Data tables** | `TableRow` component accepts a row object — the table maps over data and renders rows |
| **Dashboard widgets** | `StatCard` component accepts `label`, `value`, `icon`, `trend` — reused for every metric |
| **Form fields** | `InputField` component wraps `<input>` with consistent label, error, and styling via props |