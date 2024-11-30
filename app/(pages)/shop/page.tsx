import Header from '@/components/Shop/Header'
import MainContainer from '@/components/Shop/MainContainer'
import React from 'react'

export default async function page({searchParams}:{searchParams:{gender:string}}) {
  const {gender}= await searchParams
  return (
    <div className='w-full '>
      <Header gender={gender}/>
      <MainContainer/>
    </div>
  )
}
