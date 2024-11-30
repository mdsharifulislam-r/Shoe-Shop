'use client'
import { productCard } from '@/components/common/ProductCard'
import { useAppDispatch } from '@/lib/hooks/hooks'
import { setProductsDataAll } from '@/lib/store/features/cartSlice'
import React, { ChangeEvent, useEffect, useState } from 'react'
const genders = ['Man','Women','Kid','Unigender']
function BrandItem({name,setBrands}:{name:string,setBrands:React.Dispatch<React.SetStateAction<string[]>>}){
  const low = name.toLowerCase().split(" ").join("_")
  const checkValue = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,checked} = e.target
    if(checked){
      setBrands(prev=>{
        return [...prev,name]
      })
    }else{
      setBrands(prev=>{
        return prev.filter(item=>item!=name)
      })
    }
  }
  return (
      <li className="flex place-items-center gap-3">
      <input onChange={checkValue} type="checkbox" name={low} id={low} />
      <label htmlFor={low} className="font-light">{name}</label>
    </li>
  )
}
export default function Genders() {
  const [gendersk,setgenders]=useState<string[]>([])
  const dispatch = useAppDispatch()
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
      .then(res=>res.json())
      .then(data=>{
        
        const temp:productCard[]= data.data
        console.log(genders.map(item=>item.toLowerCase()));
        
        const newProducts = temp?.filter(item=>{
          if(gendersk.map(itemk=>itemk.toLowerCase()).some(iteml=>iteml==item.gender?.toLowerCase())){
            return item
          }
        })
        if(gendersk.length){
          dispatch(setProductsDataAll(newProducts))
        }else{
          dispatch(setProductsDataAll(data.data))
        }
        
        
      })
  },[gendersk])
  
    const gendersName = genders.map(item=>(
        <BrandItem name={item} key={item} setBrands={setgenders}/>
    ))
  return (
    <ul className="ps-8 pt-1 space-y-1">
   {gendersName}
  </ul>
  )
}
