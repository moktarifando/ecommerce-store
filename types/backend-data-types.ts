export interface Product {
  id: string; // UUID
  name: string;
  category: string;
  normalPrice: number; // Normal price as a number
  discountPrice: number; // Discounted price as a number
  description: string;
  imageUrl: string; // URL of the product image
  slug: string; // URL-friendly unique identifier for the product
}

export interface ProductApiResponse {
  products: Product[];
  totalProducts: number;
}
