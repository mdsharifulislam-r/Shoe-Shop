'use client'
import React from 'react'
import Heading from '../common/Heading'
import runnig from '@/assets/images/shopBySport/running.webp'
import basketball from '@/assets/images/shopBySport/basketball.webp'
import football from '@/assets/images/shopBySport/football.webp'
import jim from '@/assets/images/shopBySport/jim.webp'

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
function ItemImage({image,text}:{image:any,text:string}){
    return (
        <div className='w-full h-80 relative group cursor-pointer overflow-hidden'>
            <Image src={image} alt='' className='absolute group-hover:scale-105 transition-all duration-500 grayscale w-full h-full left-0 top-0 object-cover' width={1000} height={1000}/>
            <div className="text flex place-items-end pb-10 pl-10 absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.2)]">
                <div>
                    <button className='px-4 py-2 bg-white rounded-full'>{text}</button>
                </div>
            </div>
        </div>
    )
}
function ItemVideo(){
    return (
        <div className='w-full h-80 relative'>
            <video autoPlay muted loop  className='absolute grayscale w-full h-full left-0 top-0 object-cover' >
                <source src="/videos/video.mp4" type='video/mp4'></source>
            </video>
            <div className="text flex place-items-end pb-10 pl-10 absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.2)]">
                <div>
                    <button className='px-4 py-2 bg-white rounded-full'>{"Explore"}</button>
                </div>
            </div>
        </div>
    )
}
export default function ShopBySport() {
  return (
    <div className='w-full px-3'>
      <div className="container mx-auto">
        <Heading sub1='Shop By' sub2='Sport'/>
        <div className="con py-5 ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={
            {
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }
          }
        >
            <SwiperSlide>
            <ItemImage
            image={runnig}
            text='Running'
            />
            </SwiperSlide>
            <SwiperSlide>
            <ItemVideo/>
            </SwiperSlide>
            <SwiperSlide>
            <ItemImage
            image={football}
            text='Football'
            />
            </SwiperSlide>
            <SwiperSlide>
            <ItemImage
            image={basketball}
            text='BasketBall'
            />
            </SwiperSlide>
            <SwiperSlide>
            <ItemImage
            image={jim}
            text='Jim And Training'
            />
            </SwiperSlide>
        </Swiper>
            
           
         
          
        </div>
      </div>
    </div>
  )
}
