import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface cartItemState {
  items: any[]
}

const initialState: cartItemState = {
  items: [],
}

const cartItemState = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addToCartList: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload)
    },
    removeFromCartListItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})
export const {addToCartList, removeFromCartListItem} = cartItemState.actions
export default cartItemState.reducer
