import React from "react";

const LogIn = () => {
  return (
    <div className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        className="focus:outline-none border-2 border-y-gray-800 p-2 max-w-100 rounded-[5px] "
      />
      <input
        type="password"
        placeholder="Password"
        className="focus:outline-none border-2 border-y-gray-800 p-2 w-100 rounded-[5px] "
      />
      
      <a className="text-sm text-end underline text-gray-600 mb-5" href="">
        Not have Account? Create New One
      </a>
      <button
        type="submit"
        className="bg-black text-white p-3 rounded-full cursor-pointer"
      >
        Log In
      </button>
    </div>
  );
};

export default LogIn;
