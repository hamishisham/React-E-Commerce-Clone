import { createSlice } from "@reduxjs/toolkit";

// Function to get the logged-in user's email
const getCurrentUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.email : null;
};

// Load wishlist from localStorage based on the logged-in user
const loadWishlistFromLocalStorage = () => {
  try {
    const userEmail = getCurrentUserEmail();
    if (!userEmail) return { items: [] };

    const savedWishlist = localStorage.getItem(`wishlist_${userEmail}`);
    return savedWishlist ? JSON.parse(savedWishlist) : { items: [] };
  } catch (error) {
    console.error("Error loading wishlist from localStorage:", error);
    return { items: [] };
  }
};

// Save wishlist to localStorage for the logged-in user
const saveWishlistToLocalStorage = (wishlistState) => {
  try {
    const userEmail = getCurrentUserEmail();
    if (!userEmail) return;

    localStorage.setItem(`wishlist_${userEmail}`, JSON.stringify(wishlistState));
  } catch (error) {
    console.error("Error saving wishlist to localStorage:", error);
  }
};

// Initial state
const initialState = loadWishlistFromLocalStorage();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
      saveWishlistToLocalStorage(state);
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveWishlistToLocalStorage(state);
    },

    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
