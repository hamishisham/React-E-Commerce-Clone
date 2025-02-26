import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return { cartItems: [], totalQuantity: 0, totalPrice: 0 };
  }
};

// Initial state from localStorage or default values
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
      state.totalPrice += price * quantity;

      saveCartToLocalStorage(state); // Save to localStorage
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
      }

      saveCartToLocalStorage(state); // Save to localStorage
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }

      saveCartToLocalStorage(state); // Save to localStorage
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }

      saveCartToLocalStorage(state); // Save to localStorage
    },

    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
    
      if (item) {
        // Adjust total price and total quantity before updating
        state.totalQuantity += quantity - item.quantity;
        state.totalPrice += (quantity - item.quantity) * item.price;
    
        // Update item quantity
        item.quantity = quantity;
      }
    
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
  },
});

// Save cart to localStorage
const saveCartToLocalStorage = (cartState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartState));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
