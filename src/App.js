import React, {useEffect} from 'react'
import {useGetAllWomenProductsQuery} from "./api/Productsapi"
import Header from "./components/Header/Header"
import ProductDisplay from './components/ProductDisplay/ProductDisplay'
import {Row, Col} from "antd"
import { Filtered } from './components/Filtered'

const App = () => {
  
   const {isFetching, data} = useGetAllWomenProductsQuery();
   if(isFetching) return;

   const {data :secondData } = data;
   const {filters,pagination,products} = secondData;

  return (
    <div className='bg-black w-full max-w-full block h-full'>
       <Header />
          

         {/* Filtered */}
         {console.log({filters})}
           <div className='flex'>
            {filters?.map( (labe, i)=>{
                return (<Filtered key={i} {...labe} />)
            })}
           </div>

          {/* ProductDisplay */}
          <Row className='px-3 mt-4' gutter ={[15,15]}>
            {products?.map( (dat, i) =>{
              return ( 
              <Col span={6} key = {i} className = "rounded-sm">
               <ProductDisplay {...dat} key ={i} />
              </Col>
              )
              
            })} 
          </Row>
    </div>
  )
}

export default App
