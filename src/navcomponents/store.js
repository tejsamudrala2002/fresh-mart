import { configureStore, createSlice } from "@reduxjs/toolkit";

// PRODUCT DATA (unchanged)
const initialState = {
  products: {
    Veg: [
      { name: "Tomato", price: 20 },
      { name: "Potato", price: 30 }
    ],
    Nonveg: [
      { name: "Chicken", price: 200 },
      { name: "Fish", price: 150 }
    ]
  },
  auth: { isLoggedIn: false },
  cart: []
};

// AUTH SLICE
const authSlice = createSlice({
  name: "auth",
  initialState: initialState.auth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

// CART SLICE (optional)
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState.cart,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    }
  }
});

// EXPORT ACTIONS
export const { login, logout } = authSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;

// STORE
const store = configureStore({
  reducer: {
    products: () => initialState.products, 
    auth: authSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;
