import React from "react";
import contact from "/contact.jpg";
import { Instagram, Facebook ,Twitter  } from 'lucide-react';


const Contact = () => {
  return (
    <section className="my-15 leading-relaxed tracking-wider">
      <div data-aos="fade-up" className="flex items-center justify-center gap-2 cursor-pointer mb-15">
        <p className="font-semibold text-xl md:text-3xl">
          CONTACT <span className="text-gray-500">US</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
        <img data-aos="fade-up-right"
          data-aos-duration="800" src={contact} alt="" width={400} />
        <div data-aos="fade-up-left"
          data-aos-duration="800">
          <div className="mb-6 text-center">
            <h1 className="text-2xl mb-4">Our Store</h1>
            <div className="mb-4">
                <p className="text-gray-700">97 Warren St, RG7 2ES</p>
                <p className="text-gray-700">9West End Green, United Kingdom</p>
            </div>
            <div>
                <p className="text-gray-700">Tel : +44 012 3456 7891 </p>
                <p className="text-gray-700">Email : your@evercart.com</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl mb-5 text-center">Follow Us On</h1>
            <div className="mb-4 flex gap-4 justify-center">
              <a href="" className="bg-pink-200 p-3 rounded-full hover:scale-110 duration-300"><Instagram/></a>
              <a href="" className="bg-pink-200 p-3 rounded-full hover:scale-110 duration-300"><Facebook/></a>
              <a href="" className="bg-pink-200 p-3 rounded-full hover:scale-110 duration-300"><Twitter/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
