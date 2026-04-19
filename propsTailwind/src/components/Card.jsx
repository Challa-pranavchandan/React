import React from 'react'

function Card({Itemname,price,id,img}) {
  
  return (<>
  <div className="w-60 flex m-10 flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src={img}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold ">{Itemname}</h1>
          <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>#{id}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  </>
      
  )
}

export default Card