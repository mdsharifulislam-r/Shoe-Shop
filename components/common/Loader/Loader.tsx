import React from 'react'
import "./Loader.css"
export default function Loader() {
  return (
    <div className='w-full h-screen flex justify-center place-items-center '>
   <div className="lds-ripple ">
  <div className='bg-orange-500' />
  <div />
</div>
    </div>
 

  )
}
