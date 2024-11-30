import { productCard } from "@/components/common/ProductCard"
import { getStorLocal, setStorLocal } from "@/lib/hooks/localHooks"
import { createSlice } from "@reduxjs/toolkit"

export interface cartItem{
    primary_id?:number,
    cart_id?:number,
    name:string,
    image:string,
    price:number,
    amount:number,
    size:number,
}
export interface userType{
    name?:string,
    email:string,
    password:string,
    phone?:string,
    address?:string,
    image?:string,
    primary_id?:number,
}

interface adminType{
    email:string,
    password:string,
    primary_id:number
}
const localCart:cartItem[] = getStorLocal('cart')
const localUser:userType = getStorLocal('user')
const localAdmin:adminType = getStorLocal('admin')
interface initialstate{
    cart:cartItem[],
    products:productCard[],
    user:userType|null,
    dashboard:boolean,
    sideBar:boolean,
    admin:adminType
}
const initialState:initialstate={
    cart:localCart,
    products:[],
    user:localUser,
    dashboard:false,
    sideBar:true,
    admin:localAdmin
}

const cartSlice = createSlice({
    initialState,
    name:"cart slice",
    reducers:{
        addCartItem:(state,action)=>{
            if(state.cart.some(item=>item.primary_id==action.payload?.primary_id)){
                const cart_id  = action.payload.primary_id
                const index = state.cart.findIndex(item=>item.primary_id==cart_id)
                state.cart[index]={
                    ...state.cart[index],
                    amount:state.cart[index]?.amount||1+1
                }
                setStorLocal('cart',state.cart)
                return
            }
            state.cart=[...state.cart,{
                cart_id:Math.random(),
                ...action.payload
            }]
            setStorLocal('cart',state.cart)
        },
        deleteCartItem:(state,action)=>{
            const id = action.payload.id
            state.cart=state.cart.filter(item=>item.cart_id!=id)
            setStorLocal('cart',state.cart)
        },
        updateAmount:(state,action)=>{
            const cart_id  = action.payload.cart_id
            const status = action.payload.status

            const index = state.cart.findIndex(item=>item.cart_id==cart_id)
            if(!status){
                if(state.cart[index].amount<=1){
                    return
                }
                state.cart[index]={
                    ...state.cart[index],
                    amount:state.cart[index].amount-1
                }
            }else{
                state.cart[index]={
                    ...state.cart[index],
                    amount:state.cart[index].amount+1
                }
            }
            
            
            setStorLocal('cart',state.cart)
        },
        setProductsDataAll:(state,action)=>{
            state.products=action.payload
        },
        setUser:(state,action)=>{
            state.user=action.payload
            setStorLocal('user',state.user)
        },
        logOut:(state)=>{
            state.user=null
            setStorLocal('user',null)

        },
        clearCart:(state)=>{
            state.cart=[]
            setStorLocal('cart',state.cart)
        },
        setDashboard:(state)=>{
            state.dashboard=!state.dashboard
        },
        setSideBar:(state)=>{
            state.sideBar=!state.sideBar
        },
        setAdmin:(state,action)=>{
            state.admin=action.payload
            setStorLocal('admin',action.payload)
        }
    }
})

export const {addCartItem,deleteCartItem,updateAmount,setProductsDataAll,setUser,logOut,clearCart,setDashboard,setSideBar,setAdmin} = cartSlice.actions

export default cartSlice