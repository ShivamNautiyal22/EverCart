import React from "react";
import HeroImage from "/hero.jpg";
import Shop from "./Shops";
import Services from "./Services";
import Newsletter from "../components/Newsletter"
import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-between my-10 rounded-2xl overflow-hidden tracking-wide leading-relaxed antialiased border-2 border-gray-300">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div data-aos="fade-right" className="text-[#121212]">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className=" font-semibold text-sm md:text-base">
                  OUR BESTSELLERS
                </p>
              </div>
              <h1 className="text-3xl sm:py-1 lg:text-5xl leading-relaxed prata">
                Latest Arrivals
              </h1>
              <NavLink to="/collection" className="flex items-center gap-2 group pt-4 cursor-pointer">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[2px] bg-[#414141] group-hover:w-25 duration-300"></p>
              </NavLink>
            </div>
          </div>
          <img
            className="w-full sm:w-[40%]"
            src={HeroImage}
            alt="hero image"
            loading="lazy"
          />
        </div>
      </section>
      <Shop />
      <Services />
      <Newsletter />
    </>
  );
};

export default Home;
