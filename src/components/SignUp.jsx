import React, { useState } from "react";
import LogIn from "./LogIn";

const SignUp = () => {
  const [logIn, setLogIn] = useState(false);

  return (
    <section className="my-10 ">
      <div className="flex flex-col items-center  ">
        <div className="flex items-center justify-center border-2 mb-10 rounded-[5px] overflow-hidden">
          <button
            onClick={() => setLogIn(false)}
            className={`py-2 px-4 cursor-pointer border-r border-gray-400 ${
              !logIn ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setLogIn(true)}
            className={`py-2 px-4 cursor-pointer ${
              logIn ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            LOG IN
          </button>
        </div>
        <div className="my-5">
          {logIn ? (
            <LogIn />
          ) : (
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="focus:outline-none border-2 border-y-gray-800 p-2 w-100 rounded-[5px] "
              />
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setLogIn(true);
                }}
                className="text-sm text-end underline text-gray-600 mb-5"
                href=""
              >
                Already have Account ? Log In
              </a>
              <button
                type="submit"
                className="bg-black text-white p-3 rounded-full cursor-pointer"
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
