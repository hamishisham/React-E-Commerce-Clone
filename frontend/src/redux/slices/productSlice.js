import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      throw Error(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  items: [],
  filteredItems: [],
  brands: [],
  prices: ["all", "Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Over ₹2000"],
  status: "idle",
  error: null,
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const productToAdd = state.items.find((item) => item.id === productId);

      if (productToAdd) {
        const existingItem = state.cart.find((item) => item.id === productId);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cart.push({ ...productToAdd, quantity: 1 });
        }
      }
    },

    updateProductRating: (state, action) => {
      const { productId, rating } = action.payload;
      const productToUpdate = state.items.find((item) => item.id === productId);

      if (productToUpdate) {
        if (!productToUpdate.rating) {
          productToUpdate.rating = { count: 1, rate: rating };
        } else {
          productToUpdate.rating.rate = rating;
        }
      }
    },

    filterProducts: (state, action) => {
      const { selectedPrice, selectedBrand, selectedRating } = action.payload;

      // Start with all products
      let filtered = [...state.items];

      // Filter by brand if selected
      if (selectedBrand) {
        filtered = filtered.filter(
          (product) => product.category === selectedBrand
        );
      }

      // Filter by rating if selected
      if (selectedRating > 0) {
        filtered = filtered.filter(
          (product) => (product.rating?.rate || 0) >= selectedRating
        );
      }

      // Filter by price if selected
      if (selectedPrice && selectedPrice !== "all") {
        switch (selectedPrice) {
          case "Under ₹500":
            filtered = filtered.filter((product) => product.price * 80 < 500);
            break;
          case "₹500 - ₹1000":
            filtered = filtered.filter(
              (product) =>
                product.price * 80 >= 500 && product.price * 80 <= 1000
            );
            break;
          case "₹1000 - ₹2000":
            filtered = filtered.filter(
              (product) =>
                product.price * 80 > 1000 && product.price * 80 <= 2000
            );
            break;
          case "Over ₹2000":
            filtered = filtered.filter((product) => product.price * 80 > 2000);
            break;
          default:
            break;
        }
      }

      state.filteredItems = filtered;
    },

    extractBrands: (state) => {
      const uniqueBrands = [
        ...new Set(state.items.map((product) => product.category)),
      ];
      state.brands = uniqueBrands;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filteredItems = action.payload;

        // Extract brands after products are loaded
        const uniqueBrands = [
          ...new Set(action.payload.map((product) => product.category)),
        ];
        state.brands = uniqueBrands;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, updateProductRating, filterProducts, extractBrands } =
  productSlice.actions;

export default productSlice.reducer;
