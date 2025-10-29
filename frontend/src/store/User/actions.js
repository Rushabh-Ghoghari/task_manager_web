import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/src/lib/apiClient";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get("/user");
      return response.data;
    } catch (error) {
      const message = error?.response?.data?.message || "Error fetching users";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Error fetching user details";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
