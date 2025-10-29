import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, login, logout, sendOTP, verifyOtp } from "./actions";
import Cookies from "js-cookie";

export const auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.status = "succeeded";
        state.user = user || null;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        Cookies.remove("user");

        state.status = "succeeded";
        state.user = null;
        state.isLoading = false;
      })
      .addCase(fetchAuth.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.status = "succeeded";
        state.user = user || null;
        state.isLoading = false;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        Cookies.remove("user"); //remove cookies if profile not fetched

        state.status = "failed";
        state.user = null;
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(verifyOtp.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.status = "succeeded";
        state.user = user || null;
        state.isLoading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const authReducer = auth.reducer;
