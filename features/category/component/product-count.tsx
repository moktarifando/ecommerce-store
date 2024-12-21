"use client";

import { ProductApiResponse } from "@/types/backend-data-types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function ProductCount() {
  //get search params if any, then convert to string
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  //client-side fetching with tanstack query
  const { data, isLoading, isError, isSuccess } = useQuery<ProductApiResponse>({
    queryKey: ["products", queryString],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8080/api/products${
          queryString ? `?${queryString}` : ""
        }`,
        {
          mode: "cors",
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.statusText}`);
      }
      return res.json();
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isSuccess && data.totalProducts === 0) return <div>0 product</div>;
  if (isError) return <div>Failed to fetch total products</div>;

  return <div>{data?.totalProducts} product</div>;
}
