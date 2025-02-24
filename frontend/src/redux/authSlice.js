import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Load users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Register a new user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    const { name, email, password } = userData;

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
      return rejectWithValue("Email is already registered.");
    }

    // Add new user to localStorage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Store user session
    localStorage.setItem("user", JSON.stringify(newUser));
    return newUser;
  }
);

// User login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    const { email, password } = userData;

    // Find user in localStorage
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return rejectWithValue("Invalid email or password.");
    }

    // Store user session
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
);

// User logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  localStorage.removeItem("user");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle logout user
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
