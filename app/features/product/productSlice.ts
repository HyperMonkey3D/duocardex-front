import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/redux/store";

export interface ProductDetails {
    ProductID: number,
    ProductName: string,
    Description: string,
    Price: number, 
}

export interface ProductState {
    value: ProductDetails[]
}

const initialState: ProductState = {
    value: []
}

export const productSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    incrementProductList: (state, action: PayloadAction<ProductDetails[]>) => {
       
        state.value.push(...action.payload)
    },
  },
    
})

export const { incrementProductList } = productSlice.actions

export const selectProduct = (state:RootState) => state.product.value
export default productSlice.reducer