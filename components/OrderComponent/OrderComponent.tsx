'use client'
import { useAppSelector } from '@/lib/hooks/hooks'
import { orderType } from '../Checkout/MainContainer'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'
function OrderItem({order}:{order:orderType}){
    return (
        <tr className="flex w-full mb-2 border-y text-sm md:text-base">
          <td className="p-4 w-1/4">#{order?.primary_id}</td>
          <td className="p-4 w-1/4">{order?.order_date}</td>
          <td className="p-4 w-1/4">{order?.status}</td>
          <td className="p-4 w-1/4">${order?.net_price} for {order?.products?.split(",")?.length} items</td>
          <td className="p-4 w-1/4">
          <Link href={`/dashboard/orders/${order?.primary_id}`} className='px-3 py-2 bg-black text-white'>View</Link>
          </td>
        </tr>
    )
}
export default function OrderComponent() {
    const user = useAppSelector(state=>state.cartReduicer.user)
    
    
    const [orders,setOrders]=useState<orderType[]>([])
    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders?user_id=${user?.primary_id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
            if(data?.success){
                setOrders(data?.data)
            }else{
                toast.error(data?.message)
            }
        })
    },[])
    const showorders = orders?.map(item=>(
        <OrderItem order={item} key={item.primary_id}/>
    ))
  return (
    <div className="container">

    <table className="text-left w-full border">
      <thead className="bg-slate-300 flex text-black font-light w-full">
        <tr className="flex w-full mb-4 text-sm md:text-base">
          <th className="p-4 w-1/4">Order</th>
          <th className="p-4 w-1/4">Date</th>
          <th className="p-4 w-1/4">Status</th>
          <th className="p-4 w-1/4">Total</th>
          <th className="p-4 w-1/4">Actions</th>
        </tr>
      </thead>
      {/* Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! */}
      <tbody
        className="bg-grey-light flex flex-col items-center  overflow-y-scroll w-full"
        style={{ height: "50vh" }}
      >
        
     
        {showorders}
      </tbody>
    </table>
  </div>
  
  )
}
