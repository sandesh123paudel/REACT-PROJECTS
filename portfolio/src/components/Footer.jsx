import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-center mb-2 text-sm md:text-base  pt-6 pb-4 px-4 bg-transparent">
      <div className="flex justify-center gap-4 mb-2 text-xl">
        <a
          href="https://www.linkedin.com/in/sundeep-acharya-aa213123b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="Linked-In"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.instagram.com/sundeep_ach/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Sundeep Acharya</span>. All rights
        reserved.
      </div>
      <div className="flex justify-center text-xs mt-1 opacity-70">
        <div>Created with ❤️ by &nbsp; </div>
        <a href="https://www.linkedin.com/in/sandeshpaudel" target="_blank">
          Sandesh Paudel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
