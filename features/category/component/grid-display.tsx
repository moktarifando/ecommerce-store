"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import ProductCard from "./product-card";
import { ProductApiResponse } from "@/types/backend-data-types";
import { Skeleton } from "@/components/ui/skeleton";

export default function GridDisplay() {
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

  //component rendered when loading, skeleton of product card
  if (isLoading) {
    return (
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm">
            {/* Customize the skeleton content as needed */}
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[150px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  //component rendered when error
  if (isError) {
    return <div>{isError}</div>;
  }

  //component rendered when no product matches to the query
  if (isSuccess && data.products.length === 0) {
    return <div>No Products Available</div>;
  }

  //component rendered when success and there are products matched to the query
  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.discountPrice}
          imageUrl={product.imageUrl}
          slug={product.slug}
        />
      ))}
    </div>
  );
}
