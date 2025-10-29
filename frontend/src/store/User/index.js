import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUserById, updateUser } from "./user.actions";

export const user = createSlice({
  name: "users",
  initialState: {
    data: {}, // for list of users
    currentUser: null, // for selected or logged-in user
    status: "idle",
    isLoading: false,
    error: null,
  },

  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    clearCurrentUser(state) {
      state.currentUser = null;
    },
  },

  extraReducers(builder) {
    builder
      // ---- Get All Users ----
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload || {};
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.isLoading = false;
      })

      // ---- Get Single User ----
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload?.data || null;
        state.isLoading = false;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.isLoading = false;
      })

      // ---- Update User ----
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;

        // update local state with updated user if exists
        if (state.currentUser?._id === action.payload?.data?._id) {
          state.currentUser = action.payload.data;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
        state.isLoading = false;
      });
  },
});

export const userReducer = user.reducer;
export const { setCurrentUser, clearCurrentUser } = user.actions;
