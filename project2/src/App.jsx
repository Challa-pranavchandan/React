import { useState, useCallback, useEffect ,useRef} from "react"


function App() {
   
        const [length,setlength]=useState(8)
    const [num,setnum]=useState(true)
    const [char,setchar]=useState(false)
    const [password,setpassword]=useState("")
    const [isClicked, setIsClicked] = useState(false)

  const passwordref =useRef()

    const passwordGenerator =useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(num){str+="0123456789"}
      if(char){str+="!@#$%^&*()~`"}
      for (let i = 1; i <= length; i++) {
        let char =Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
      }
      setpassword(pass)


    },[length,num,char,setpassword])


    const copytoclipboard = useCallback(()=>{
      
        window.navigator.clipboard.writeText(password)
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 300)
    },[password])

   useEffect(()=>{passwordGenerator()},[length,num,char,passwordGenerator])
  
     return (
    <>
     <div className='h-screen w-full justify-center items-center '
     style={{backgroundColor : "black"}}
     >


      <div className=" flex flex-col  fixed  w-full rounded-full top-50  py-20  mt-8 px-5 bg-amber-100  justify-center items-center">
      <span><h1 className="text-orange-400 text-4xl">Password Generator</h1></span>
      <div> 
        <input 
        type="text" 
        value={password}
        className="w-xl p-5 rounded-bl-4xl rounded-tl-4xl bg-amber-50"
        placeholder="password"
        readOnly
        ref={passwordref}
        ></input>
        <button className={`rounded-br-4xl rounded-tr-4xl text-l p-5 transition-all duration-75 ${isClicked ? 'bg-gray-700 scale-95' : 'bg-blue-300 hover:bg-blue-400'}`}
                 onClick={copytoclipboard}>copy</button>
      </div>
      <div className="text-orange-500 justify-between p-5 rounded-4xl bg-amber-300  items-center flex mt-5 text-xl">
        <input 
        type="range"
        min={7}
        max={50}
        value={length}
        className="cursor-pointer mx-2"
        onChange={(e)=>{setlength(e.target.value)}}
        /><label>length:{length}</label>


        <input
            type="checkbox"
            defaultChecked={num}
            id="num input"
            onChange={()=>{
                setnum((prev)=>!prev);
                   }}
        /><label>Num</label>

        <input
            type="checkbox"
            defaultChecked={char}
            id="char input"
            onChange={()=>{
                setchar((prev)=>!prev);
                   }}
        /><label>Char</label>
        
      </div>
      
    
      </div>
     </div>
    </>
  )
}

export default App
