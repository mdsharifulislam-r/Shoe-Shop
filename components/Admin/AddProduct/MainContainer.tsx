'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import ImageBox from './ImageBox'
import toast from 'react-hot-toast'

export default function MainContainer() {
    const [images,setImages]=useState<string[]>([])
    const [product,setProduct]=useState({
        name:"",
        price:0,
        sale:0,
        size:"",
        brand:"",
        gender:"",
        colors:"",
        image:""
    })
    const formRef = useRef<HTMLFormElement|null>(null)
    const addvalue = (e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setProduct({...product,[name]:value})
    }
    const submitData =  async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const {name,gender,price,sale,size,brand} = product
        if(!name || !gender || !price || !sale || !size || !brand || !images.length){
            toast.error("Please fill all require Data")
            return
        }

        const details = {
            ...product,
            colors:images.length>1?images.slice(1,images.length).toString():"",
            image:images[0],
            price:parseInt(price.toString()),
            sale:parseInt(sale.toString()),
            gender:gender
        }
        
        console.log(details);
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`,{
            method:"POST",
            body:JSON.stringify(details)
        })
        const data = await res.json()
        if(data?.success){
            toast.success('Products Add Successfully')
            setProduct({
              name:"",
              price:0,
              sale:0,
              size:"",
              brand:"",
              gender:"",
              colors:"",
              image:""
            })
            setImages([])
            formRef.current?.reset()
        }
        else{
            toast.error(data?.message)
        }
    }
  return (
    <form ref={formRef} onSubmit={submitData} className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
      <div>
        
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Add New Product</p>
              <p>Please fill out all the fields.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="full_name">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    id="full_name"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    defaultValue=""
                    onChange={addvalue}
                  />
                </div>
                <div className="md:col-span-5">
                  <label htmlFor="email">Price</label>
                  <input
                    type="number"
                    name="price"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  
                    placeholder="Price"
                    onChange={addvalue}
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="address">Sizes By Comma(,)</label>
                  <input
                    type="text"
                    name="size"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                 
                    placeholder="Sizes"
                    onChange={addvalue}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Sale (%)</label>
                  <input
                    type="number"
                    name="sale"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  
                    placeholder="Sale"
                    onChange={addvalue}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country">Brand</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="brand"
                      id="country"
                      placeholder="Brand"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      defaultValue=""
                      onChange={addvalue}
                    />
                    <button
                      tabIndex={-1}
                      className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                    <button
                      tabIndex={-1}
                
                      className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        className="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 flex place-items-center gap-2 my-auto">
                  <span>Gender :</span>
                  <div className='flex  place-items-center gap-1'>
                    <input type="radio"  onChange={addvalue} name="gender" value={'man'} id="man" />
                    <label htmlFor="man">Man</label>
                  </div>
                  <div className='flex  place-items-center gap-1'>
                    <input type="radio"  onChange={addvalue} name="gender" value={'women'} id="women" />
                    <label htmlFor="women">Women</label>
                  </div>
                  <div className='flex  place-items-center gap-1'>
                    <input type="radio"  onChange={addvalue} name="gender" value={'unigender'} id="unigender" />
                    <label htmlFor="unigender">Unigender</label>
                  </div>
                </div>
                <ImageBox images={images} setData={setImages}/>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </form>
  
  )
}
