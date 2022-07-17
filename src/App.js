import React from 'react'
import{ useGetAllWomenProductsQuery} from "./api/Productsapi"
const App = () => {

  console.log(useGetAllWomenProductsQuery())
  return (
    <div>App</div>
  )
}

export default App
