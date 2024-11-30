import React from 'react'
import menu1 from '@/assets/images/menu/menu.webp'
import Image from 'next/image'
import menu2 from '@/assets/images/menu/menu2.webp'
import menu3 from '@/assets/images/menu/menu3.webp'
function MenuCard({image}:{image:any}){
    return(
        <div className='w-full  h-[600px] relative group rounded-md overflow-hidden shadow-xl'>
            <Image src={image} alt='' width={1000} height={1000} className='  transition-all duration-500 group-hover:scale-105 absolute w-full h-full left-0 top-0 object-cover'/>
            <div className="absolute w-full h-full flex place-items-end pb-16 bg-[rgba(0,0,0,0.2)] pl-12 left-0 top-0">
                <button className='px-14 hover:bg-slate-800 hover:text-white transition-all duration-500 py-3 bg-white rounded-full text-slate-800'>Shop Now</button>
            </div>
        </div>
    )
}
export default function Menu() {
  return (
    <div className='w-full px-4 py-8'>
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10">
        <MenuCard image={menu1}/>
        <MenuCard image={menu2}/>
        <MenuCard image={menu3}/>
      </div>
    </div>
  )
}
