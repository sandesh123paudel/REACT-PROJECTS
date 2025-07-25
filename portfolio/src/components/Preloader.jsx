import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-close after 3 seconds (optional)
    const timer = setTimeout(() => {
      closePreloader();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePreloader = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500); // Match this with your transition duration
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-all duration-500 ease-in-out ${
        isClosing ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#d1953b] opacity-20 blur-lg rounded-full scale-125"></div>
        <img
          src="/logo.png"
          alt="SA Logo"
          className={`relative h-24 ${isClosing ? "" : "animate-bounce"}`}
        />
      </div>
    </div>
  );
};

export default Preloader;
