"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import Link from "next/link";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <div style={styles.actions}>
        {/* View Details */}
        <Link href={`/product/${product.id}`}>
          <button style={styles.button}>View Details</button>
        </Link>
        {/* Add to Cart */}
        <button onClick={handleAddToCart} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    maxWidth: "300px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  button: {
    background: "#0070f3",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
