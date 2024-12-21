import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export default function Wishlist() {
  const wishlistCount = 2;
  return (
    <Link href="/user/wishlist" className="relative">
      <AiOutlineHeart size={24} className="cursor-pointer" />
      {wishlistCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {wishlistCount}
        </span>
      )}
    </Link>
  );
}
