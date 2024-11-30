'use client'
import React, { useState } from 'react'
import pic from '@/assets/images/brands/nike.webp'
import pic2 from '@/assets/images/brands/addidas.webp'
import pic3 from '@/assets/images/brands/convarse.webp'
import pic4 from '@/assets/images/brands/bata.webp'
import Image from 'next/image'
import Colors from './ColorBox'
import { useRouter } from 'next/navigation'
export interface productCard{
    image:any,
    name:string,
    sale?:number,
    price:number,
    colors?:string,
    primary_id?:number,
    gender?:string,
    size?:string,
    brand?:string
}
export const saleCalculate= (price:number,sale:number=0)=>{
    const cal = price*(sale/100)
    return Math.floor(price-cal)
}


export default function ProductCard({product}:{product:productCard}) {
    const [image,setImage]=useState(product?.image||pic)
    const saleprice = saleCalculate(product?.price,product?.sale)
    const colors = product?.colors?.split(",")
   const router = useRouter()
    
   const clicked = () =>{
    router.push(`/products/${product?.primary_id}`)
   }
  return (
    <div onClick={clicked} className="relative transition-all duration-300 transform cursor-pointer flex w-full  flex-col overflow-hidden group  bg-white ">
  <div
    className="relative mt-3 bg-zinc-100 flex justify-center place-items-center h-60 overflow-hidden "
   
  >
    <Image
      className=" w-[70%]"
      src={image || pic}
      alt="product image"
      width={1000}
      height={1000}
    />
   {product?.sale? <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
      {product?.sale}% OFF
    </span>:""}
  </div>
  { colors?.length && colors[0]!==''?<div className={`mt-2  gap-3 h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100 ${!colors?.length?"hidden":"flex"}`}>
    {
        colors?.map(item=>(
            <Colors image={item} key={Math.random()} setImage={setImage}/>
        ))
    }
  </div>:""}
  <div className="mt-4 pb-5">
    <a href="#">
      <h5 className="text-xl tracking-tight text-slate-900">
        {product?.name}
      </h5>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${saleprice}</span>
        {product?.sale?<span className="text-sm text-slate-900 line-through">${product?.price}</span>:""}
      </p>
      <div className="flex items-center">
       
        
        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
          5.0
        </span>
      </div>
    </div>

  </div>
</div>

  )
}
