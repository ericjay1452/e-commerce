import React from 'react'
import { Row, Col } from 'antd'
import {BsBookmark} from "react-icons/bs"
const ProductDisplay = (props) => {
    const {image, name, price, price_usd,
        special_price,
        special_price_usd,
        usd_discounts,
        sizes,
        product_url,
        plpimaage
    } = props
    console.log({props})
  return (
   <div className='w-full block rounded-sm relative'>
    <div className='relative block w-full'>
    <img src={image[0]} alt ={name} className = "max-w-full block h-auto"/>
    <span className = "absolute top-2 right-2">
        <BsBookmark className='text-white text-xl'/>
    </span>
    </div>
    
    <p className = "text-white">{name}</p>
   </div>
  )
}

export default ProductDisplay