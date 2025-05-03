import { X } from "lucide-react";
import React from "react";

const SearchBar = ({ setSearchIcon }) => {
  return (
    <div className="flex items-center justify-between my-5 border-2 border-gray-600 w-[90%] md:w-[70%] rounded-[5px] mx-auto px-4">
      <input
        type="text"
        className=" focus:outline-none py-2 pr-5 text-xl w-full"
        placeholder="Search "
      />
      <X
        className="cursor-pointer"
        strokeWidth={3}
        onClick={() => setSearchIcon(false)}
      />
    </div>
  );
};

export default SearchBar;
