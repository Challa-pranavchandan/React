import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  /* const [data, setData] = useState([])

   useEffect(() => {
      fetch('https://api.github.com/users/Challa-pranavchandan')
         .then(response => response.json())
         .then(data => {
            console.log(data);
            setData(data)
         })
   }, [])*/
   
  const data = useLoaderData()


   return (

      <div className='bg-black   justify-center h-100 rounded-full flex flex-col  text-white text-shadow-amber-100  items-center'>
         <h1 className='text-5xl'>Github</h1>
         <img src={data.avatar_url} className='h-50  rounded-3xl w-50'></img>
         <h2>followers: {data.followers}</h2>



      </div>


   )
}

export default Github

export const githubInfo = async ()=>{
    const response = await  fetch('https://api.github.com/users/Challa-pranavchandan')
    return response.json()
}