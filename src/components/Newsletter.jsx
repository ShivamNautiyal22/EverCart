import React from "react";

const Newsletter = () => {
  return (
    <div className="my-20 px-4 leading-relaxed tracking-wider flex flex-col items-center text-center">
      <h1 className="text-3xl mb-3 prata">Join Our Newsletter</h1>
      <p className="text-gray-500 mb-6">Be the first to hear about new features, content, and updates.</p>
  
      <div className="bg-white border-2 rounded-[5px] w-full max-w-120 flex flex-col sm:flex-row overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-3 focus:outline-none text-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-5 py-3 text-sm cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
  
};

export default Newsletter;
