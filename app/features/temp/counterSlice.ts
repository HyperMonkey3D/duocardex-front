import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/redux/store'

export interface DataType {
  select: string
  quantity: string
}

export interface CounterState {
  value: DataType[]
}



const initialState: CounterState = {
  
  value: []
  
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    incrementByAmount: (state, action: PayloadAction<DataType[]>) => {
      console.log("payload is ", action.payload) 
      state.value.push(...action.payload)
      // state.value = action.payload
      

  },
},
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export const selectCount = (state:RootState) => state.counter.value 
export default counterSlice.reducer