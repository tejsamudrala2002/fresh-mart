import { configureStore } from "@reduxjs/toolkit";

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
  }
};

function rootReducer(state = initialState, action) {
  return state;
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
