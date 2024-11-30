import Header from '@/components/Shop/Header'
import MainContainer from '@/components/Shop/MainContainer'
import React from 'react'

export default async function page({searchParams}:{searchParams:any}) {
  const {gender}:{gender:string}= await searchParams
  return (
    <div className='w-full '>
      <Header gender={gender}/>
      <MainContainer/>
    </div>
  )
}
