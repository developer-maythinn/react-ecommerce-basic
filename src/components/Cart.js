// 'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart } from '../redux/slices/cartSlice';

// export default function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div>
//           {cartItems.map(item => (
//             <div key={item.id} style={styles.cartItem}>
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price.toFixed(2)}</p>
//               <p>Quantity: {item.quantity}</p>
//               <button onClick={() => handleRemove(item.id)} style={styles.removeButton}>
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   cartItem: {
//     marginBottom: '16px',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   removeButton: {
//     backgroundColor: '#ff4d4f',
//     color: 'white',
//     border: 'none',
//     padding: '8px 16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };
// 'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart, decreaseQuantity } from '../redux/slices/cartSlice';

// export default function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div>
//           {cartItems.map(item => (
//             <div key={item.id} style={styles.cartItem}>
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price.toFixed(2)}</p>
//               <p>Quantity: {item.quantity}</p>
//               <div style={styles.quantityButtons}>
//                 <button onClick={() => handleDecrease(item.id)} style={styles.decreaseButton}>
//                   - Reduce
//                 </button>
//                 <button onClick={() => handleRemove(item.id)} style={styles.removeButton}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   cartItem: {
//     marginBottom: '16px',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   quantityButtons: {
//     display: 'flex',
//     gap: '8px',
//   },
//   decreaseButton: {
//     backgroundColor: '#ff9800',
//     color: 'white',
//     border: 'none',
//     padding: '8px 16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   removeButton: {
//     backgroundColor: '#ff4d4f',
//     color: 'white',
//     border: 'none',
//     padding: '8px 16px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };
"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart } from "../redux/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(addToCart({ id })); // Reusing addToCart to increase quantity
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
   
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <div style={styles.quantityButtons}>
                <button
                  onClick={() => handleIncrease(item.id)}
                  style={styles.increaseButton}
                >
                  + Increase
                </button>
                <button
                  onClick={() => handleDecrease(item.id)}
                  style={styles.decreaseButton}
                >
                  - Decrease
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  cartItem: {
    marginBottom: "16px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityButtons: {
    display: "flex",
    gap: "8px",
  },
  increaseButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  decreaseButton: {
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  removeButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
