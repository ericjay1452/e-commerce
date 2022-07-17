import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// na/women-all-products/?f_page=2&format=json
const RootUrl = `https://api.tjori.com/api/v7filters/na`


export const Productsapi = createApi({
  reducerPath : "Productsapi",
  baseQuery : fetchBaseQuery({baseUrl : RootUrl}),
  endpoints : (builder) =>({
    getAllWomenProducts : builder.query ({
        query : (index) =>(`/women-all-products/?f_page=${index}&format=json`)
    })
  })

})

export const {useGetAllWomenProductsQuery } = Productsapi;