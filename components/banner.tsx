import Link from "next/link";
import ViewAllButton from "./custom-component/shopnow-viewnow-button";

export default function Banner() {
  return (
    <div
      className="bg-fit bg-center bg-no-repeat w-full aspect-auto"
      style={{ backgroundImage: "url(/banner_bg.webp)" }}
    >
      <div className="flex flex-col items-center gap-14 pt-36 sm:pl-24 sm:items-start">
        <div className="text-white text-4xl font-semibold md:text-6xl md:font-semibold lg:text-8xl lg:font-bold ">
          Belanja Di Toko Elektronik <br /> Paling Terpercaya
        </div>
        <div className="text-2xl md:text-3xl text-white font-extralight">
          Dapatkan Diskon Setiap Pembelian!
        </div>
        <Link href="/category/all-products">
          <ViewAllButton>Belanja Sekarang</ViewAllButton>
        </Link>
      </div>
    </div>
  );
}
