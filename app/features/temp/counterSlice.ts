import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: DataType[]
}

export interface DataType {
  select: string
  quantity: string
}

const initialState: CounterState = {
  value: [
    {
      select: "empty",
      quantity: "0"
    }
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    incrementByAmount: (state, action: PayloadAction<DataType[]>) => {
       state.value.push(...action.payload)
      console.log("increment amount", state.value)

  },
},
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export const selectCount = (state:CounterState) => state.value
export default counterSlice.reducer