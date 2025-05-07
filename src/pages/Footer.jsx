import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const NavLinks = [
    { name: "Home", to: "/" },
    { name: "Collection", to: "collection" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];
  return (
    <section className=" border-t-2 border-gray-300">
      <div className=" tracking-wider flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-15 text-sm ">
        <div>
          <img
            data-aos="fade-up"
            src="/evercart.png"
            alt="evercart logo"
            width={130}
          />
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="w-full md:w-2/3 text-gray-600"
          >
            <span className="text-black prata">EverCart</span> is your one-stop
            destination for seamless online shopping. Discover a wide range of
            products, from everyday essentials to exclusive finds. Fast
            delivery, secure payments, and a smooth user experience — all in one
            place.
          </p>
        </div>
        <div>
          <p data-aos="fade-up" className="text-xl font-medium mb-5">
            COMPANY
          </p>
          <div className="flex flex-col gap-1 text-gray-600">
            {NavLinks.map((item, index) => {
              const duration = 500 + index * 200; // 500ms + 200ms * index
              const delay = index * 50;
              return (
                <NavLink
                  data-aos="fade-up-right"
                  data-aos-duration={duration}
                  data-aos-delay={delay}
                  to={item.to}
                  key={index}
                  className="tracking-wider leading-relaxed "
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div>
          <p data-aos="fade-up" className="text-xl font-medium mb-5">
            GET IN TOUCH
          </p>
          <p
            data-aos="fade-up-right"
            data-aos-duration="800"
            className="text-gray-600 mb-1"
          >
            +91-12345-67890
          </p>
          <p
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="text-gray-600"
          >
            Myemail@gmail.com
          </p>
        </div>
      </div>
      <div >
        <hr className="text-gray-400" />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @Evercart - All Right Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
