import Link from "next/link";
import H1 from "./custom-component/h1";
import ViewAllButton from "./custom-component/shopnow-viewnow-button";
import ProductCard from "./custom-component/product-card";

export default function TopSellers() {
  return (
    <div className="px-14 py-16">
      <div className="flex justify-between items-center">
        <H1>Top Sellers</H1>
        <Link href="/category/top-sellers">
          <ViewAllButton>Lihat Semua</ViewAllButton>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10">
        <ProductCard
          title="Space Buds True Wireless Earbud Headphones"
          price="350000"
          imageUrl="/earbuds.webp"
        />

        <ProductCard
          title="Pantony 180 20.0 Megapixel Digital Camera"
          price="1500000"
          imageUrl="/pantony.webp"
        />

        <ProductCard
          title="SDK Portable Bluetooth Speaker"
          price="1200000"
          imageUrl="/bluetooth_speaker.webp"
        />

        <ProductCard
          title="Smartphone Z Pixel Max 128GB Unlocked"
          price="1000000"
          imageUrl="/smartphone_zpixelmax.webp"
        />
      </div>
    </div>
  );
}
