'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';

export default function ProductDetail({ params: paramsPromise }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  // Unwrapping the Promise for params
  const params = use(paramsPromise);
  const { id } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={styles.detail}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        style={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  detail: {
    padding: '16px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  button: {
    background: '#0070f3',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '16px',
  },
};
