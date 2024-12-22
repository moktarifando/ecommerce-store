"use client";

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";

import BreadCrumb from "@/features/category/component/breadcrumb";
import PageTitle from "@/features/category/component/page-title";
import { formatPathUrlToTitle } from "@/lib/formatPathUrlToTitle";

import FilterSidebar from "@/features/category/component/filter-sidebar";
import GridDisplay from "@/features/category/component/grid-display";
import ProductCount from "@/features/category/component/product-count";
import SortFilter from "@/features/category/component/sort-filter";

export default function CategoryLayout() {
  const pathname = usePathname();

  const lastPathSegment = pathname.split("/").filter(Boolean).pop();
  const pathTitle = formatPathUrlToTitle(lastPathSegment);

  return (
    <div className="px-4">
      <div id="pathCategory&pageTitle">
        <BreadCrumb title={pathTitle} />
        <PageTitle pageTitle={pathTitle} />
      </div>
      <div id="filterSidebar&productCardGrid" className="flex mt-8 mb-4">
        <div className="min-w-[300px] w-[300px] h-[100vh] border flex-shrink-0">
          <Suspense
            fallback={
              <aside className="w-64 bg-white p-4 border-r border-gray-200"></aside>
            }
          >
            <FilterSidebar />
          </Suspense>
        </div>
        <div id="mainPageProductCardGrid" className="flex-grow">
          <div
            id="totalProductFiltered&sortFilter"
            className="flex justify-between pt-2 pb-6"
          >
            <ProductCount />
            <SortFilter />
          </div>
          <GridDisplay />
        </div>
      </div>
    </div>
  );
}
