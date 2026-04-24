# Counter Project — useState with Bounds

## 📌 What is Implemented

A **React counter application** that demonstrates controlled state management with boundary enforcement:

- A counter that starts at `0`
- **"Add Value"** button increments the counter by 1, but stops at `20`
- **"Remove Value"** button decrements the counter by 1, but stops at `0`
- The current counter value is displayed live in the UI

```jsx
const [counter, setCounter] = useState(0)

const addvalue = () => {
  if (counter < 20) setCounter(counter + 1)
}

const removevalue = () => {
  if (counter > 0) setCounter(counter - 1)
}
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **`useState` — React's Primary State Primitive with Guard Conditions**

`useState` is used to store the counter value. The key practice here is adding **boundary checks** inside the updater functions to enforce valid state ranges, rather than putting logic in the rendering layer.

| Approach | Problem |
|---|---|
| No bounds check | Counter can go negative or infinitely high — invalid UI state |
| Bounds in render (disable button) | UI-only fix; state can still be manipulated programmatically |
| ✅ Bounds in state updater | State is always valid, regardless of how the update is triggered |

**Why this is better:**  
Keeping logic in the state update function means the component is **self-protecting**. Even if the button is triggered via keyboard shortcuts or automated tests, the state can never become invalid.

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Bounded useState Applies |
|---|---|
| **Cart quantity selector** | Quantity can't go below 1 or above available stock |
| **Rating widget (1–5 stars)** | Stars are clamped to valid range |
| **Pagination** | Page number can't go below 1 or above total pages |
| **Volume slider** | Audio volume stays between 0–100 |
| **Form step wizard** | Step index stays within [0, totalSteps - 1] |
