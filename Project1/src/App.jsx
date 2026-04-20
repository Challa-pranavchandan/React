import { useState } from "react"


function App() {
  
   const [color,setColor] = useState("olive") 
     return (
    <>
     <div className='h-screen w-full '
     style={{backgroundColor : color}}
     >


      <div className="fixed flex bottom-10 inset-y-0 py-20 px-5 flex-wrap justify-between align-center">
       <div className="flex flex-col flex-wrap justify-between  gap-4 shadow-lg bg-white py-5 px-5 rounded-2xl ">
          
          
          <button  onClick={()=>setColor("red")}
                   className="outline-none px-1 py-4 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"red"}}
          > red</button>
           <button onClick={()=>setColor("black")} 
                   className="outline-none px-1 py-4 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"black"}}
          > black</button>
           <button onClick={()=>setColor("olive")} 
                   className="outline-none px-1 py-4 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"olive"}}
          > olive</button>
           <button onClick={()=>setColor("grey")} 
                   className="outline-none px-1 py-4 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"grey"}}
          > grey</button>
           <button onClick={()=>setColor("blue")} 
                   className="outline-none px-1 py-4 rounded-full text-white shadow-lg  "
                   style={{backgroundColor:"blue"}}
          > blue</button>
          


       </div>
      </div>
     </div>
    </>
  )
}

export default App
