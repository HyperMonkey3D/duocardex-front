

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/features/temp/counterSlice"
import  productSlice  from "@/app/features/product/productSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        product: productSlice
    
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch