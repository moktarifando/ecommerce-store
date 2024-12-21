import Banner from "@/components/banner";
import NewProducts from "@/components/newProducts";
import ProductSpotlight from "@/components/productSpotlight";
import ShopByCategory from "@/components/shopByCategory";
import TopSellers from "@/components/topSellers";

export default function Home() {
  return (
    <main>
      <Banner />
      <NewProducts />
      <ShopByCategory />
      <TopSellers />
      <ProductSpotlight />
    </main>
  );
}
