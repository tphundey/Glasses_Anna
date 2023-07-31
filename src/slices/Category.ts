import { addCategory, getCategories, removeCategory, updateCategory, getCategoryById } from '@/actions/category';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    categories: [], // Change "products" to "categories"
    isLoading: false,
    error: ""
} as {
    categories: any[], // Change "products" to "categories"
    isLoading: boolean,
    error: string
}

const categorySlice = createSlice({
    name: "category", // Change "product" to "category"
    initialState,
    reducers: {},
    // rerender
    extraReducers: (builder) => {
        // Xử lý action getCategoryById.pending (được tự động thêm vào bởi createAsyncThunk)
        builder.addCase(getCategoryById.pending, (state) => {
            state.isLoading = true;
        });

        // Xử lý action getCategoryById.fulfilled (được tự động thêm vào bởi createAsyncThunk)
        builder.addCase(getCategoryById.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        // Xử lý action getCategoryById.rejected (được tự động thêm vào bởi createAsyncThunk)
        builder.addCase(getCategoryById.rejected, (state, action) => {
            state.isLoading = false;
        });

        // fetching
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload; // Change "products" to "categories"
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
        });

        // adding - 3 status
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.categories.push(action.payload); // Change "products" to "categories"
        });

        // updating
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            const category = action.payload; // Change "product" to "category"
            state.categories = state.categories.map((item: any) => item.id === category.id ? category : item); // Change "products" to "categories"
        });

        // deleting
        builder.addCase(removeCategory.fulfilled, (state, action) => {
            const id = action.payload;
            state.categories = state.categories.filter((item: any) => item.id !== id); // Change "products" to "categories"
        });
    }
});

export const categoryReducer = categorySlice.reducer; // Change "productReducer" to "categoryReducer"
