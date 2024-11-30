'use client'
import { useAppSelector } from '@/lib/hooks/hooks'
import React from 'react'
import { priceCalculate } from '../common/Cart/Cart'

export default function Details() {
    const cartData = useAppSelector(state=>state.cartReduicer.cart)
    const showData = cartData?.map(item=>(
        <li key={item.cart_id} className="flex flex-wrap gap-4 text-sm">
        {item.name} <span className="ml-auto font-bold">${item.price*item.amount}</span>
      </li>
    ))

  return (
    <div className="bg-white p-6 rounded-md max-lg:-order-1">
    <h3 className="text-lg font-bold text-gray-800">Summary</h3>
    <ul className="text-gray-800 mt-6 space-y-3">
        {showData}
      <li className="flex flex-wrap gap-4 text-sm">
        Sub total <span className="ml-auto font-bold">${priceCalculate(cartData)}</span>
      </li>
     
      <hr />
      <li className="flex flex-wrap gap-4 text-base font-bold">
        Total <span className="ml-auto">${priceCalculate(cartData)}</span>
      </li>
    </ul>
  </div>
  )
}
