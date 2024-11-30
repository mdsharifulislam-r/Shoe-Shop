'use client'
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { setProductsDataAll, setSideBar } from "@/lib/store/features/cartSlice";
import { ChangeEvent } from "react";
import { GoFilter } from "react-icons/go";
import { productCard } from "../common/ProductCard";
export default function Header({gender}:{gender:string}) {
    const dispatch = useAppDispatch()
    const sideState = useAppSelector(state=>state.cartReduicer.sideBar)
    async function SortData(e:ChangeEvent<HTMLSelectElement>){
        const value = e.target.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
        const data = await res.json()
        const arr:productCard[] = data?.data
        if(value=='ltoh'){
            const newArr = arr?.sort((a,b)=>a.price-b.price)
            dispatch(setProductsDataAll(newArr))
        }else{
            const newArr = arr?.sort((a,b)=>b.price-a.price)
            dispatch(setProductsDataAll(newArr))
        }
    }
  return (
    <div className='flex justify-between place-items-center pb-4 px-3'>
      <h1 className='md:text-2xl text-sm'>{!gender?"All New Collections":`All Product of "${gender}"`}</h1>
      <div className='flex place-items-center gap-3'>
        <button className='md:flex hidden place-items-center gap-2' onClick={()=>dispatch(setSideBar())}>
            <span><GoFilter/></span>
            <span>{sideState?"Hide":"Show"} Filter</span>
        </button>
<select onChange={SortData} className="py-3 px-4  block  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">

  <option value={"npne"}>Filter Products</option>
  <option value={'ltoh'}>Low Price To High Price</option>
  <option className='htol'>High Price to Low Price</option>
 
</select>

      </div>
    </div>
  )
}
