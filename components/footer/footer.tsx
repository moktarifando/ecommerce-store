import Link from "next/link";
import { Button } from "../ui/button";
import { footerLinks, shopCategories, socialMediaLinks } from "./footer-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevents FontAwesome from adding its own CSS

import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faGooglePay,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white p-8">
      <div
        id="smrt&subscribednewsletter"
        className="grid grid-cols-1 md:grid-cols-2 gap-32 "
      >
        <div id="smrt">
          <h1 className="text-xl font-semibold mb-8">SMRT</h1>
          <p className="">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who&apos;s behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
        </div>
        <div id="subscribe">
          <h1 className="text-lg  font-semibold mb-40">
            Subscribe to Our Newsletter
          </h1>
          <form className="">
            <div className="flex flex-col gap-8">
              <label>Email *</label>
              <input
                name="email"
                type="email"
                className="p-2 bg-inherit border-b-2 border-white  focus:bg-inherit focus:outline-none focus:border-black hover:border-black transition-colors duration-300"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input name="subscribe-newsletter" type="checkbox" />
              <label className="text-sm">
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <Button
              variant="default"
              type="submit"
              className="bg-inherit px-32 py-2 text-lg rounded-3xl outline outline-white outline-1 mt-8 hover:outline-none hover:bg-black hover:text-white focus:outline-none"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div
        id="shopLegalHeadquartersSocials"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
      >
        <div id="shop">
          <h1 className="text-xl font-semibold mb-2">Shop</h1>
          <ul className="text-sm leading-6">
            {shopCategories.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="legal">
          <h1 className="text-xl font-semibold mb-2">Legal</h1>
          <ul className="text-sm leading-6">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="socials">
          <h1 className="text-xl font-semibold mb-2">Social</h1>
          <ul className="text-sm leading-6">
            {socialMediaLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="headquarters">
          <h1 className="text-xl font-semibold mb-2">Headquarters</h1>
          <p className="text-sm leading-6 ">
            500 Terry Francine Street <br /> San Francisco, CA 94158 <br />
            info@mysite.com <br /> 123-456-7890
          </p>
        </div>
      </div>
      <div
        id="paySecurely&2035BySmrt"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 md:border-t"
      >
        <div id="paySecurely" className="flex gap-8 items-center mt-4">
          <h1 className="text-sm">Pay Securely with</h1>
          <div className="flex gap-4 items-center text-3xl">
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcPaypal} />
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faGooglePay} />
            <FontAwesomeIcon icon={faApplePay} />
          </div>
        </div>
        <div id="2035BySmrt" className="mt-4">
          <h1>&copy; 2035 by SMRT. All right Reserved</h1>
        </div>
      </div>
    </footer>
  );
}
