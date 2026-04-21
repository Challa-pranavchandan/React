import UserContextProvider from "./context/UserContextProvider"
import Login from "../components/login"
import Profile from "../components/profile"
function App() {
  

  return (
   <UserContextProvider>
   <h1>Context api part 1</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
