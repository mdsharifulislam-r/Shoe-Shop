'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import shoe1 from '@/assets/images/hero/shoe5.webp'
import shoe2 from '@/assets/images/hero/shoe2.webp'
import { BsArrowRight } from "react-icons/bs";
import shoe3 from '@/assets/images/hero/shoe4.webp'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'
import { motion } from 'framer-motion'
import PopUp from './PopUp'
import { useAppSelector } from '@/lib/hooks/hooks'

const shoeData =[
  {
    img:shoe1,
    heading:"Nike S45",
    sub:"Shoe Next frame"
  },
  {
    img:shoe2,
    heading:"Puma 3St4",
    sub:"As Like You"
  },
  {
    img:shoe3,
    heading:"Fashion",
    sub:"New Fashion Here"
  },

]


export default function Hero() {
  const [Data,setData]=useState<{img:any,heading:string,sub:string}|undefined>(shoeData[0])
  const [amount,setAmount]=useState(0)
  const DivRef = useRef<HTMLImageElement |null>(null)
  function ChangeAmount(inc:boolean=false){
    
   
    
    if(amount==0 && inc==false){
      setAmount(shoeData?.length-1)
      setData(shoeData[amount])
      
      return
    }
    if(amount==shoeData?.length-1 && inc){
      setAmount(0)
      setData(shoeData[amount])
      
      return
    }
    setAmount(prev=>inc?prev+1:prev-1)
    setData(shoeData[amount])
    
   
  }
  const [adshowState,setAdShowState]=useState(true)
  const adshow = useAppSelector(state=>state.cartReduicer.isAdShow)
  useEffect(()=>{
    if(!adshow){
      setTimeout(() => {
        setAdShowState(adshow)
      }, 5000);
    }else{
      setAdShowState(adshow)
    }
   
   
  },[adshow])
  
  
  return (
    <div className='w-full  overflow-hidden min-h-screen transition-all duration-500  bg-[#E5E5E5] relative'>
      <div className="absolute transition-all duration-500 z-0 w-full h-full left-0 top-0 overflow-hidden">
        <Image  src={Data?.img} alt='' width={1000} className='  transition-all duration-500 opacity-15' height={1000}/>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.1)] z-[5] w-full h-full left-0 top-0">

      </div>
      <div className="container px-3 md:px-0 relative mx-auto w-full h-screen flex md:flex-row flex-col justify-center z-10 place-items-center">
        <div className="textBox md:w-1/2 w-full flex md:place-items-end flex-col">
        <div className='mb-14 flex flex-col '>
        <h1 className='uppercase md:text-[7rem] text-[5rem] md:leading-none font-bold  text-orange-500  drop-shadow-xl'>BOARING</h1>
        <h2 className='md:text-[5rem] text-5xl text-white md:mt-6  drop-shadow-xl'>SHOES?</h2>
        <div className='md:mt-7 mt-4 md:pl-2 '>
          <span className=' block'>For Exiting <span className='text-orange-500'>Collections</span></span>
          <Link href={"/shop"} className='px-5 w-fit py-2 bg-orange-500 text-white flex justify-center place-items-center gap-3 mt-3'><span>Shop Now</span> <span><BsArrowRight/></span></Link>
        </div>
        </div>
     
        </div>
        <div className="imageBox md:w-1/2 w-full transition-all duration-500  flex flex-col place-items-center justify-center">
          <Image   src={Data?.img} alt='' className='w-[80%] drop-shadow-2xl  transition-all duration-500 ' width={1000} height={1000}/>
          <div className='flex place-items-center gap-5 mt-5  justify-between'>
          <button onClick={()=>ChangeAmount()} className='text-4xl rounded-full text-white bg-orange-500 p-2'>
              <MdOutlineKeyboardArrowLeft/>
            </button>
            <div>
              <h1 className='text-orange-500 '>{Data?.heading}</h1>
              <p className='text-sm font-light'>{Data?.sub}</p>
            </div>
            <button onClick={()=>ChangeAmount(true)} className='text-4xl rounded-full text-white bg-orange-500 p-2'>
              <MdOutlineKeyboardArrowRight/>
            </button>
          </div>
        </div>
      </div>
      {typeof(adshowState)=='object' || !adshowState ? <PopUp/>:""}
    </div>
  )
}
