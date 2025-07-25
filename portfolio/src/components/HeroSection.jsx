import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-start px-6 md:px-16 lg:px-36 overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 bg-[url('/home.jpg')] bg-cover bg-center brightness-50 z-0"></div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-start justify-center">
        <h1 className="text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl leading-none font-bold">
          Namaste
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-2xl mt-2">
          A Warm Welcome!
        </h1>

        <p className="max-w-md mt-4">
          Deeper dimensions of human life become visible one after the other
          when one tackles the obstacle created by physicality.
        </p>

        <button
          className="flex items-center gap-1 text-sm font-medium px-6 py-3 border  rounded-full mt-4  cursor-pointer"
          onClick={() => navigate("/")}
        >
          Explore Blogs
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
