import { instance } from "@/axios/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (product) => {
        try {
            const data = await instance.post(`/cart`, product); // Đổi đường dẫn API và phương thức HTTP tùy thuộc vào yêu cầu của bạn
            return data;
        } catch (error) {

        }
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem',
    async (product) => {
        try {
            const data = await instance.patch(`/cart/${product.id}`, product); // Đổi đường dẫn API và phương thức HTTP tùy thuộc vào yêu cầu của bạn
            return data;
        } catch (error) {

        }
    }
);

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async (id) => {
        try {
            const confirm = window.confirm("Bạn có chắc xóa chứ!");
            if (confirm) {
                await instance.delete(`/cart/${id}`); // Đổi đường dẫn API và phương thức HTTP tùy thuộc vào yêu cầu của bạn
                alert(`Xóa thành công`);
            } else {
                // Nếu người dùng hủy việc xóa, trả về sớm mà không làm bất cứ điều gì
                return;
            }
            return id;
        } catch (error) {

        }
    }
);

// Vì không có getProduct trong giỏ hàng (cart), nên action này không cần thay đổi

export const getProductFromCartById = createAsyncThunk(
    'cart/getProductFromCartById',
    async (id, { rejectWithValue }) => {
        try {
            // Gọi API để lấy sản phẩm từ giỏ hàng với ID tương ứng
            const response = await instance.get(`/cart/${id}`); // Đổi đường dẫn API và phương thức HTTP tùy thuộc vào yêu cầu của bạn

            // Trả về dữ liệu sản phẩm từ giỏ hàng nếu thành công
            return response.data;
        } catch (error) {
            // Xử lý lỗi nếu có
            // Thông thường, nếu API trả về lỗi 404 (không tìm thấy sản phẩm trong giỏ hàng), ta sẽ sử dụng rejectWithValue để truyền thông tin lỗi về cho reducer
            return rejectWithValue(error);
        }
    }
);
