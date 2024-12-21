import Link from "next/link";
import ViewAllButton from "./shopnow-viewnow-button";

interface categoryCardProps {
  backgroundImageUrl: string;
  categoryName: string;
  linkUrl: string;
  price?: string;
}

export default function CategoryCard({
  backgroundImageUrl,
  categoryName,
  linkUrl,
  price,
}: categoryCardProps) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative w-full aspect-[4/3] md:aspect-[16/7] rounded-3xl"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="absolute top-3 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:top-5 md:left-5  lg:top-8 lg:left-8 text-lg  lg:text-3xl text-white font-semibold">
        {categoryName}
      </h1>

      {price && <h2>{price}</h2>}

      <Link
        href={linkUrl}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 transform md:translate-x-0  md:left-auto  md:bottom-5 md:right-5"
      >
        <ViewAllButton>Belanja Sekarang</ViewAllButton>
      </Link>
    </div>
  );
}
