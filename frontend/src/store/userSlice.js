import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Default state when user is not logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Update user state with payload
    },
    clearUser: (state) => {
      state.user = null; // Clear user data when logging out
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
