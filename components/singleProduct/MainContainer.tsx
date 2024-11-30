import React from 'react'
import ImageBox from './ImageBox'
import TextBox from './TextBox'
import { productCard } from '../common/ProductCard'

export default async function MainContainer({id}:{id:string}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`)
  const data = await res.json()
  const product:productCard = data?.success?data?.data:{}
  
  return (
    <div className='container flex md:flex-row flex-col gap-5 mx-auto mt-24 md:px-0 px-3'>
      <ImageBox product={product}/>
      <TextBox product={product}/>
    </div>
  )
}
