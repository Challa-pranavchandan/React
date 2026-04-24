# ⚛️ React — Best Practices & Core Concepts

> A personal learning workspace covering the most important React concepts, patterns, and best practices — built project by project.

---

## 📁 What's in This Folder

Each subfolder is an independent React project focused on one or more core concepts.
Every project has its own `README.md` with: what is implemented, why the practice is better, and real-world use cases.

| Folder | Topic | Key Concept |
|---|---|---|
| [`custom_react`](./custom_react/README.md) | How React works under the hood | Virtual DOM, custom renderer |
| [`basic`](./basic/README.md) | First React app | Create React App, JSX, component structure |
| [`vite`](./vite/README.md) | Modern build tooling | Vite vs CRA, HMR, ESM |
| [`counter_project`](./counter_project/README.md) | State basics with bounds | `useState`, controlled state updates |
| [`Project1`](./Project1/README.md) | Dynamic background color | `useState` + inline dynamic styles |
| [`project2`](./project2/README.md) | Password generator | `useCallback`, `useEffect`, `useRef` |
| [`Project3`](./Project3/README.md) | Currency converter | Custom hooks, reusable components |
| [`Project4`](./Project4/README.md) | Multi-page SPA | React Router v6, loaders, nested routes |
| [`project5`](./project5/README.md) | Context API (basic) | `createContext`, `useContext`, providers |
| [`Project6`](./Project6/README.md) | Dark / Light theme toggle | Context API + `useEffect` DOM sync |
| [`Project7`](./Project7/README.md) | Todo app with persistence | Context + `localStorage` + dual `useEffect` |
| [`Project8`](./Project8/README.md) | Redux Toolkit todo app | `createSlice`, `configureStore`, RTK |
| [`propsTailwind`](./propsTailwind/README.md) | Reusable components | Props, DRY principle, Tailwind CSS |

---

## ✅ What I Know (Concepts Practiced)

These are the React concepts I have implemented and understand through real projects:

### 🔵 Core React
- [x] **JSX** — Writing HTML-like syntax in JavaScript
- [x] **Components** — Functional components, structuring a UI into reusable pieces
- [x] **Props** — Passing data from parent to child, making components reusable
- [x] **`useState`** — Managing local component state, controlled inputs, bounded values
- [x] **`useEffect`** — Running side effects (API calls, DOM mutations, localStorage sync)
- [x] **`useCallback`** — Memoizing functions to avoid unnecessary re-creation
- [x] **`useRef`** — Accessing DOM elements directly without triggering re-renders
- [x] **Conditional Rendering** — Showing/hiding UI based on state
- [x] **List Rendering** — Using `.map()` to render dynamic lists with `key` props

### 🟣 Component Architecture
- [x] **Custom Hooks** — Extracting reusable logic (`useCurrencyInfo`)
- [x] **Context API** — Global state without prop drilling (`createContext`, `useContext`, `Provider`)
- [x] **Shared Layout with Outlet** — Persistent Header/Footer using React Router's `<Outlet />`
- [x] **Index Files** — Barrel exports (`components/index.js`) for cleaner imports

### 🟠 State Management
- [x] **Local State** — `useState` for component-level state
- [x] **Context-based State** — Shared state via `createContext` + Provider
- [x] **Redux Toolkit** — `createSlice`, `configureStore`, `addTodo`, `removeTodo`, `nanoid`

### 🟢 Routing
- [x] **React Router v6** — `createBrowserRouter`, `RouterProvider`
- [x] **Nested Routes** — Child routes rendered inside a Layout via `<Outlet />`
- [x] **Dynamic Routes** — `/user/:userid` with `useParams()`
- [x] **Route Loaders** — Pre-fetching data before a route renders, `useLoaderData()`
- [x] **`NavLink`** — Active link highlighting in navigation

### 🟡 Styling
- [x] **Tailwind CSS** — Utility-first styling, `dark:` variants for dark mode
- [x] **Inline Dynamic Styles** — `style={{ backgroundColor: color }}` for runtime-controlled styles
- [x] **Glassmorphism** — `backdrop-blur`, semi-transparent backgrounds

### ⚙️ Tooling & Setup
- [x] **Create React App (CRA)** — Understanding the classic setup
- [x] **Vite** — Modern, fast dev server with native ESM
- [x] **Virtual DOM (from scratch)** — How React internally represents and renders UI

