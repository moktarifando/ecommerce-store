import React, { useState, useCallback, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

// Sample data for filters
const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];
const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

// Define types for the filters state
type Filters = {
  priceRange: [number, number];
  category: string[];
  colors: string[];
};

// Define a discriminated union type for `type` and `value`
type FilterChange =
  | { type: "priceRange"; value: [0 | 1, number] }
  | { type: "category"; value: string }
  | { type: "colors"; value: string };

export default function FilterSidebar() {
  const pathname = usePathname(); // Get current path
  const searchParams = useSearchParams(); // Get current query params
  const router = useRouter(); // To update query params

  // State for filters with updated default maxPrice
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 1000000000],
    category: [],
    colors: [],
  });

  // Generic handler for updating filters
  const handleFilterChange = useCallback(({ type, value }: FilterChange) => {
    setFilters((prev) => {
      switch (type) {
        case "priceRange": {
          const [index, newValue] = value;
          const newPriceRange = [...prev.priceRange] as [number, number];
          newPriceRange[index] = newValue;
          return { ...prev, priceRange: newPriceRange };
        }
        case "category": {
          const updatedCategory = prev.category.includes(value)
            ? prev.category.filter((c) => c !== value)
            : [...prev.category, value];
          return { ...prev, category: updatedCategory };
        }
        case "colors": {
          const updatedColors = prev.colors.includes(value)
            ? prev.colors.filter((c) => c !== value)
            : [...prev.colors, value];
          return { ...prev, colors: updatedColors };
        }
        default:
          return prev;
      }
    });
  }, []);

  // Reset all filters with updated default maxPrice
  const resetFilters = useCallback(() => {
    setFilters({
      priceRange: [0, 1000000000],
      category: [],
      colors: [],
    });
  }, []);

  // Update URL with search params whenever `filters` changes
  useEffect(() => {
    const searchParamsObj = new URLSearchParams(searchParams.toString());

    // Add price range to search params
    searchParamsObj.set("minPrice", String(filters.priceRange[0]));
    searchParamsObj.set("maxPrice", String(filters.priceRange[1]));

    // Add selected categories to search params
    if (filters.category.length > 0) {
      searchParamsObj.set("category", filters.category.join(","));
    } else {
      searchParamsObj.delete("category");
    }

    // Add selected colors to search params
    if (filters.colors.length > 0) {
      searchParamsObj.set("colors", filters.colors.join(","));
    } else {
      searchParamsObj.delete("colors");
    }

    // Push the updated search params
    router.push(`${pathname}?${searchParamsObj.toString()}`);
  }, [filters, pathname, router, searchParams]);

  // Initialize filters state based on URL query params
  useEffect(() => {
    const searchParamsObj = new URLSearchParams(searchParams.toString());

    const minPrice = parseInt(searchParamsObj.get("minPrice") || "0", 10);
    const maxPrice = parseInt(
      searchParamsObj.get("maxPrice") || "1000000000",
      10
    );
    const categoryFromUrl = searchParamsObj.get("category")?.split(",") || [];
    const colorsFromUrl = searchParamsObj.get("colors")?.split(",") || [];

    setFilters({
      priceRange: [minPrice, maxPrice],
      category: categoryFromUrl,
      colors: colorsFromUrl,
    });
  }, []); // Empty dependency array to run only once

  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="range"
            min="0"
            max="1000000000"
            value={filters.priceRange[0]}
            onChange={(e) =>
              handleFilterChange({
                type: "priceRange",
                value: [0, parseInt(e.target.value, 10)],
              })
            }
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="1000000000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange({
                type: "priceRange",
                value: [1, parseInt(e.target.value, 10)],
              })
            }
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`category-${category}`}
              checked={filters.category.includes(category)}
              onChange={() =>
                handleFilterChange({ type: "category", value: category })
              }
              className="mr-2"
            />
            <label htmlFor={`category-${category}`} className="text-sm">
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Colors</h3>
        {colors.map((color) => (
          <div key={color} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`color-${color}`}
              checked={filters.colors.includes(color)}
              onChange={() =>
                handleFilterChange({ type: "colors", value: color })
              }
              className="mr-2"
            />
            <label
              htmlFor={`color-${color}`}
              className="flex items-center text-sm"
            >
              <span
                className="inline-block w-4 h-4 mr-2 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
              ></span>
              {color}
            </label>
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Reset Filters
      </button>
    </aside>
  );
}
