'use client'
import React, { useEffect, useRef, useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import Cart from '../Cart/Cart';
import Link from 'next/link';
import ProfileButton from '../ProfileButton/ProfileButton';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import { setProductsDataAll } from '@/lib/store/features/cartSlice';
import Image from 'next/image';
import logo from '@/assets/images/logo/logo.webp'
const links = [
  {
    text:"Shop",
    link:"/shop"
  },
  {
    text:"Man",
    link:"/shop?gender=man"
  },
  {
    text:"Women",
    link:"/shop?gender=women"
  },
  {
    text:"Unigender",
    link:"/shop?gender=unigender"
  },
]

export default function Navbar() {
  const NavRef = useRef<HTMLDivElement|null>(null)
  const user = useAppSelector(state=>state.cartReduicer.user)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    const func = () =>{
      if(window.scrollY>0){
        NavRef?.current?.classList.add("bg-emerald-50")
      }else{
        NavRef?.current?.classList.remove("bg-emerald-50")
      }
    }
    window.addEventListener('scroll',func)
    return ()=> window.removeEventListener("scroll",func)
  },[])
  
  const [hydred,setHhydred]=useState(false)
  useEffect(()=>setHhydred(true),[])
  return (
    <>
    {/* ========== HEADER ========== */}
    <header ref={NavRef} className="flex bg-white fixed top-0 left-0 flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
        <div className="md:col-span-3">
          {/* Logo */}
          <Link
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Preline"
          >
            <Image src={logo} alt='' width={100} height={100}/>
          </Link>
          {/* End Logo */}
        </div>
        {/* Button Group */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
         {
          hydred&&<Cart/>
         }
          
          {
            hydred && user?.email?<ProfileButton/>:<Link
            href={"/login"}
             className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
           >
             Login
           </Link>
          }
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-hcail"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* End Button Group */}
        {/* Collapse */}
        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {
              links?.map(item=>{
                async function getData() {
                  if(item?.link=='/shop'){
                    return
                  }
                  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?gender=${item?.text?.toLowerCase()}`)
                  const data = await res.json()
                  dispatch(setProductsDataAll(data?.success?data.data:[]))
                }
                return (
                  <div onClick={getData} key={item?.link}>
                  <Link
                    className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400"
                    href={item?.link}
                    aria-current="page"
                  >
                    {item?.text}
                  </Link>
                </div>
                )
              }                
          
              )
            }
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
    {/* ========== END HEADER ========== */}
  </>
  
  )
}
