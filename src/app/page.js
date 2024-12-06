"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products?.length > 0 && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
