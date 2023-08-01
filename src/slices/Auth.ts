import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/axios/config';
import { signupUser } from '@/actions/auth';

interface SignupState {
  isLoading: boolean;
  error: string;
}

const initialState: SignupState = {
  isLoading: false,
  error: "",
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(signupUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? action.payload.error : "Signup failed";
    });
  },
});

export const signupReducer = signupSlice.reducer;
