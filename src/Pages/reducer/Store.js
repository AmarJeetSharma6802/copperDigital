import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../reducer/cartSlice'

const storeItem = configureStore({
    reducer: {
        cart: cartReducer
    }
})
export default storeItem;