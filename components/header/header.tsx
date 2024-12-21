import Link from "next/link";
import SearchInputBar from "./component/searchInputBar";
import LoginLogoutButton from "./component/loginLogoutButton";
import Profile from "./component/profile";
import Wishlist from "./component/wishlist";
import Cart from "./component/cart";

export default function Header() {
  return (
    <header>
      <div className="bg-black text-white text-center p-2 text-xs">
        Gratis Ongkos Kirim Ke Seluruh Indonesia
      </div>
      <div className="py-3 px-10 flex justify-between border-b-2">
        <div className="text-xl font-semibold">
          <Link href="/">HOME</Link>
        </div>
        <div className="flex gap-5 items-center">
          <LoginLogoutButton />

          <Profile />

          <Wishlist />

          <Cart />
        </div>
      </div>

      <div className="py-3 px-10 flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="flex gap-4 items-center text-sm ">
          <Link href="/category?category=mobile" className="hover:underline">
            Mobile & Wearable Tech
          </Link>
          <Link href="/category?category=camera" className="hover:underline">
            Drones & Cameras
          </Link>
          <Link
            href="/category?category=headphones"
            className="hover:underline"
          >
            Headphones & Speakers
          </Link>
          <Link href="/category?category=computers" className="hover:underline">
            Computers
          </Link>
          <Link href="/category?category=tablets" className="hover:underline">
            Tablets
          </Link>
          <Link
            href="/category?category=tv-home-cinema"
            className="hover:underline"
          >
            TV & Home Cinema
          </Link>
        </div>

        <SearchInputBar />
      </div>
    </header>
  );
}
