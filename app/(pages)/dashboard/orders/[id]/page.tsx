import MainContainer from '@/components/OrderDetails/MainContainer'
import React from 'react'

export default async function page({params}:{params:{id:string}}) {
  return (
    <div>
      <MainContainer id={await params?.id}/>
    </div>
  )
}