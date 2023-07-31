import { categoryReducer } from "@/slices/Category";
import { productReducer } from "@/slices/Product";
import { cartReducer } from "@/slices/Cart";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer,
        cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;
