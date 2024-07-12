import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../redux/wishListSlice'
import cartCounterReducer from '../redux/cartListSlice'
import wishListItemSlice from './wishListItemSlice'
import cartItemSlice from './cartItemSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cartCounter: cartCounterReducer,
    wishListItem: wishListItemSlice,
    cartItem: cartItemSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
