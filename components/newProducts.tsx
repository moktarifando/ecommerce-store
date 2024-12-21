import Link from "next/link";
import ViewAllButton from "./custom-component/shopnow-viewnow-button";
import H1 from "./custom-component/h1";
import ProductCard from "./custom-component/product-card";

export default function NewProducts() {
  return (
    <div className="px-14 py-16">
      <div className="flex justify-between items-center">
        <H1>New Products</H1>
        <Link href="/category/new-products">
          <ViewAllButton>Lihat Semua</ViewAllButton>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 ">
        <ProductCard
          title="Product Title"
          price={100000}
          imageUrl="/apple_watch.webp"
        />
        <ProductCard
          title="Product Title"
          price={100000}
          imageUrl="/mini_portable_bluetooth_speaker.webp"
        />
        <ProductCard
          title="Product Title"
          price={100000}
          imageUrl="/apple_watch.webp"
        />
        <ProductCard
          title="Product Title"
          price={100000}
          imageUrl="/mini_portable_bluetooth_speaker.webp"
        />
      </div>
    </div>
  );
}
