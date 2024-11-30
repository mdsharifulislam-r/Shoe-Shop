'use client'
import React from "react";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import addidas from "@/assets/images/brands/addidas.webp";
import nike from "@/assets/images/brands/nike.webp";
import bata from "@/assets/images/brands/bata.webp";
import puma from "@/assets/images/brands/puma.webp";
import convarse from "@/assets/images/brands/convarse.webp";

function BrandsItem({ image, brand }: { image: any; brand: string }) {
  return (
    <div className="w-full h-72 bg-zinc-100 flex place-items-end p-8">
      <div className="flex flex-col justify-center place-items-center">
        <Image src={image} alt="" width={1000} height={1000} />
        <h1 className="text-3xl uppercase font-bold mt-8">{brand}</h1>
      </div>
    </div>
  );
}
export default function Classes() {
  return (
    <div className="pt-6 container mx-auto px-3">
      <Heading sub1="Our Partner" sub2="Brands" />
      <div className=" my-6 gap-2">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
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
              slidesPerView: 2,
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
            <BrandsItem image={addidas} brand="addidas" />
          </SwiperSlide>
          <SwiperSlide>
          <BrandsItem image={nike} brand="nike" />
          </SwiperSlide>
          <SwiperSlide>
          <BrandsItem image={puma} brand="puma" />
          </SwiperSlide>
          <SwiperSlide>
          <BrandsItem image={convarse} brand="convarse" />
          </SwiperSlide>
          <SwiperSlide>
          <BrandsItem image={bata} brand="bata" />
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
}
