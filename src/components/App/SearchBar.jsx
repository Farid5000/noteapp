// use client digunakan untuk menambah action yang dapat dilakukan contoh onclick

"use client";

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-slate-100 p-2 rounded-full flex items-center gap-6">
      <Search size={16} />
      <input placeholder="Search something..." />
    </div>
  );
};

export default SearchBar;
