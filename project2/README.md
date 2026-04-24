# Project 2 — Password Generator

## 📌 What is Implemented

A **random password generator** with configurable options:

- **Length slider** — adjusts password length from 7 to 50 characters
- **Numbers toggle** — includes/excludes digits (0–9)
- **Special characters toggle** — includes/excludes symbols (`!@#$%^&*()~\``)
- **Copy to clipboard** button — copies the generated password with a visual click animation
- Password **regenerates automatically** whenever length, number, or character settings change

**React hooks used:** `useState`, `useCallback`, `useEffect`, `useRef`

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **`useCallback` + `useEffect` for Memoized, Reactive Computation**

`useCallback` memoizes the `passwordGenerator` function so it is only re-created when its dependencies (`length`, `num`, `char`) change — not on every re-render.

`useEffect` watches those same dependencies and re-runs the generator automatically.

```jsx
const passwordGenerator = useCallback(() => {
  // ... builds password
}, [length, num, char, setpassword]) // only recreated when these change

useEffect(() => {
  passwordGenerator()
}, [length, num, char, passwordGenerator]) // runs automatically when settings change
```

`useRef` holds a reference to the password input element for clipboard operations without triggering a re-render.

| Without useCallback | With useCallback |
|---|---|
| New function created on every render | Same function reference reused unless deps change |
| Child components re-render unnecessarily | Child components only re-render when truly needed |
| `useEffect` dep array gets stale function | useEffect always has a stable, correct function reference |

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How useCallback / useEffect / useRef Applies |
|---|---|
| **Search with debounce** | `useCallback` wraps the debounced search function; `useEffect` triggers search when query changes |
| **Chart updates** | `useCallback` wraps the chart-drawing function; `useEffect` re-draws when data changes |
| **Form validation** | `useCallback` memoizes validators passed as props to input components |
| **Clipboard & file input** | `useRef` accesses the hidden `<input type="file">` to programmatically open the file picker |
| **Infinite scroll** | `useRef` holds the observer element; `useCallback` memoizes the intersection callback |