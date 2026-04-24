# Project 4 — React Router DOM (Multi-Page SPA)

## 📌 What is Implemented

A **multi-page Single Page Application (SPA)** using `react-router-dom` v6 with:

- **Shared layout** (`Layout.jsx`) with `<Outlet />` — Header and Footer persist across all pages
- **Pages:** Home, About, Contact Us, User (dynamic), GitHub Profile
- **Dynamic route** — `/user/:userid` extracts the user ID from the URL with `useParams()`
- **GitHub API with Route Loader** — The `/git-hub` route pre-fetches GitHub profile data using a `loader` function *before* the component renders
- `<NavLink>` for active-link highlighting in the navigation bar

```jsx
// main.jsx
const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,      // Header + Outlet + Footer
  children: [
    { path: '', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'user/:userid', element: <User /> },
    { path: 'git-hub', loader: githubInfo, element: <Github /> }
  ]
}])
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice 1: **Nested Routes with Shared Layout**
Instead of repeating the `<Header>` and `<Footer>` in every page component, a shared `Layout` component wraps all child routes via `<Outlet />`.

| Without Nested Routes | With Nested Routes + Outlet |
|---|---|
| Header/Footer duplicated in every page | Defined once in Layout |
| Route changes unmount/remount header | Header stays mounted — no flicker |
| Hard to manage shared state | Layout can pass context down |

### Practice 2: **React Router Loaders — Data Before Render**
The GitHub page uses a `loader` function that fetches data *before* the route component mounts. The component reads it with `useLoaderData()` — no loading spinner needed.

```js
export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/Challa-pranavchandan')
  return response.json()
}
```

This is better than `useEffect` + loading state because the component receives data **already loaded**, eliminating the "flash of empty content."

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How React Router Applies |
|---|---|
| **E-commerce site** | `/products/:id` loads product data before the product page renders |
| **Admin dashboards** | Shared sidebar/topbar in a layout; child routes render the content area |
| **Blog platform** | `/posts/:slug` uses a loader to fetch the post from a CMS before rendering |
| **Auth-protected routes** | A loader checks the session and redirects to `/login` if not authenticated |
| **Breadcrumbs** | Nested routes provide the URL structure needed to auto-generate breadcrumbs |
