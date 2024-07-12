import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cartValue: 0,
}

export const counterSlice = createSlice({
  name: 'cartCounter',
  initialState,
  reducers: {
    cartIncrement: (state) => {
      state.cartValue += 1
    },
    cartDecrement: (state) => {
      state.cartValue -= 1
    },
  },
})

export const {cartIncrement, cartDecrement} = counterSlice.actions

export default counterSlice.reducer
