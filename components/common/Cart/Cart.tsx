'use client'
import React, { useEffect, useState } from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import CartItem from './CartItem'
import { useAppSelector } from '@/lib/hooks/hooks'
import { cartItem as cartType } from '@/lib/store/features/cartSlice'
import Link from 'next/link'

export const priceCalculate = (cartData:cartType[])=>{
    if(cartData?.length){
        let price = 0
        for(let i of cartData){
            price+=i.price*i.amount
        }
        return price
    }
   
}

export default function Cart() {
    const [open,setOpen]=useState(false)
    const [hydred,setHydred]=useState(false)
    useEffect(()=>{
        setHydred(true)
    },[])
    const cartData = useAppSelector(state=>state.cartReduicer.cart)
    const arr = cartData?.map(item=>(
        <CartItem cartItem={item} key={item?.cart_id}/>
    ))
    const [tempPrice,setTempPrice]=useState(priceCalculate(cartData))
    useEffect(()=>{
        setTempPrice(priceCalculate(cartData))
    },[cartData])
  return (
    <div className='px-4'>
      <button onClick={()=>setOpen(!open)} className='text-xl'>
          <LuShoppingCart/>
    </button>
    <div className={`fixed z-[100] ${open?"pointer-events-auto":"pointer-events-none"} z-50 top-0 left-0 w-full h-screen flex justify-end`}>
        <div onClick={()=>setOpen(!open)} className={`absolute ${open?'opacity-35':'opacity-0'} transition-all duration-500 w-full h-full cursor-pointer bg-black  top-0 left-0 z-0`}>

        </div>
        <div className={` relative ${open?"translate-x-0":"translate-x-full"} top-0 delay-300 right-0 h-screen lg:w-[30%] md:w-[50%] w-[80%] bg-white flex transition-all duration-500 flex-col justify-between place-items-center`}>
            <div className="header px-5 py-6 bg-gray-100 w-full font-light">
                Shoping Bag (0)
            </div>
            { hydred && <div className='flex-grow flex flex-col gap-2 w-full p-5 overflow-y-scroll'>
                {arr}
            </div>}
            <div className='w-full px-5 pb-6 '>
                <div className='flex justify-between w-full py-3 border-t'>
                    <span>SUBTOTAL :</span>
                    <span>${tempPrice}</span>
                </div>
                <div>
                    <Link onClick={()=>setOpen(!open)} href={'/view-cart'} className=' flex justify-center font-light bg-slate-200 w-full py-2'>View Cart</Link>
                    <Link onClick={()=>setOpen(!open)} href={'/checkout'}  className=' flex justify-center font-light bg-slate-600 text-white w-full py-2 my-2'>Checkout</Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
