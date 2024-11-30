import React from 'react'
import Heading from '../common/Heading'
import ProductCard, { productCard as ProductType } from '../common/ProductCard'
import pic from '@/assets/images/brands/nike.webp'
import pic2 from '@/assets/images/brands/addidas.webp'
import pic3 from '@/assets/images/brands/convarse.webp'
import pic4 from '@/assets/images/brands/bata.webp'
const productData:ProductType[]=[
    {
        image:pic,
        name:"NIKE 145 Shoe",
        sale:34,
        price:456,

    },
    {
        image:pic2,
        name:"Addidas Fashion Shoe",
        sale:14,
        price:156,

    },
    {
        image:pic3,
        name:"Bata White Shoe",
        sale:0,
        price:345,

    },
    {
        image:pic4,
        name:"Puma White Shoe",
        sale:12,
        price:335,

    },
]
export default function FeaturedProduct() {
  return (
    <div className='w-full mt-10 px-3'>
        <div className="container mx-auto">
            <Heading
            sub1='Our Populer'
            sub2='Products'
            />
            <div className="con">
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
            {
                productData?.map(item=>(
                    <ProductCard product={item} key={item.price}/>
                ))
            }
        </div>
      </div>
        </div>
      
    </div>
  )
}
