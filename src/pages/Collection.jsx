import React, { useState } from "react";
import AllProducts from "../components/AllProducts";
import SearchBar from "../components/SearchBar"; // Don't forget to import it!

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("RANDOMLY");
  const [category, setCategory] = useState("");


  return (
    <section className="my-10 leading-relaxed tracking-wider">
      <div
        data-aos="fade-up"
        className="flex items-center justify-center gap-2 cursor-pointer mb-15"
      >
        <p className="font-semibold text-xl md:text-3xl">
          EVERCART <span className="text-gray-500">COLLECTION</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
      </div>

      {/* SearchBar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="tracking-wider flex sm:flex-row flex-col justify-center gap-4 sm:gap-10">
        <select
          data-aos="fade-up"
          data-aos-duration="800"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="block w-full p-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none"
        >
          <option value="RANDOMLY">RANDOMLY</option>
          <option value="HIGH_TO_LOW">HIGH TO LOW</option>
          <option value="LOW_TO_HIGH">LOW TO HIGH</option>
        </select>

        <select
        data-aos="fade-up" 
        data-aos-duration="1000"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none"
        >
          <option value="">ALL CATEGORIES</option>
          <option value="men's clothing">MENS CLOTHING</option>
          <option value="women's clothing">WOMENS CLOTHING</option>
          <option value="jewelery">JEWELERY</option>
          <option value="electronics">ELECTRONICS</option>
        </select>
      </div>

      {/* Filters */}
      <div className="tracking-wider flex justify-center gap-10 my-5">
        {/* your selects... unchanged */}
      </div>

      {/* AllProducts with searchQuery */}
      <AllProducts
        searchQuery={searchQuery}
        sortOption={sortOption}
        category={category}
      />
    </section>
  );
};

export default Collection;
