'use client'
import Image from 'next/image'
import React from 'react'
import shoe from '@/assets/images/brands/nike.webp'
import { RxCross2 } from "react-icons/rx";
import { cartItem, deleteCartItem, updateAmount } from '@/lib/store/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks/hooks';
export default function CartItem({cartItem}:{cartItem:cartItem}) {
    const dispatch = useAppDispatch()
    function deleteItem(){
        dispatch(deleteCartItem({id:cartItem?.cart_id}))
    }

    function updateAmountStatus(status:boolean=false){
        dispatch(updateAmount({cart_id:cartItem?.cart_id,status:status}))
    }
  return (
    <div className='w-full h-32 flex  gap-2 relative'>
        <div className='w-[40%] bg-gray-200 h-full flex justify-center place-items-center'>
            <Image src={cartItem?.image} alt='' width={100} height={100} />
        </div>
        <div className='flex-grow py-2'>
            <h2>{cartItem?.name}</h2>
            <h1 className='text-sm font-light text-slate-600'>Product Id: {cartItem?.primary_id}</h1>
            <h1 className='text-sm font-light text-slate-600'>Size: {cartItem?.size}</h1>
            <div className='pt-4 flex justify-between'>
                <div>
                    <div className='text-sm flex gap-3'>
                        <span onClick={()=>updateAmountStatus()} className='cursor-pointer'>-</span>
                        <span>{cartItem?.amount}</span>
                        <span onClick={()=>updateAmountStatus(true)} className=' cursor-pointer'>+</span>
                    </div>
                </div>
                <span>${cartItem?.price*(cartItem?.amount||1)}</span>
            </div>
        </div>
        <div onClick={deleteItem} className=' absolute top-5 right-0 cursor-pointer'>
            <RxCross2/>
        </div>  
    </div>
  )
}
