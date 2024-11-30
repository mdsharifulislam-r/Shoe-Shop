'use client'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Details from "./Details";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { priceCalculate } from "../common/Cart/Cart";
import { useDispatch } from "react-redux";
import { clearCart } from "@/lib/store/features/cartSlice";

export interface orderType{
  address:string,
  card_number?:number,
  email?:string,
  order_date:string
  status:string,
  method:string,
  net_price:number,
  products:string,
  user_id:number,
  primary_id?:number
}

export default function MainContainer() {
  const [method,setMethod]=useState("card")
  const user =useAppSelector(state=>state.cartReduicer.user)
  const dispatch = useAppDispatch()
  const [formData,setFormData]=useState({
    address:"",
    card_number:0,
    email:"",
    order_date:new Date().toLocaleDateString(),
    status:"processing",
    
  })
  const [hydred,setHhydred]=useState(false)
  const FormRef = useRef<HTMLFormElement|null>(null)
  useEffect(()=>{
    setHhydred(true)
  },[])
  const cartData = useAppSelector(state=>state.cartReduicer.cart)
  const addValue = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }

  const submitData = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const {email,address,card_number} = formData
    if(method=='card' && !card_number && !address ){
      toast.error("please filled all required field")
      return
    }
    if(method=='paypal' && !email && !address ){
      toast.error("please filled all required field")
      return
    }
    const newObj={
      ...formData,
      method,
      net_price:priceCalculate(cartData)||1,
      products:cartData.map(item=>item.primary_id).toString(),
      user_id:user?.primary_id||1

    }
    console.log(newObj);
    
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/orders`,{
    method:"POST",
    body:JSON.stringify(newObj)
   })

   const data = await res.json()
   if(data.success){
    toast.success('Order Placed Successfully')
    FormRef.current?.reset()
    dispatch(clearCart())
   }else{
    toast.error(data?.message)
   }
    
  }
  return (
    <div className="font-[sans-serif] transition-[height] duration-500 mt-14 lg:flex lg:items-center lg:justify-center lg:h-screen max-lg:py-4">
    <div className="bg-gray-100 p-8 w-full max-w-5xl max-lg:max-w-xl mx-auto rounded-md">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center">
        Checkout
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 max-lg:gap-8 mt-16">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-bold text-gray-800">
            Choose your payment method
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div className="flex items-center">
              <input
                type="radio"
                className="w-5 h-5 cursor-pointer"
                id="card"
                defaultChecked
                name="method"
                onChange={()=>setMethod('card')}
              />
              <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/visa.webp"
                  className="w-12"
                  alt="card1"
                />
                <img
                  src="https://readymadeui.com/images/american-express.webp"
                  className="w-12"
                  alt="card2"
                />
                <img
                  src="https://readymadeui.com/images/master.webp"
                  className="w-12"
                  alt="card3"
                />
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                className="w-5 h-5 cursor-pointer"
                id="paypal"
                name="method"
                onChange={()=>setMethod('paypal')}
              />
              <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/paypal.webp"
                  className="w-20"
                  alt="paypalCard"
                />
              </label>
            </div>
          </div>
         {method=='card'? <form ref={FormRef} className="mt-8" onSubmit={submitData}>
            <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name of card holder"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Postal code"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="card_number"
                  onChange={addValue}
                  placeholder="Card number"
                  className="col-span-full px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={addValue}
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                className="px-7 py-3.5 text-sm tracking-wide bg-white hover:bg-gray-50 text-gray-800 rounded-md"
              >
                Pay later
              </button>
              <button
                
                className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
          Place Order
              </button>
            </div>
          </form>:
          <form ref={FormRef} className="mt-8" onSubmit={submitData}>
            <div className="grid sm:col-span-2 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={addValue}
                  placeholder="Paypal Email Address"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Transiction Id"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                className="px-7 py-3.5 text-sm tracking-wide bg-white hover:bg-gray-50 text-gray-800 rounded-md"
              >
                Pay later
              </button>
              <button
           
                className="px-7 py-3.5 text-sm tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </form>}
        </div>
     {hydred&& <Details/>}
      </div>
    </div>
  </div>
  
  )
}
