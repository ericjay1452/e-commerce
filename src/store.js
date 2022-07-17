import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {useGetAllWomenProductsQuery} from "./api/Productsapi"

export const store = configureStore({
    reducer : {
        [useGetAllWomenProductsQuery.reducerPath] : useGetAllWomenProductsQuery.reducer
    },
    middleware :(getDefaultmiddleware) => {
        getDefaultmiddleware().concat(useGetAllWomenProductsQuery.middleware)
    } 

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)