import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/src/lib/apiClient";

export const getTasks = createAsyncThunk("tasks/getTasks", async (params) => {
  try {
    const response = await apiClient.get(`/task`);

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error;
  }
});

export const createTask = createAsyncThunk("tasks/createTask", async (body) => {
  try {
    const response = await apiClient.post("/task", body);

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error;
  }
});

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, body }) => {
    try {
      const response = await apiClient.put(`/task/${id}`, body);
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

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  try {
    const response = await apiClient.delete(`/task/${id}`);
    return { id, ...response.data };
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error;
  }
});
