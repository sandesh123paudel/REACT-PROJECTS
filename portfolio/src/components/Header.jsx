import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/category/literatures", label: "My Literatures" },
    { to: "/category/poems", label: "My Poems" },
    { to: "/category/ji-ja-bho", label: "Ji Ja Bho" },
    { to: "/category/research", label: "Research" },
    { to: "/category/arts", label: "Arts" },
    { to: "/about", label: "About" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed md:static top-0 left-0 z-50 w-full px-6 md:px-16 lg:px-36 py-4 flex justify-between items-center bg-gradient-to-r from-[#233427] via-[#1E1A2A] to-[#233427] border-b border-gray-700">
      {/* Logo */}
      <NavLink to="/" onClick={handleLinkClick} className="max-lg:flex-1">
        <img src="/logo.png" alt="Sundeep Logo" className="w-40" />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              ` text-lg transition duration-300 hover:text-[rgb(245,158,11)] relative after:content-[''] after:block after:h-[2px] after:bg-[rgb(245,158,11)] after:transition-all after:duration-300 ${
                isActive
                  ? "after:w-1/2 after:mx-auto text-[rgb(245,158,11)]"
                  : "after:w-0 after:mx-auto"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-50 text-[rgb(245,158,11)]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 backdrop-blur-md bg-[rgb(33, 72, 55)]/90 flex flex-col items-center justify-center gap-6 text-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              ` transition duration-300 hover:text-[rgb(245,158,11)] relative after:content-[''] after:block after:h-[2px] after:bg-[rgb(245,158,11)] after:transition-all after:duration-300 ${
                isActive
                  ? "after:w-1/2 after:mx-auto text-[rgb(245,158,11)]"
                  : "after:w-0 after:mx-auto"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
