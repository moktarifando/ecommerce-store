"use client";
import ProductDetailPage from "@/features/product-detail-page/components/productDetailPage";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", slug],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8080/api/products/${slug}`);
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to fetch product</div>;

  return <ProductDetailPage product={data} />;
}
