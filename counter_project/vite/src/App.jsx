import { useState } from 'react'

function App() {

  // useState(0) sets the initial counter value to 0
  // counter    -> holds the current value
  // setCounter -> function used to update the counter value
  const [counter, setCounter] = useState(0)

  // This function runs when the "Add value" button is clicked
  const addvalue = () => {
    if (counter < 20) {
      // counter is less than 20, so we can increase it by 1
      setCounter(counter + 1)
    } else {
      // counter has reached 20, so we do not increase it further
      setCounter(counter)
    }
  }

  // This function runs when the "Remove value" button is clicked
  const removevalue = () => {
    if (counter > 0) {
      // counter is greater than 0, so we can decrease it by 1
      setCounter(counter - 1)
    } else {
      // counter has reached 0, so we do not decrease it further
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>React Counter</h1>

      {/* Shows the current value of the counter on screen */}
      <h2>Counter Value: {counter}</h2>

      {/* Clicking this button calls addvalue to increase the counter */}
      <button onClick={addvalue}>Add value</button>

      <br />

      {/* Clicking this button calls removevalue to decrease the counter */}
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
