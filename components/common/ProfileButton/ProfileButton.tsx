import React from 'react'
import avatar from '@/assets/images/avatar/pngtree-man-avatar-image-for-profile-png-image_13001877.webp'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { logOut } from '@/lib/store/features/cartSlice'
import toast from 'react-hot-toast'
export default function ProfileButton() {
    const user = useAppSelector(state=>state.cartReduicer.user)
    const dispatch = useAppDispatch()
    function LogoutFunc(){
        dispatch(logOut())
        toast.success("Logout successfully")
    }
  return (
    <div className='relative group'>
    <div className=' size-10 bg-white rounded-full cursor-pointer'>
      <Image src={user?.image||avatar} alt='profile pic' width={50} height={50}/>
    </div>
    <div className='w-36 translate-y-16 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 absolute top-11 shadow-lg rounded-md -left-20  bg-white py-3'>
        <Link href={"/dashboard"} className='w-full py-2 px-3 '>Dashboard</Link>
        <button onClick={LogoutFunc} className=' py-2 px-3 '>Logout</button>
    </div>
    </div>
    
  )
}
