import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const toggleMenu = () => {
    setIsMenuOpen(true);
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
      <nav className="w-full bg-green-500">
        <div className="bg-red-500 w-full ">
          <img src={logo} alt="Logo" className="w-20 bg-cyan-500 "></img>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
