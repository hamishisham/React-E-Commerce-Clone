import { createSlice } from "@reduxjs/toolkit";

// Function to get the logged-in user's email
const getCurrentUserEmail = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.email : null;
};

// Load cart from localStorage based on the logged-in user
const loadCartFromLocalStorage = () => {
  try {
    const userEmail = getCurrentUserEmail();
    if (!userEmail) return { cartItems: [], totalQuantity: 0, totalPrice: 0 };

    const savedCart = localStorage.getItem(`cart_${userEmail}`);
    return savedCart ? JSON.parse(savedCart) : { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  }
};

// Save cart to localStorage for the logged-in user
const saveCartToLocalStorage = (cartState) => {
  try {
    const userEmail = getCurrentUserEmail();
    if (!userEmail) return;

    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cartState));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// Calculate total price function
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Initial state
const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image, quantity } = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ id, name, price, image, quantity });
      }
      state.totalQuantity += quantity;
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = calculateTotalPrice(state.cartItems);

      saveCartToLocalStorage(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      saveCartToLocalStorage(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      saveCartToLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      if (item) {
        item.quantity = quantity;
        state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = calculateTotalPrice(state.cartItems);
      }
      saveCartToLocalStorage(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
