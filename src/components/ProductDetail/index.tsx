"use client";
import React from "react";
import { useWishlist } from "@/lib/store/wishlist";
import { Product } from "@/types/interfaces";
import Image from "next/image";
import heart from "../../../public/heart.svg";
import heartOutline from "../../../public/heart-outline.svg";
import { router } from "next/client";
import { BackButton } from "@/components";

interface Props {
  product: Product;
}

const ProductDetail: React.FC<Props> = ({ product }) => {
  const isInWishlist = useWishlist((s) => s.isInWishlist(product.id));
  const addItem = useWishlist((s) => s.addItem);
  const removeItem = useWishlist((s) => s.removeItem);
  const [mounted, setMounted] = React.useState(false);

  const toggleWishlist = () => {
    if (isInWishlist) removeItem(product.id);
    else addItem(product);
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="pt-20 px-5 md:px-10 bg-black">
      <BackButton />
      <div className="w-full text-white items-center mx-auto max-w-[640px] mt-16 flex flex-col bg-white/5 p-8 gap-y-8 rounded-xl relative justify-between">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt={product.title}
          className="aspect-[1/1] object-center object-contain"
        />
        <h2 className="text-[32px] text-start self-start font-black">
          {product.title}
        </h2>
        <div className="flex w-full flex-wrap justify-between items-center relative">
          <span className="flex px-4 py-2 rounded-3xl bg-white/10">
            {product.category}
          </span>
          <span className="text-[24px] font-extrabold absolute left-[50%] translate-x-[-50%]">
            {product.price} $
          </span>
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
        <div className="flex gap-x-4">
          <span>{product.rating.rate} ★</span>
          <span>{product.rating.count} #</span>
        </div>

        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
