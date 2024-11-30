'use client'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
function ColorBox({color,className}:{color:string,className:string}){
  const [clicked,setClick]=useState(false)
return (
  <div className='flex flex-col justify-center place-items-center gap-1 cursor-pointer'> 
      <div className={className} onClick={()=>setClick(!clicked)}>
        {clicked?<FaCheck/>:""}
      </div>
      <span className='text-sm font-extralight'>{color}</span>
      </div>
)
}
export default function Colors() {
  return (
    <ul className="ps-8 pt-1 space-y-1">
    <li className='grid grid-cols-3'>
      <ColorBox color='Blue' className=' flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-blue-500 rounded-full'/>
      <ColorBox color='Red' className='flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-red-500 rounded-full'/>
      <ColorBox color='White' className='flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-gray-100 rounded-full'/>
      <ColorBox color='Black' className='flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-black rounded-full'/>
      <ColorBox color='Green' className=' flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-green-500 rounded-full'/>
      <ColorBox color='Brown' className=' flex justify-center text-white place-items-center size-7 m-0 p-0 leading-none bg-orange-700 rounded-full'/>
    </li>
    </ul>
  )
}
