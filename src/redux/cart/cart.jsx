import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartCount: JSON.parse(localStorage.getItem("cartCount")) || 0,
};

const updateLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { wishList, ...serializableProduct } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === serializableProduct.id);
      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Item quantity increased in cart");
      } else {
        state.cartItems.push({ ...serializableProduct, quantity: 1 });
        state.cartCount += 1;
        localStorage.setItem("cartCount", state.cartCount);
        toast.success("Item added to cart");
      }
      updateLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      state.cartCount -= 1;
      localStorage.setItem("cartCount", state.cartCount);
      updateLocalStorage(state.cartItems);
      toast.success("Item removed from cart");
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
        updateLocalStorage(state.cartItems);
        state.cartCount = state.cartItems.reduce((count, item) => count + item.quantity, 0);
        localStorage.setItem("cartCount", state.cartCount);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
