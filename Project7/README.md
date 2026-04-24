# Project 7 — Todo App (Context API + localStorage)

## 📌 What is Implemented

A **fully-featured Todo application** with persistent storage using Context API and `localStorage`:

- **Add** a new todo item via `TodoForm`
- **Edit** an existing todo inline
- **Delete** a todo item
- **Toggle completion** — marks a todo as done/undone
- **Persistent storage** — todos are saved to `localStorage` and restored on page reload
- `TodoProvider` context distributes `todos`, `addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete` to all components

```jsx
// Persist to localStorage whenever todos change
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

// Load from localStorage on first mount
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))
  if (todos && todos.length > 0) setTodos(todos)
}, [])
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice 1: **Context API for Shared Feature State**
All CRUD operations (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`) are defined once in `App.jsx` and exposed through `TodoProvider`. Both `TodoForm` and `TodoItem` consume them without receiving any props from parent components.

### Practice 2: **Dual `useEffect` Pattern for localStorage Sync**

| Hook | Purpose |
|---|---|
| `useEffect(fn, [])` | Runs once on mount — loads saved todos from localStorage |
| `useEffect(fn, [todos])` | Runs every time todos change — saves the latest todos |

This is better than saving in the event handler because:
- It catches all state changes, even those not triggered by user interaction
- The serialization logic is in one place
- The component logic (CRUD functions) stays clean and focused

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How Context + localStorage Sync Applies |
|---|---|
| **Shopping cart persistence** | Cart items survive page refreshes — read on mount, write on every change |
| **User preferences** | Font size, language, or layout saved locally and applied on next visit |
| **Draft saving** | A blog editor saves draft content to localStorage every few seconds |
| **Multi-step form state** | Form progress is saved so users can resume after closing the tab |
| **Game progress** | Game state (score, level) persists between sessions without a backend |
