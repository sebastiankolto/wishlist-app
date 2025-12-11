"use client";
import React from "react";
import { useWishlist } from "@/lib/store/wishlist";
import { Product } from "@/types/interfaces";
import Image from "next/image";
import heart from "../../../public/heart.svg";
import heartOutline from "../../../public/heart-outline.svg";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isInWishlist = useWishlist((s) => s.isInWishlist(product.id));
  const addItem = useWishlist((s) => s.addItem);
  const removeItem = useWishlist((s) => s.removeItem);

  const toggleWishlist = () => {
    if (isInWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="w-full flex flex-col bg-white/5 p-6 gap-y-4 rounded-xl relative justify-between text-white">
        <div className="flex aspect-[1/1] items-center justify-center">
          <Image
            src={product.image}
            width={300}
            height={300}
            alt={product.title}
            className="aspect-[1/1] object-center object-contain"
          />
        </div>

        <h3 className="font-bold text-[18px]">{product.title}</h3>

        <div className="flex flex-row items-center justify-between">
          <h4 className="text-[16px]">{product.price} $</h4>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist();
            }}
          >
            {mounted && (
              <Image
                src={isInWishlist ? heart : heartOutline}
                width={40}
                height={40}
                alt="wishlist"
              />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
