import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center  flex-col h-screen leading-relaxed tracking-widest">
      <div className="w-150 ">
        <DotLottieReact
          src="https://lottie.host/27421044-1ab8-4e94-9956-a20142d052be/TzjwtPlGXR.lottie"
          loop
          autoplay
        />
      </div>
      <h1 className="text-3xl sm:text-5xl uppercase font-semibold">
        Error 404
      </h1>
      <p className="text-2xl sm:text-4xl uppercase mt-2 prata font-semibold">
        Page Not Found
      </p>
      <div className="flex items-center gap-3">
        <NavLink
          className="bg-pink-300 px-3 sm:px-10 text-sm sm:text-base py-2 rounded-full mt-10 uppercase font-semibold"
          to="/"
        >
          Go to Home
        </NavLink>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-pink-300 px-3 cursor-pointer sm:px-10 text-sm sm:text-base py-2 rounded-full mt-10 uppercase font-semibold"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
