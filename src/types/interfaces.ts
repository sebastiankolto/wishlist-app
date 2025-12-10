export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface WishlistStore {
  items: Product[];
  addItem(product: Product): void;
  removeItem(productId: number): void;
  isInWishlist(productId: number): boolean;
  clearWishlist(): void;
}
