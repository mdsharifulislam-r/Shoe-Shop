'use client'
import { useAppDispatch } from '@/lib/hooks/hooks';
import { setDashboard } from '@/lib/store/features/cartSlice';
import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
export default function ButtonSection() {
    const dispatch = useAppDispatch()
  return (
    <div className='px-3 py-2 md:hidden block'>
        <button onClick={()=>dispatch(setDashboard())} className='flex place-items-center gap-1 px-3 py-1 border rounded-md'>
            <span><AiOutlineMenuUnfold/></span>
            <span>Menu</span>
        </button>
    </div>
  )
}
