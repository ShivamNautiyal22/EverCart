import React, { useEffect, useState } from "react";
import Logo from "/evercart.png";
import { CircleUser, ShoppingBag, AlignRight, X, Car } from "lucide-react";
import { NavLink } from "react-router";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const NavLinks = [
    { name: "HOME", to: "" },
    { name: "COLLECTION", to: "collection" },
    { name: "ABOUT", to: "about" },
    { name: "CONTACT", to: "contact" },
  ];

  const [menuIcon, setMenuIcon] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);

  const TotalCartProducts =
    JSON.parse(localStorage.getItem("CartProducts")) || [];

  return (
    <>
      <section className="py-4 border-b-1 border-gray-300">
        <nav className="flex items-center justify-between ">
          <NavLink to="/">
            <img data-aos="fade-right" src={Logo} alt="evercart logo" width={130} />
          </NavLink>
          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <div className="flex items-center gap-5 ">
                {NavLinks.map((item, index) => {
                  const duration = 500 + index * 200; // 500ms + 200ms * index
                  const delay = index * 100;
                  return (
                    <NavLink
                    data-aos="fade-right"
            data-aos-duration={duration}
            data-aos-delay={delay}
                      key={index}
                      to={item.to}
                      className="tracking-wider leading-relaxed antialiased "
                      onClick={() => setSearchIcon(false)}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-3 ">
              <NavLink  to="/sign-up" onClick={() => setSearchIcon(false)}>
                <CircleUser />
              </NavLink>
              <NavLink
                to="/cart"
                className="relative inline-flex items-center justify-center p-2 rounded-full "
                onClick={() => setSearchIcon(false)}
              >
                <ShoppingBag className="w-6 h-6 text-gray-800" />
                <span className="absolute top-0 right-0 bg-black text-white text-xs leading-none rounded-full w-5 h-5 flex items-center justify-center">
                  {TotalCartProducts.length}
                </span>
              </NavLink>

              <a
                className="block md:hidden"
                onClick={() => setMenuIcon(!menuIcon)}
              >
                <AlignRight size={28} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`md:hidden fixed z-50 top-0 left-0 bg-[#fef5fd] h-screen w-full transform transition-transform duration-300 ease-in-out ${
              menuIcon ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menu */}
            <div className="relative z-50">
              <div
                onClick={() => setMenuIcon(false)}
                className="px-3 cursor-pointer py-2 flex items-center justify-between border-b"
              >
                <img src={Logo} alt="logo" width={120} />
                <p className="flex items-center text-xl">
                  <X className="mr-2" />
                  <span>Back</span>
                </p>
              </div>

              <div className="w-full">
                {NavLinks.map((item, index) => {
                  const isLast = index === NavLinks.length - 1;

                  return (
                    <p key={index} className="w-full">
                      <NavLink
                        to={item.to}
                        onClick={() => setMenuIcon(false)}
                        className={`block w-full p-3 font-normal text-base border-gray-400 border-t ${
                          isLast ? "border-b" : ""
                        }`}
                      >
                        {item.name}
                      </NavLink>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </section>
      {searchIcon && <SearchBar setSearchIcon={setSearchIcon} />}
    </>
  );
};

export default Navbar;
