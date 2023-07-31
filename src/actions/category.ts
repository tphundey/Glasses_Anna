import { instance } from "@/axios/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        try {
            const data = await instance.get(`/categories`); // Assuming the API endpoint for fetching categories is /categories
            return data;
        } catch (error) {
            // Handle the error if needed
            throw error;
        }
    }
);

export const getCategoryById = createAsyncThunk(
    'categories/getCategoryById',
    async (id, { rejectWithValue }) => {
        try {
            // Call the API to get the category with the corresponding ID
            const response = await instance.get(`/categories/${id}`); // Assuming the API endpoint for fetching a category by ID is /categories/:id

            // Return the category data if successful
            return response.data;
        } catch (error) {
            // Handle the error
            // Typically, if the API returns a 404 error (category not found), we'll use rejectWithValue to pass the error information back to the reducer
            return rejectWithValue(error);
        }
    }
);

export const addCategory = createAsyncThunk(
    'categories/addCategory',
    async (category) => {
        try {
            const data = await instance.post(`/categories`, category); // Assuming the API endpoint for adding a new category is /categories
            return data;
        } catch (error) {
            // Handle the error if needed
            throw error;
        }
    }
);

export const updateCategory = createAsyncThunk(
    'categories/updateCategory',
    async (category) => {
        try {
            const data = await instance.patch(`/categories/${category.id}`, category); // Assuming the API endpoint for updating a category is /categories/:id
            return data;
        } catch (error) {
            // Handle the error if needed
            throw error;
        }
    }
);

export const removeCategory = createAsyncThunk(
    'categories/removeCategory',
    async (id) => {
        try {
            const confirm = window.confirm("Bạn có chắc xóa chứ!");
            if (confirm) {
                await instance.delete(`/categories/${id}`); // Assuming the API endpoint for deleting a category is /categories/:id
                alert(`Xóa thành công`);
            } else {
                // If the user cancels the deletion, return early without doing anything
                return;
            }
            
            return id;
        } catch (error) {
            // Handle the error if needed
            throw error;
        }
    }
);
