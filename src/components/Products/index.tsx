"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/interfaces";
import { BackButton, ProductCard } from "@/components";
import { usePathname, useRouter } from "next/navigation";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white text-xl">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-10 bg-black flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 md:px-10 py-5 md:py-10">
      {pathname !== "/" && <BackButton />}
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
