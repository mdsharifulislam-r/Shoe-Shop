'use client'
import shoe from '@/assets/images/brands/bata.webp'
import Image from 'next/image'
import pic2 from '@/assets/images/brands/addidas.webp'
import pic3 from '@/assets/images/brands/convarse.webp'
import pic4 from '@/assets/images/brands/bata.webp'
import { useId, useState } from 'react'
import { productCard } from '../common/ProductCard'
export default function ImageBox({product}:{product:productCard}) {
    const colors = product?.colors?.split(",")
    const [tempImage,setTempImage]=useState(product?.image||shoe)
  return (
    <div className='md:w-1/2 w-full'>
      <div className="image w-full h-[70vh] bg-gray-200 flex justify-center place-items-center">
        <Image src={tempImage}  alt='shoe-image' className='w-[70%]' width={1000} height={1000}/>
      </div>
     { colors?.length && colors[0]!==''? <div key={useId()} className='flex gap-3 mt-4'>

        {
            colors?.map(item=>(
                <div key={useId()} onMouseOver={()=>setTempImage(item)} className=' size-24 cursor-pointer bg-slate-100 flex justify-center place-items-center'>
                    <Image width={1000} height={1000} className=' w-[70%]' src={item} key={Math.random()} alt=''/>
                </div>
            ))
        }
      </div>:""}
    </div>
  )
}
