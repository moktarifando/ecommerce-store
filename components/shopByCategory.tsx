import CategoryCard from "./custom-component/category-card";
import H1 from "./custom-component/h1";

export default function ShopByCategory() {
  return (
    <div className="px-14 py-16 ">
      <H1>Shop By Category</H1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-10">
        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />

        <CategoryCard
          backgroundImageUrl="/bg_mobile_category.webp"
          categoryName="Mobile and Wearable Tech"
          linkUrl="/category/mobiles"
        />
      </div>
    </div>
  );
}
