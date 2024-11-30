'use client'
import { productCard } from '@/components/common/ProductCard'
import { setProductsDataAll } from '@/lib/store/features/cartSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Price() {
  const [range,setRange]=useState(0)
  const dispatch = useDispatch()
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
    .then(res=>res.json())
    .then(data=>{
      const tempData:productCard[] = data?.data
      const newArr =  tempData?.filter(item=>{
        if(item?.price<=range){
          return item
        }
      })
      dispatch(setProductsDataAll(newArr))
    })
  },[range])

  return (
    <div>
      <div className='flex justify-end'>
        <span>${range}</span>
      </div>
 <div className='px-3'>
      <>
  <label htmlFor="basic-range-slider-usage" className="sr-only">
    Example range
  </label>
  <input
  onChange={(e)=>setRange(parseInt(e.target.value))}
    type="range"
    min={0}
    max={1000}
    defaultValue={0}
    className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
  [&::-webkit-slider-thumb]:w-2.5
  [&::-webkit-slider-thumb]:h-2.5
  [&::-webkit-slider-thumb]:-mt-0.5
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:bg-white
  [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:transition-all
  [&::-webkit-slider-thumb]:duration-150
  [&::-webkit-slider-thumb]:ease-in-out
  [&::-webkit-slider-thumb]:

  [&::-moz-range-thumb]:w-2.5
  [&::-moz-range-thumb]:h-2.5
  [&::-moz-range-thumb]:appearance-none
  [&::-moz-range-thumb]:bg-white
  [&::-moz-range-thumb]:border-4
  [&::-moz-range-thumb]:border-blue-600
  [&::-moz-range-thumb]:rounded-full
  [&::-moz-range-thumb]:transition-all
  [&::-moz-range-thumb]:duration-150
  [&::-moz-range-thumb]:ease-in-out

  [&::-webkit-slider-runnable-track]:w-full
  [&::-webkit-slider-runnable-track]:h-2
  [&::-webkit-slider-runnable-track]:bg-gray-100
  [&::-webkit-slider-runnable-track]:rounded-full
  [&::-webkit-slider-runnable-track]:

  [&::-moz-range-track]:w-full
  [&::-moz-range-track]:h-2
  [&::-moz-range-track]:bg-gray-100
  [&::-moz-range-track]:rounded-full"
    id="basic-range-slider-usage"
    aria-orientation="horizontal"
  />
</>

    </div>
    </div>
   
  )
}
