import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-scroll";
import "./animation.css";

import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
  const toggleMenu = () => {
    if (isMenuOpen === false) {
      setIsMenuOpen(true);
    } else setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testemonial", path: "testemonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-0 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <img
            src={logo}
            alt="Logo"
            className="w-80 left-0 transform-gpu translate-y-0"
          ></img>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="uppercase block text-lg text-gray900 hover:text-brandPrimary font-medium cursor-pointer link-animation"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
              Contact US
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500 m-8"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 mr-6" />
              ) : (
                <FaBars className="h-6 w-6 mr-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-7 mt-40 py-10 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-xl text-white hover:text-brandPrimary uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
