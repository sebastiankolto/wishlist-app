"use client";
import { BackButton, ProductCard } from "@/components";
import { useWishlist } from "@/lib/store/wishlist";

export default function WishList() {
  const items = useWishlist((s) => s.items);
  const clearWishlist = useWishlist((s) => s.clearWishlist);
  return (
    <div className="min-h-screen text-white flex flex-col items-center gap-y-10 mt-10 bg-black px-5 md:px-10 py-5 md:py-10">
      <div className="flex justify-between items-center w-full">
        <BackButton />
        <h2>Wishlist screen</h2>
        {items.length > 0 && (
          <button
            className="text-red-500 bg-red-200 px-4 py-2 rounded-2xl"
            onClick={clearWishlist}
          >
            Clear items
          </button>
        )}
      </div>
      {items.length === 0 && <h2>No items added</h2>}
      <div className="auto-rows-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
