import { addToCart, removeFromCart, getProductFromCartById, updateCartItem } from '@/actions/cart';
import { instance } from '@/axios/config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    isLoading: false,
    error: ""
} as {
    cartItems: any[],
    isLoading: boolean,
    error: string
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetching
        builder.addCase(getProductFromCartById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProductFromCartById.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(getProductFromCartById.rejected, (state, action) => {
            state.isLoading = false;
        })

        // adding - 3 status
        builder.addCase(addToCart.fulfilled, (state, action) => { // Đổi tên action tại đây
            state.cartItems.push(action.payload)
        })
        // updating
        builder.addCase(updateCartItem.fulfilled, (state, action) => { // Đổi tên action tại đây
            const updatedProduct = action.payload;
            state.cartItems = state.cartItems.map((item: any) => item.id === updatedProduct.id ? updatedProduct : item)
        })
        // deleting
        builder.addCase(removeFromCart.fulfilled, (state, action) => { // Đổi tên action tại đây
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item: any) => item.id !== id)
        })
    }
})

export const cartReducer = cartSlice.reducer;
