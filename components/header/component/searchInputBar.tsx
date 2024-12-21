"use client";

import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../../ui/input";
import { useState } from "react";

export default function SearchInputBar() {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  return (
    <div className="flex-grow">
      <div className="flex items-center relative justify-center md:justify-end">
        <CiSearch
          className={`hidden lg:block h-5 w-5 absolute ${
            isFocused ? "left-3" : "right-48"
          } duration-500 ease-in-out`}
        />
        <CiSearch className="lg:hidden h-5 w-5 absolute left-3" />
        <Input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`hidden lg:block rounded-full  border-black pl-10 pr-4 ${
            isFocused ? "w-full" : "w-56"
          } transition-all duration-500 ease-in-out`}
        />
        <Input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block lg:hidden rounded-full  border-black pl-10 pr-4 w-full"
        />
        {searchText && (
          <AiOutlineClose
            onClick={clearSearchText}
            className="h-3 w-3 absolute right-3 cursor-pointer hover:scale-125 transition-transform duration-400"
          />
        )}
      </div>
    </div>
  );
}
