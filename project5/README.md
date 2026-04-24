# Project 5 — React Context API (Basic)

## 📌 What is Implemented

An introduction to **React's Context API** for passing data without prop drilling:

- `UserContext` — created with `React.createContext()`
- `UserContextProvider` — wraps the app to provide user data
- `Login` component — sets the user in context
- `Profile` component — reads the user from context with `useContext()`

```jsx
// UserContext.js
const UserContext = React.createContext()

// UserContextProvider.jsx
<UserContext.Provider value={{ user, setUser }}>
  {children}
</UserContext.Provider>

// Profile.jsx (consumer)
const { user } = useContext(UserContext)
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **Context API — Global State Without Prop Drilling**

Without Context, you must pass props down through every component in the tree (known as "prop drilling"). Context solves this by making values available to **any descendant** component directly.

| Without Context (Prop Drilling) | With Context API |
|---|---|
| `<App user={u} /> → <Layout user={u} /> → <Profile user={u} />` | `<Profile />` reads `user` directly from context |
| Every middle component must "know about" the prop | Intermediate components are unaware of the data |
| Refactoring breaks multiple files | Context value is changed in one provider |

**Why it's better:**  
Context is ideal for **low-frequency updates** of truly global data (logged-in user, language, theme). It eliminates the coupling between intermediate components and data they don't use.

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Context API Applies |
|---|---|
| **Authentication** | `AuthContext` stores the logged-in user; any component (navbar, profile, settings) accesses it directly |
| **Internationalization (i18n)** | `LanguageContext` provides the current locale and translation function app-wide |
| **Shopping cart** | `CartContext` exposes cart items and `addToCart()` / `removeFromCart()` to any component |
| **Feature flags** | `FeatureFlagContext` wraps the app; components check `if (flags.newDashboard)` |
| **API base URL** | `ConfigContext` provides environment-specific config (API URL, app version) globally |
