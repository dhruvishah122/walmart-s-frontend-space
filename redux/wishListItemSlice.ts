import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface wishListItemState {
  items: any[]
}

const initialState: wishListItemState = {
  items: [],
}

const wishListItemState = createSlice({
  name: 'wishListItem',
  initialState,
  reducers: {
    addToWishListItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload)
    },
    removeFromWishListItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})
export const {addToWishListItem, removeFromWishListItem} =
  wishListItemState.actions
export default wishListItemState.reducer
