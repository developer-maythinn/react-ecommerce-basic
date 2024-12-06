'use client';

import Cart from '@/components/Cart';
import { useSelector } from 'react-redux';

export default function Checkout() {
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '16px' }}>
      <h1>Checkout</h1>
      <Cart />
      <h3>Total: ${total.toFixed(2)}</h3>
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.title} - ${item.price.toFixed(2)} x {item.quantity}
              </li>
            ))}
          </ul>
         
        </div>
      )}
    </div>
  );
}
