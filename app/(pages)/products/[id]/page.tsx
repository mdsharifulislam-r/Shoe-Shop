import Loader from '@/components/common/Loader/Loader'
import MainContainer from '@/components/singleProduct/MainContainer'
import React, { Suspense } from 'react'

export default async function page({params}:{params:any}) {
  const {id} = await params
  return (
    <div>
      <Suspense fallback={<Loader/>}>
      <MainContainer id={id}/>
      </Suspense>
     
      
    </div>
  )
}
