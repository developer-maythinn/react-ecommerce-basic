// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [], // Array to store cart items
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item exists
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 }); // Add new item
//       }
//     },
//     removeFromCart(state, action) {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // Find if the item already exists in the cart
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         // If item exists, increase the quantity
//         existingItem.quantity += 1;
//       } else {
//         // If item doesn't exist, add a new one
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart(state, action) {
//       // Remove item by id
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     // Optionally, you can add a reducer for clearing the entire cart
//     clearCart(state) {
//       state.items = [];
//     }
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // Find if the item already exists in the cart
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         // If item exists, increase the quantity
//         existingItem.quantity += 1;
//       } else {
//         // If item doesn't exist, add a new one
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart(state, action) {
//       // Remove item by id
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     decreaseQuantity(state, action) {
//       // Find the item by ID and decrease the quantity
//       const item = state.items.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1; // Decrease quantity
//       } else if (item) {
//         // Optionally remove the item if quantity is 1 or less
//         state.items = state.items.filter(item => item.id !== action.payload);
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//     }
//   },
// });

// export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add a new item with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      // Remove item by id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity(state, action) {
      // Find item and decrease quantity, or remove it if quantity is 1
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
