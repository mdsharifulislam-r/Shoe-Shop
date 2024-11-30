import Image from 'next/image'
import React from 'react'
import shoe from '@/assets/images/hero/shoe3.webp'
import { BsArrowRight } from "react-icons/bs";
export default function Banner() {
  return (
    <div className='w-full  bg-red-500 mt-16 py-14 md:py-0'>
      <div className="container mx-auto flex justify-evenly place-items-center">
        <div className="text w-1/2 flex justify-center flex-col place-items-center">
        <h1 className='md:text-[9rem] m-0 p-0 md:leading-none text-5xl font-bold italic text-white drop-shadow-2xl'>Fashion</h1>
        <span className='md:text-4xl text-white font-thin italic'>New Collection Is Here</span>
        <button className='flex place-items-center gap-2 border-white border px-8 text-xs md:text-base py-3 my-5 transition-all duration-500 hover:bg-white hover:text-red-500 text-white -skew-x-12'>Explore Now <span><BsArrowRight/></span></button>
        </div>
        <div className="image w-1/2">
            <Image src={shoe} alt='' className='w-[90%]' width={1000} height={1000}/>
        </div>
      </div>
    </div>
  )
}
