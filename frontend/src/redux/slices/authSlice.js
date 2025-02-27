import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Helper function to safely parse localStorage
const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error parsing localStorage key ${key}:`, error);
    return null;
  }
};

// Load users from localStorage
let users = getLocalStorageItem("users") || [];

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

// Update user profile (name, email, phone)
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (updatedData, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;

      if (!user) {
        return rejectWithValue("Not logged in");
      }

      const { name, email, phone } = updatedData;

      // Re-fetch users to ensure we have the latest data
      users = getLocalStorageItem("users") || [];

      const userIndex = users.findIndex((u) => u.email === user.email);
      if (userIndex === -1) {
        return rejectWithValue("User not found.");
      }

      // Create updated user object
      const updatedUser = {
        ...users[userIndex],
        name,
        email,
        phone,
      };

      // Update users array
      users[userIndex] = updatedUser;

      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(updatedUser));

      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message || "Profile update failed");
    }
  }
);

// Update user password
export const updateUserPassword = createAsyncThunk(
  "auth/updateUserPassword",
  async (passwordData, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;

      if (!user) {
        return rejectWithValue("Not logged in");
      }

      const { oldPassword, newPassword } = passwordData;

      // Re-fetch users to ensure we have the latest data
      users = getLocalStorageItem("users") || [];

      const userIndex = users.findIndex((u) => u.email === user.email);

      if (userIndex === -1) {
        return rejectWithValue("User not found.");
      }

      if (users[userIndex].password !== oldPassword) {
        return rejectWithValue("Incorrect old password.");
      }

      // Update password
      users[userIndex].password = newPassword;

      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("user", JSON.stringify(users[userIndex]));

      return users[userIndex];
    } catch (error) {
      return rejectWithValue(error.message || "Password update failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getLocalStorageItem("user"),
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Handle login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Handle logout user
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.success = false;
      })

      // Handle user profile update
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Handle update user password
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default authSlice.reducer;
