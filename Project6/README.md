# Project 6 — Dark/Light Theme Toggle (Context API + Tailwind)

## 📌 What is Implemented

A **dark/light mode toggle** using the Context API and Tailwind CSS's `dark:` class strategy:

- `ThemeContext` — provides `{ themeMode, lightTheme, darkTheme }` to the entire app
- A **toggle switch button** (`ThemeBtn`) reads the current theme and calls `darkTheme()` or `lightTheme()` from context
- A **Card component** uses Tailwind `dark:` variants to change its appearance based on theme
- `useEffect` watches `themeMode` and adds/removes the `"dark"` class on the `<html>` element — this is what activates Tailwind's dark mode

```jsx
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice 1: **Context API for UI-Wide State (Theme)**
The theme state lives in context so every component — no matter how deeply nested — can access the current mode or toggle it, without prop drilling.

### Practice 2: **`useEffect` for Syncing React State to the DOM**
`useEffect` is the correct way to create **side effects** — changes that happen *outside* the React component tree. Manipulating `document.querySelector('html').classList` is a DOM side effect, not a render output, so it belongs in `useEffect`.

| Wrong approach | Correct approach |
|---|---|
| Calling `document.classList.add` inside render | DOM side effect triggers during rendering — unstable |
| ✅ Calling it inside `useEffect([themeMode])` | Runs *after* render, only when `themeMode` changes |

**Why this matters:**  
React re-renders can be interrupted or run multiple times (StrictMode). Side effects in `useEffect` run exactly once after the render is committed — making it safe and predictable.

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Context + useEffect for DOM Sync Applies |
|---|---|
| **Dark mode** | Exactly this project — toggling `dark` class on `<html>` to activate Tailwind dark variants |
| **System theme sync** | `useEffect` listens to `window.matchMedia('(prefers-color-scheme: dark)')` and updates context |
| **Document title** | `useEffect(() => { document.title = pageName }, [pageName])` — updates browser tab title |
| **Analytics page views** | `useEffect` fires on route change to log a page view to Google Analytics |
| **Scroll lock on modal open** | `useEffect` adds/removes `overflow: hidden` to `<body>` when a modal opens/closes |
