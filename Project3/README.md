# Project 3 — Currency Converter

## 📌 What is Implemented

A **real-time currency converter** that fetches live exchange rates from an external API:

- Input amount in any currency (e.g., USD)
- Select **From** and **To** currencies from dynamically populated dropdowns
- **Swap** button instantly reverses the conversion direction
- **Convert** button calculates the converted amount
- Live exchange rate data is fetched via a **custom hook** (`useCurrencyInfo`)
- UI built with Tailwind CSS with a glassmorphism card over a background image

**React hooks used:** `useState`, custom hook (`useCurrencyInfo` using `useEffect` + `fetch`)

---

## 🧠 What Practice is Used & Why It is Better

### Practice 1: **Custom Hooks — Separating Data Fetching from UI**

The `useCurrencyInfo(from)` custom hook encapsulates all the API-fetching logic:

```js
// hooks/useCurrencyinfo.js
function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then(res => res.json())
      .then(res => setData(res[currency]))
  }, [currency])
  return data
}
```

| Without Custom Hook | With Custom Hook |
|---|---|
| API logic duplicated across components | One place to update the fetch URL |
| Large, hard-to-read component | `App.jsx` is clean — reads like a description of what the app does |
| Can't reuse fetch logic | Any component can call `useCurrencyInfo('eur')` |

### Practice 2: **Reusable `InputBox` Component with Props**
The same `InputBox` component is used for both "From" and "To" fields, controlled by different props — demonstrating the DRY (Don't Repeat Yourself) principle.

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Custom Hooks Apply |
|---|---|
| **Authentication** | `useAuth()` custom hook exposes `user`, `login()`, `logout()` — used across any component |
| **WebSocket data** | `useStockPrice('AAPL')` subscribes to a live feed and returns the latest price |
| **Geolocation** | `useGeolocation()` wraps the browser API and returns `{ lat, lng, error }` |
| **Local storage sync** | `useLocalStorage('key', defaultVal)` syncs state with localStorage automatically |
| **Window resize** | `useWindowSize()` returns `{ width, height }` and updates on resize |
