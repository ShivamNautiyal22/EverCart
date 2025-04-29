import React, { useState } from "react";
import Logo from "/evercart.png";
import { Search, CircleUser, ShoppingBag, AlignRight, X } from "lucide-react";
import { NavLink } from "react-router";


const Navbar = () => {
  const NavLinks = [
    { name: "HOME", to: "" },
    { name: "COLLECTION", to: "collection" },
    { name: "ABOUT", to: "about" },
    { name: "CONTACT", to: "contact" },
  ];

  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <section className="py-4 border-b-1 border-gray-300">
      <nav className="flex items-center justify-between ">
        <div>
          <img src={Logo} alt="evercart logo" width={130} />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <div className="flex items-center gap-5 ">
              {NavLinks.map((item, index) => {
                return (
                  <NavLink key={index} to={item.to} className="tracking-wider leading-relaxed antialiased ">
                    <a href="#">{item.name}</a>
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-5 ">
            <a href="#">
              <Search />
            </a>
            <a href="#">
              <CircleUser />
            </a>
            <a href="#">
              <ShoppingBag />
            </a>
            <a
              href="#"
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
            menuIcon ? 'translate-x-0' : '-translate-x-full'
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
                    <a
                      href={`#${item.to}`}
                      onClick={() => setMenuIcon(false)}
                      className={`block w-full p-3 font-normal text-base border-gray-400 border-t ${
                        isLast ? "border-b" : ""
                      }`}
                    >
                      {item.name}
                    </a>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
