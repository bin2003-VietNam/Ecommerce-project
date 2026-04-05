"use client";

import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="relative w-[350px]">
      <input
        type="text"
        placeholder="Tìm kiếm laptop và phụ kiện"
        className="w-full rounded-full bg-gray-100 py-2 pl-4 pr-10 outline-none focus:ring-2 focus:ring-gray-300"
      />

      <CiSearch
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 cursor-pointer"
      />
    </div>
  );
}

export default SearchBar;
