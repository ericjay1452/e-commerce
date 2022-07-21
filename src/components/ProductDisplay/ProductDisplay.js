import React from 'react'
import {BsBookmark, BsBagCheckFill} from "react-icons/bs"
const ProductDisplay = (props) => {
    const {image, name, price, price_usd,
        special_price,
        special_price_usd,
        usd_discounts,
        sizes,
        product_url,
        plpimaage
    } = props
    // console.log({props})
  return (
   <div className='w-full block rounded-sm relative'>
    <div className='relative block w-full'>
    <img src={image[0]} alt ={name} className = "max-w-full block h-auto"/>
    <span className = "absolute top-2 right-2">
        <BsBookmark className='text-white text-xl'/>
    </span>
    </div>
    
    <p className = "text-white text-center p-2">{name}</p>
    <div className = "text-white flex justify-between items-center mx-4">
        <span className = "block relative text-xl">
        {`$ ${price} `}  
           <span className='text-sm'> {special_price} </span>

           <span className='text-sm text-green'>{` ( ${usd_discounts} % off ) `}</span>
        </span>
         <BsBagCheckFill /> 
    </div>
   </div>
  )
}

export default ProductDisplay