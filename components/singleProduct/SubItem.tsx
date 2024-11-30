'use client'
import React, { useState } from 'react'
import Sizes from './Sizes'
import { productCard, saleCalculate } from '../common/ProductCard'
import { FaRegHeart } from 'react-icons/fa'
import { useAppDispatch } from '@/lib/hooks/hooks'
import { addCartItem, cartItem } from '@/lib/store/features/cartSlice'
import toast from 'react-hot-toast'

export default function SubItem({product}:{product:productCard}) {
    const [size,setSize]=useState(0)
    const dispatch = useAppDispatch()
    const placeHolder = ()=>{
        const item:cartItem={
            primary_id:product?.primary_id,
            price:saleCalculate(product?.price,product?.sale),
            image:product?.image,
            name:product?.name,
            size:size,
            amount:1

        }
        dispatch(addCartItem(item))
        toast.success('Item add to bag')
    }
  return (
    <div>
       <Sizes sizesk={product?.size||""} setData={setSize}/>
      <div className='pt-5'>
        <button onClick={placeHolder} className='md:w-[60%] w-full py-4 bg-slate-800 text-white rounded-full'>Add To Cart</button>
        <button className='md:w-[60%] w-full py-4 border-2 border-slate-800 text-slate-800 mt-4 rounded-full flex place-items-center gap-4 justify-center'>Favourite <span><FaRegHeart/></span></button>
        
      </div>
    </div>
  )
}
