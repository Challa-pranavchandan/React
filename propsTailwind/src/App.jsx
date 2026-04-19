import Card from "./components/Card"

function App() {
  
let myObj ={
  username:"pranav",
  age:21
}
let newarr=[12,2,6]
  return (<>

     <Card Itemname="OG" price="20" id="1" img="https://images.pexels.com/photos/37078290/pexels-photo-37078290.jpeg" />
      <Card Itemname="Friends" price="50" id="2" img="https://images.pexels.com/photos/37078291/pexels-photo-37078291.jpeg"/>
  
  
  </>)
}

export default App
