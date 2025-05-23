import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="800" className="flex items-center justify-between my-10 border-2 border-gray-600 w-[90%] md:w-[70%] rounded-[5px] mx-auto px-4">
      <input
        type="text"
        className="focus:outline-none py-2 pr-5 text-xl w-full"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
