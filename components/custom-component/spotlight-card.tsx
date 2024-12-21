import Link from "next/link";
import ViewAllButton from "./shopnow-viewnow-button";
import { formattedPriceNumber } from "@/lib/formattedPriceNumber";

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
      className="bg-cover bg-center bg-no-repeat relative w-full aspect-[4/3] md:aspect-[4/3] rounded-3xl"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:top-5 md:left-5  lg:top-8 lg:left-8 text-lg  lg:text-3xl text-white font-semibold space-y-2 text-center md:text-left">
        <h1>{categoryName}</h1>
        {price && <h2>{formattedPriceNumber(price)}</h2>}
      </div>

      <Link
        href={linkUrl}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 transform md:translate-x-0  md:left-auto  md:bottom-5 md:right-5"
      >
        <ViewAllButton>Belanja Sekarang</ViewAllButton>
      </Link>
    </div>
  );
}
