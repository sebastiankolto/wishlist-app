"use client";
import { useWishlist } from "@/lib/store/wishlist";

const NavBar = () => {
  const items = useWishlist((s) => s.items);
  return (
    <nav className="flex w-full py-4 px-5 md:px-10 fixed top-0 left-0 justify-between z-50 bg-black text-white">
      <a href={"/"}>Wishlist App</a>
      <div className="flex gap-x-4">
        <a
          href={"/products"}
          className="hover:text-white/80 text-white px-2 py-1"
        >
          products
        </a>
        <a
          className="hover:text-white/80 text-white px-2 py-1"
          href={"/wishlist"}
        >
          wishlist {items.length > 0 ? items.length : ""}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
