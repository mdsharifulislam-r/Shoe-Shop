'use client'
import React, { useState } from 'react'

export default function Sizes({sizesk,setData}:{sizesk:string,setData:React.Dispatch<React.SetStateAction<number>>}) {
  const [size,setSize]=useState(0)
    const sizes = sizesk?.split(",").map(Number)
  return (
    <div className='md:w-[60%] w-full mt-11'>
        <span className='py-2 block'>Select Size</span>
        <div className='grid grid-cols-4 gap-4'>
        {sizes.map((item,index)=>(
        <div onClick={()=>{
          setSize(item)
          setData(item)
        }} className={`py-2 border ${item==size?"border-black":""} rounded-md flex justify-center place-items-center`} key={index}>
            {item}
        </div>
      ))
      }
        </div>
      
    </div>
  )
}
