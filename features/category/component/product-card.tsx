import { formattedPriceNumber } from "@/lib/formattedPriceNumber";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: number | string;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
  slug,
}: ProductCardProps) {
  return (
    <div className="w-full p-4">
      <div className="overflow-hidden group aspect-[4/3] relative">
        {/* Wrapper div for image zoom effect */}
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={500}
          className="transform  transition-transform duration-300 ease-in-out group-hover:scale-110 object-contain w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="mt-2 text-lg font-semibold hover:underline">
        <Link href={`/product/${slug}`}>{name}</Link>
      </div>
      <div className="text-gray-700">{formattedPriceNumber(price)}</div>
    </div>
  );
}
