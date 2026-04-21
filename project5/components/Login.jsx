import React,{useState,useContext} from 'react'
import UserContext from '../src/context/UserContext'

function Login() {
    const [username,setUsername]=useState('')

    const {setuser}= useContext(UserContext)

    const [password,setPassword]=useState('')

   const handlesubmit=(e)=>{
      e.preventDefault()
      setuser({username,password})

   }


  return (<>
    <div>
    <h2>Login</h2>
    <input 
    type='text' 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='username'/>
    <input 
    type='text' 
    value={password} 
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='pasword'/>
    
    <button onClick={handlesubmit}>Submit</button>

    </div>
</>
  )
}

export default Login