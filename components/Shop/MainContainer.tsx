"use client";
import React, { useEffect, useState } from "react";

import ProductCard, { productCard } from "../common/ProductCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { setProductsDataAll } from "@/lib/store/features/cartSlice";

export default function MainContainer() {
  const dispath = useAppDispatch();
  const productData = useAppSelector((state) => state.cartReduicer.products);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        dispath(setProductsDataAll(data?.data));
      });
  }, []);
  return (
    <>
    <div>
    <div className="grid md:grid-cols-3 grid-cols-2 h-auto px-4 overflow-y-scroll gap-3 mx-auto">
        {productData?.slice(0, 3).map((item) => (
          <ProductCard product={item} key={item.primary_id} />
        ))}
        {productData?.length>8?<div className="bg-red-500 md:col-span-3 col-span-2 w-full relative h-[300px]">
        <video autoPlay muted loop  className='absolute grayscale w-full h-full left-0 top-0 object-cover' >
                <source src="/videos/video3.mp4" type='video/mp4'></source>
            </video>
        </div>:""}
        {productData?.slice(4, 15).map((item) => (
          <ProductCard product={item} key={item.primary_id} />
        ))}
      </div>
    </div>
      
    </>
  );
}
