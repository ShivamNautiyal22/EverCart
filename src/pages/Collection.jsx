import React, { useState } from "react";
import AllProducts from "../components/AllProducts";
import SearchBar from "../components/SearchBar"; // Don't forget to import it!

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="my-10 leading-relaxed tracking-wider">
      <div className="flex items-center justify-center gap-2 cursor-pointer mb-15">
        <p className="font-semibold text-xl md:text-3xl">
          EVERCART <span className="text-gray-500">COLLECTION</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
      </div>

      {/* SearchBar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="tracking-wider flex  justify-center gap-10">
        <select className="block w-full p-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none ">
          <option value="option0">RANDOMLY</option>
          <option value="option1">HIGH TO LOW</option>
          <option value="option2">LOW TO HIGH</option>
        </select>
        <select className="block w-full p-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:border-blue-500 focus:ring-blue-500">
          <option value="option1">MENS CLOTHING</option>
          <option value="option2">WOMENS CLOTHING</option>
          <option value="option3">JEWELERY</option>
          <option value="option4">ELECTRONICS</option>
        </select>
      </div>

      {/* Filters */}
      <div className="tracking-wider flex justify-center gap-10 my-5">
        {/* your selects... unchanged */}
      </div>

      {/* AllProducts with searchQuery */}
      <AllProducts searchQuery={searchQuery} />
    </section>
  );
};

export default Collection;
