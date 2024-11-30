'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { setDashboard } from '@/lib/store/features/cartSlice'
import { link } from 'fs'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SideBar() {
    const state = useAppSelector(state=>state.cartReduicer.dashboard)
    const dispatch = useAppDispatch()
    const links=[
        {
            title:"Dasboard",
            link:""
        },{
            title:"Orders",
            link:"/orders",
        },
        {
            title:"Personal Details",
            link:"/details"
        },{
            title:"Wishlist",
            link:"/wishlist"
        }
    ].map(item=>(
<Link href={`/dashboard${item.link}`} onClick={()=>dispatch(setDashboard())} key={item.link} className='w-full py-2 px-2 border block font-light '>{item.title}</Link>
    ))

  return (
    <>
    <div onClick={()=>dispatch(setDashboard())} className={`fixed md:hidden ${state?'opacity-35 pointer-events-auto':"opacity-0 pointer-events-none"} block cursor-pointer z-40 w-full h-screen bg-black top-0 left-0 `}/>
    <div className={`md:w-[20%] py-11 ${state?'translate-x-0':'-translate-x-full'} md:translate-x-0 transition-all duration-300 md:py-0 px-3 md:px-0 w-[80%] top-0 left-0 z-50 md:z-0
     fixed md:relative bg-white flex flex-col gap-3 h-screen p-2`}>
     {links}
    </div>
    </>
    
  )
}
