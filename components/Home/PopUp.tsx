'use client'
import Image from 'next/image'
import React from 'react'
import pic from '@/assets/images/shopBySport/running.webp'
import { RxCross1 } from 'react-icons/rx'
import { useAppDispatch } from '@/lib/hooks/hooks'
import { closeAdShow } from '@/lib/store/features/cartSlice'
export default function PopUp() {
    const dispatch = useAppDispatch()
    const func = () =>{
        dispatch(closeAdShow())
    }
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-[100] flex justify-center place-items-center overflow-hidden'>
      <div onClick={func} className="absolute w-full h-full cursor-pointer bg-black opacity-30 top-0 left-0 z-20"></div>
      <div className="win md:w-[500px] w-[80%] md:h-80 py-3 md:py-0 flex-col md:flex-row flex place-items-center gap-3 rounded-md bg-white shadow-lg z-30 overflow-hidden relative">
        <div className="image w-1/2 h-full relative">
            <Image src={pic} alt='' className=' absolute w-full h-full object-cover top-0 left-0' width={500} height={500}/>
        </div>
        <div className='flex flex-col justify-center place-items-center '>
            <h1 className='text-xl text-orange-500'>Newsletter.</h1>
            <p className='text-sm font-light text-slate-600 text-center'>Subscribe the BlueBerry to get in touch and get the future update.</p>
            <input type="text" className='w-[90%] rounded-md my-4 border px-3 py-2' placeholder='Subscribe' />
            <button className='text-white bg-orange-500 w-[40%] py-2 rounded-md'>Subscribe</button>
        </div>
        <div className="absolute top-5 right-5 cursor-pointer" onClick={func}>
        <RxCross1/>
        </div>
      </div>
     
    </div>
  )
}
