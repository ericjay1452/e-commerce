// Or from '@reduxjs/toolkit/query/react'
import { Productsapi } from "../api/Productsapi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer : {
    // products : Products,
    [Productsapi.reducerPath] : Productsapi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Productsapi.middleware),
})


// setupListeners for Handling autorefresh and mounting of data
setupListeners(store.dispatch)

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
