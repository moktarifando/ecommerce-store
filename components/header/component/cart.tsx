import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  const cartCount = 4;
  return (
    <Link href="/user/cart" className="relative">
      <AiOutlineShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
}
