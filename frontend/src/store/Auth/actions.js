import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/src/lib/apiClient";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const response = await apiClient.post("/admin/login", credentials);

    Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error;
  }
});

export const signup = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const response = await apiClient.post("/admin/signup", credentials);

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error;
  }
});

export const loginBackOffice = createAsyncThunk(
  "auth/loginBackOffice",
  async (merchantId) => {
    try {
      const response = await apiClient.post(
        "/admin/login/back-office",
        merchantId
      );

      Cookies.set(
        "bo-user",
        JSON.stringify({
          userId: merchantId,
          accessToken: response.data.data.user.accessToken,
        }),
        {
          expires: 30,
          domain: ".salsapos.com",
        }
      );
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      }
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  return true;
});

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async () => {
  try {
    const response = await apiClient.get("/admin/profile");

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const sendOTP = createAsyncThunk("auth/sendOTP", async (data) => {
  try {
    const response = await apiClient.post("/admin/resend-otp", data);

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data) => {
  try {
    const response = await apiClient.post("/admin/verify-otp", data);

    Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });
    return response.data;
  } catch (error) {
    throw error;
  }
});
