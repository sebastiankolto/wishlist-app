import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/interfaces";

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const exists = get().items.some((p) => p.id === product.id);
        if (!exists) {
          set({ items: [...get().items, product] });
        }
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
      },

      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
);
