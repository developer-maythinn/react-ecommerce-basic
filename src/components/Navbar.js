"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav style={styles.navbar}>
      <Link href="/">
        <h1 style={styles.logo}>MyShop</h1>
      </Link>
      <Link href="/checkout">
        <div style={styles.cart}>
          <span>🛒</span>
          <span style={styles.cartCount}>{totalCount}</span>
        </div>
      </Link>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "white",
    position: "relative", // Ensure it doesn't overlap the content
    zIndex: 10, // Ensure it stays above other content
  },
  logo: {
    cursor: "pointer",
    fontSize: "24px",
    color: "#0070f3",
  },
  cart: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  cartCount: {
    background: "#0070f3",
    color: "white",
    borderRadius: "50%",
    padding: "4px 8px",
    marginLeft: "8px",
    fontSize: "14px",
    minWidth: "20px",
    textAlign: "center",
  },
};
