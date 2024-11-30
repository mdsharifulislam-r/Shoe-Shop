import React from 'react'

export default function Heading({sub1,sub2}:{sub1:string,sub2:string}) {
  return (
    <div className='flex mx-auto py-3'>
      <h1 className='text-3xl font-light'>{sub1} <span className=' font-bold text-orange-500'>{sub2}</span></h1>
    </div>
  )
}
