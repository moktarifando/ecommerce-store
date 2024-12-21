"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Profile() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="relative group "
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <AiOutlineUser size={24} className="cursor-pointer" />
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 top-3 mt-2 bg-white shadow-md rounded-md py-2 w-40 z-10"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link
            href="/user/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            View Profile
          </Link>
          <Link
            href="/user/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Orders
          </Link>
        </div>
      )}
    </nav>
  );
}
