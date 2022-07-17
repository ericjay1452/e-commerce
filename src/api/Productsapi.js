import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const Productsapi = createApi({
  reducerPath : "productsapi",
  baseQuery : fetchBaseQuery({baseUrl : "https://api.tjori.com/api/v7filters/na/"}),
  endpoints : (builder) =>({
    getAllWomenProducts : builder.query ({
        query : (index) =>(`women-all-products/?f_page=${index}&format=json`)
    })
  })

})

export const {useGetAllWomenProductsQuery } = Productsapi;