---

## 📚 What is Left to Learn

These are the important React and ecosystem concepts not yet covered in this workspace:

### 🔴 Hooks (Advanced)
- [ ] **`useMemo`** — Memoizing expensive computed values (like `useCallback` but for values)
- [ ] **`useReducer`** — Complex local state logic with a reducer (like Redux but local)
- [ ] **`useLayoutEffect`** — Like `useEffect` but fires synchronously before browser paint (for DOM measurements)
- [ ] **`useTransition`** — Mark state updates as non-urgent for smoother UI during heavy renders
- [ ] **`useDeferredValue`** — Defer updating a value until the browser is idle

### 🔴 Performance Optimization
- [ ] **`React.memo`** — Prevent child component re-renders when props haven't changed
- [ ] **Code Splitting** — `React.lazy()` + `<Suspense>` to load components on demand
- [ ] **Virtualization** — `react-window` / `react-virtual` for rendering large lists efficiently
- [ ] **Bundle Analysis** — Identifying and reducing large dependencies with Rollup/Vite analyzer

### 🔴 Data Fetching (Modern Patterns)
- [ ] **RTK Query** — Built-in data fetching + caching in Redux Toolkit (replaces manual `useEffect` + `fetch`)
- [ ] **React Query (TanStack Query)** — Server-state management: caching, background refetching, pagination
- [ ] **SWR** — Lightweight alternative to React Query by Vercel

### 🔴 Forms
- [ ] **React Hook Form** — Performant, easy form validation without re-renders on every keystroke
- [ ] **Zod / Yup** — Schema-based form validation with TypeScript support

### 🔴 TypeScript with React
- [ ] **Typing Props** — `interface Props { name: string }` and `FC<Props>`
- [ ] **Typing State & Hooks** — `useState<User | null>(null)`, typed `useRef`
- [ ] **Typing Redux Slices** — Typed `RootState`, `AppDispatch`, `PayloadAction`
- [ ] **Typing Context** — Generic `createContext<ThemeContextType>()` patterns

### 🔴 Testing
- [ ] **React Testing Library** — `render`, `screen`, `fireEvent`, `userEvent`
- [ ] **Jest** — Unit testing reducers, custom hooks, utility functions
- [ ] **Vitest** — Vite-native test runner (faster alternative to Jest in Vite projects)
- [ ] **MSW (Mock Service Worker)** — Mocking API calls in tests without changing application code

### 🔴 Advanced Patterns
- [ ] **Compound Components** — Components that share state implicitly (e.g., `<Select>` + `<Option>`)
- [ ] **Render Props** — Passing a render function as a prop for flexible composition
- [ ] **Higher-Order Components (HOC)** — Wrapping a component to inject behavior
- [ ] **Portals** — Rendering modals/tooltips outside the component tree with `ReactDOM.createPortal`
- [ ] **Error Boundaries** — Class components that catch rendering errors and show fallback UI
- [ ] **Forwarding Refs** — `React.forwardRef` to expose a child's DOM node to a parent

### 🔴 Full-Stack / Meta-Frameworks
- [ ] **Next.js** — File-based routing, SSR, SSG, API routes, App Router, Server Components
- [ ] **Remix** — Full-stack React with loaders/actions at the route level
- [ ] **Server Components (RSC)** — Zero-bundle components that render on the server

### 🔴 Ecosystem & DevOps
- [ ] **Storybook** — Develop and document components in isolation
- [ ] **Zustand** — Lightweight, minimal state management alternative to Redux
- [ ] **Jotai / Recoil** — Atomic state management for fine-grained reactivity
- [ ] **Deployment** — Vercel, Netlify, or AWS Amplify for production React apps
- [ ] **PWA** — Progressive Web App, service workers, offline support

---

## 🗺️ Learning Path (Recommended Order)

```
JSX & Components → Props → useState → useEffect
    → useCallback / useRef → Custom Hooks
        → Context API → React Router v6
            → Redux Toolkit → TypeScript
                → React Query / RTK Query
                    → Testing (RTL + Jest)
                        → Next.js / Server Components
```

---

> **Built by:** Challa Pranav Chandan  
> **Last Updated:** April 2026  
> *"The best way to learn React is to build projects. Each folder here is a lesson."*
