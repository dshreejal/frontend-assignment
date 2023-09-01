import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      // Check if cart contains the same product
      if (!itemInCart) {
        state.push({ ...action.payload, quantity: 1 });
        toast.success("Added to Cart Successfully");
      } else {
        toast.error("Item Already In Cart");
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    changeQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      toast.success("Order Placed Successfully");
      return [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
