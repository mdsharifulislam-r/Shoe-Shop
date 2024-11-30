
import Sizes from './Sizes'
import { FaRegHeart } from 'react-icons/fa'
import Accordian from './Accordian/Accordian'
import { productCard } from '../common/ProductCard'
import SubItem from './SubItem'


export default function TextBox({product}:{product:productCard}) {
  
  return (
    <div className='md:w-1/2 w-full  overflow-scroll'>
      <h1 className='text-2xl'>{product?.name}</h1>
      <span className=' font-light'>{product?.gender} Shoes</span>
      <div className=' mt-5 text-xl'>
        MRP: ${product?.price}
      </div>
      <span className='text-sm text-slate-400 font-light'>
      Inclusive of all taxes <br />
      (Also includes all applicable duties) 
      </span>
      <SubItem product={product}/>
      <div className='md:w-[60%] w-full my-4 font-light'>
      Carve a new lane for yourself in the Vomero 5—your go-to for depth, durability and easy styling. The sleek design includes textiles, synthetic leather and plastic accents that nod to the Y2K aesthetic.
      </div>
      <div>
        <Accordian/>
      </div>
    </div>
  )
}
