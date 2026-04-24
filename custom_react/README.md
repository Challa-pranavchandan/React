# Custom React — Understanding the Virtual DOM

## 📌 What is Implemented

A **vanilla JavaScript implementation** of a minimal React-like renderer. This project manually builds what React does internally — it creates a DOM element from a plain JavaScript object (acting as a "virtual element") and injects it into the page.

```js
// A React-like element object
const reactElement = {
  type: 'a',
  props: { href: 'https://google.com', target: '_blank' },
  Children: 'Click me visit google'
}

// A custom renderer — like ReactDOM.render()
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.Children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement)
}
```

---

## 🧠 What Practice is Used & Why It is Better

### Practice: **Understanding React's Internals by Building from Scratch**

Instead of using a library, the element is represented as a **plain object** with `type`, `props`, and `Children` — the exact shape React uses internally for its Virtual DOM nodes (`React.createElement` returns this).

| Approach | Benefit |
|---|---|
| Manual DOM + object-based element | Understand what JSX compiles to |
| Custom render function | See how ReactDOM walks the tree and creates real DOM nodes |
| No magic/library | Deep understanding of "why React works the way it does" |

This is better than blindly using JSX because it teaches:
- What `React.createElement('a', { href: '...' }, 'Click me')` actually produces
- How React reconciles the virtual tree with the real DOM
- Why React needs `key` props, and what "diffing" means

---

## 🌍 Real-World Use Cases for This Concept

| Use Case | How This Concept Applies |
|---|---|
| **Server-Side Rendering (SSR)** | Frameworks like Next.js serialize React's virtual element tree to HTML strings on the server using the same object structure |
| **React Native** | Instead of calling `document.createElement`, React Native maps the virtual nodes to native iOS/Android views |
| **Custom renderers** | Libraries like `react-three-fiber` use custom renderers to map React elements to 3D scene graphs in Three.js |
| **Testing** | React Testing Library works by rendering the virtual tree into a lightweight DOM (jsdom), not a real browser DOM |
| **Preact** | A 3KB alternative to React — understands the same virtual element format, making migration easy |
