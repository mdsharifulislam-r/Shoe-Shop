import Image, { StaticImageData } from 'next/image'
import React from 'react'
import shoe from '@/assets/images/brands/addidas.webp'
export default function ColorBox({image,setImage}:{image:any,setImage:React.Dispatch<React.SetStateAction<StaticImageData>>}) {
  return (
    <div onMouseOver={()=>setImage(image)} className=' cursor-pointer size-14 bg-zinc-100 flex justify-center place-items-center'>
      <Image className='w-[70%]' src={image || shoe } alt='color' width={100} height={100}/>
    </div>
  )
}
