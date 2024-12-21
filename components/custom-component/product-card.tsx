import { formattedPriceNumber } from "@/lib/formattedPriceNumber";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number | string;
  imageUrl: string;
}

export default function ProductCard({
  title,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg w-full group">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-t-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-bold">{title}</h1>

        <p className="text-muted-foreground mt-2 break-words whitespace-normal">
          {formattedPriceNumber(price)}
        </p>
      </div>
    </div>
  );
}
