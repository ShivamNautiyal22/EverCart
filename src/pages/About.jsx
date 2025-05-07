import React from "react";
import aboutlogo from "/about.jpg";
const About = () => {
  return (
    <section className="my-10 leading-relaxed tracking-wider ">
      <div className="flex items-center justify-center gap-2 cursor-pointer mb-15">
        <p className="font-semibold text-xl md:text-3xl">
          ABOUT <span className="text-gray-500">US</span>
        </p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-6">
        <img src={aboutlogo} alt="" width={400} />
        <div>
          <p className="text-[15px] leading-relaxed tracking-wider mb-4">
            EverCart is a customer-first e-commerce platform designed to
            simplify online shopping for everyone. From daily essentials to
            trendy lifestyle products, we bring together a wide range of
            high-quality items under one digital roof. Our goal is to offer a
            seamless and enjoyable shopping experience with fast delivery,
            secure payment, and friendly support.
          </p>
          <p className="text-[15px] leading-relaxed tracking-wider mb-4">
            At EverCart, our mission is to make online shopping smarter, faster,
            and more personal. We focus on curating products that matter to real
            people and their everyday lives — ensuring affordability,
            authenticity, and convenience. We’re constantly innovating to bring
            you better deals, exclusive collections, and a platform that grows
            with your needs.
          </p>
          <h1>
            <p className="text-base font-semibold mb-2">Developer</p>
            <p className="text-[15px] leading-relaxed tracking-wider">
              EverCart was crafted with care by <strong>Shivam Nautiyal</strong>
              , a self-taught web developer passionate about creating smooth and
              scalable online experiences. This platform is the result of
              countless hours of coding, debugging, and designing. You can
              explore more of Shivam's work at{" "}
              <a
                href="https://its-shivam-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                Shivam's Portfolio
              </a>
              , or connect via{" "}
              <a
                href="https://github.com/ShivamNautiyal22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                GitHub
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/shivam-nautiyal-4ba505237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                LinkedIn
              </a>
              . Every click you make on EverCart is powered by a dream turned
              into code.
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
