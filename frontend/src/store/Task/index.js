import { createSlice } from "@reduxjs/toolkit";
import { getTasks, createTask, updateTask, deleteTask } from "./actions";

export const task = createSlice({
  name: "tasks",
  initialState: {
    data: [],
    currentTask: null,
    status: "idle",
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentTask(state, action) {
      state.currentTask = action.payload;
    },

    clearCurrentTask(state) {
      state.currentTask = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getTasks.pending, (state, action) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        const data = action.payload?.data;
        state.status = "succeeded";
        state.data = Array.isArray(data) ? data : [];
        state.isLoading = false;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "failed";
        state.data = [];
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        const t = action.payload?.task;
        if (t) state.data.unshift(t);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const t = action.payload?.task;
        if (!t) return;
        const idx = state.data.findIndex((x) => x._id === t._id);
        if (idx !== -1) state.data[idx] = t;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const id = action.payload?.id;
        if (!id) return;
        state.data = state.data.filter((x) => x._id !== id);
      });
  },
});

export const taskReducer = task.reducer;
export const { setCurrentTask, clearCurrentTask } = task.actions;
