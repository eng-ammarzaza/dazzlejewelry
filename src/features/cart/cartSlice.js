import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payload = productID
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.itemID !== action.payload);
    },
    incItemQnt(state, action) {
      //payload = productID
      const item = state.cart.find((item) => item.itemID === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQnt(state, action) {
      //payload = productID
      const item = state.cart.find((item) => item.itemID === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },
    subtotal(state, action) {
      //payload = productID
      const item = state.cart.find((item) => item.itemID === action.payload);
      item.subtotal = item.quantity * item.unitPrice;
    },
    // fastShipping(state, action){
    //   state.cart.item()
    // },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  removeItem,
  incItemQnt,
  decItemQnt,
  subtotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getNumItems = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 200);

export const getCurrQntById = (id) => (state) =>
  state.cart.cart.find((item) => item.itemID === id)?.quantity ?? 0;
