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

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveCartToLocalStorage(state); // Save to localStorage
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
