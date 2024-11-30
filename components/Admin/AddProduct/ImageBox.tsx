'use client'
import React, { ChangeEvent, useState } from 'react'
import { LuImagePlus } from "react-icons/lu";
import shoe from '@/assets/images/brands/bata.webp'
import Image from 'next/image';
import { uploadImage } from '@/lib/helper/ImageUploader';
function ImageItem({image}:{image:any}){
    return (
        <div className='size-20 flex justify-center place-items-center bg-gray-100'>
            <Image src={image} alt='' width={100} height={100} className='w-[70%]'/>
        </div>
    )
}



export default function ImageBox({setData,images}:{setData:React.Dispatch<React.SetStateAction<string[]>>,images:string[]}) {
    

    async function AddImage(e:ChangeEvent<HTMLInputElement>) {
        const {files} = e.target

        const link = await uploadImage(files)

       
        setData(prev=>[...prev,link])
    }
  return (
    <div className='w-full min-h-20 border col-span-5 p-3 flex gap-2'>
        <div className='flex gap-1'>
            {
                images.map(item=>(
                    <ImageItem image={item} key={item}/>
                ))
            }
        </div>
      <div>
        <input type="file" onChange={AddImage} name="" hidden id="add-image" />
        <label htmlFor="add-image" className='  size-20 flex flex-col justify-center place-items-center cursor-pointer  bg-gray-100'>
            <LuImagePlus/>
            <span>Add Image</span>
        </label>
      </div>
    </div>
  )
}
