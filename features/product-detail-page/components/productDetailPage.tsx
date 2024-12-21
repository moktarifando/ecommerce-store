"use client";

import { useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  normalPrice: number;
  discountPrice?: number;
  slug: string;
  productItems: {
    id: string;
    options: { [key: string]: string };
    stock: number;
    images: string[];
  }[];
  options: { [key: string]: string[] };
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const [topImage, setTopImage] = useState<string>(
    product.productItems[0].images[0]
  );

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionClick = (optionKey: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionKey]: value,
    }));
    console.log("Selected Options:", {
      ...selectedOptions,
      [optionKey]: value,
    });
  };

  const {
    name,
    description,
    normalPrice,
    discountPrice,
    productItems,
    options,
  } = product;

  return (
    <div className="container mx-auto p-4">
      {/* Product Header */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={topImage}
            alt={name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-gray-600 mb-4">{description}</p>

          {/* Pricing */}
          <div className="mb-4">
            {discountPrice ? (
              <>
                <p className="text-xl font-semibold text-red-500">
                  Rp {discountPrice.toLocaleString()}
                </p>
                <p className="text-gray-500 line-through">
                  Rp {normalPrice.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="text-xl font-semibold text-gray-800">
                Rp {normalPrice.toLocaleString()}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="mb-4">
            {Object.keys(options).map((optionKey) => (
              <div key={optionKey} className="mb-2">
                <h3 className="font-medium">{optionKey}:</h3>
                <div className="flex gap-2 mt-2">
                  {options[optionKey].map((value) => (
                    <button
                      key={value}
                      className={
                        selectedOptions[optionKey] === value
                          ? "bg-gray-200 px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                          : "px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
                      }
                      onClick={() => handleOptionClick(optionKey, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stock Information */}
          <div className="mt-8 mb-8">
            <h2 className="text-lg font-semibold mb-4">Stock Information</h2>
            <ul className="list-disc list-inside">
              {productItems.map((item) => (
                <li key={item.id}>
                  <strong>{item.options.Storage}:</strong> {item.stock} in stock
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Images */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">More Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productItems.map((item) =>
            item.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={name}
                className="w-full rounded-lg shadow"
                onClick={() => setTopImage(image)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
