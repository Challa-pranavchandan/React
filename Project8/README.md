# Project 8 — Redux Toolkit Todo App

## 📌 What is Implemented

A **Todo application** built using **Redux Toolkit (RTK)** for centralized state management:

- **Redux store** configured with `configureStore()` in `src/app/store.js`
- **Todo slice** (`todoSlice.js`) — manages a list of todos with reducers:
  - `addTodo` — adds a new todo with a unique `nanoid()` ID
  - `removeTodo` — removes a todo by ID
- `AddTodo` component — dispatch `addTodo` action
- `Todos` component — displays the todo list from the Redux store
- `main.jsx` wraps the app in `<Provider store={store}>` to make the store available everywhere

```js
// todoSlice.js
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [{ id: 1, text: "hello" }] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload.text })
    },
    removeTodo: (state, action) => {
      state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **Redux Toolkit — Predictable, Scalable State Management**

RTK is the **official, opinionated Redux toolset** that eliminates the boilerplate of classic Redux.

| Classic Redux | Redux Toolkit |
|---|---|
| Write action type constants manually | Slice generates them automatically |
| Write action creators separately | Exported directly from `createSlice` |
| Immutable updates with spread operators | RTK uses Immer — write mutating code safely |
| Multiple files for one feature | One `createSlice` file handles everything |
| `createReducer`, `createAction` manually | All in one `createSlice` call |

**Why RTK is better than Context for complex state:**  
- Redux DevTools for time-travel debugging
- All state changes are traceable actions with clear labels
- State is always predictable — same action + same state = same result
- Scales to hundreds of components without performance issues

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Redux Toolkit Applies |
|---|---|
| **E-commerce cart + inventory** | Multiple slices (`cartSlice`, `productSlice`, `userSlice`) managed independently |
| **Real-time notifications** | `notificationSlice` with `addNotification` / `dismissNotification` actions |
| **Undo/Redo** | Redux's action history enables undo stacks (used in Figma-like editors) |
| **Server state caching** | RTK Query (built into RTK) auto-caches API responses and invalidates stale data |
| **Multi-tab sync** | Redux state can be broadcast across browser tabs using middleware |
