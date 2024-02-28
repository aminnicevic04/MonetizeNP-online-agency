import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo2.png";
import Logo2 from "../assets/monetize-logo(dark).png";
import { Link } from "react-scroll";
import "./animation.css";
import Button from "@mui/material/Button";
// import Button from "../Components/Parallax UI/MovingBorderButton";

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
        className={`py-0 lg:px-14 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-dark1 duration-300" : ""
        }`}
      >
        <div className="flex  justify-between items-center text-base py-4 ">
          <img
            src={Logo2}
            alt="Logo"
            className="w-32 md:w-72 ml-5 md:ml-10"
          ></img>
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="uppercase block text-lg text-neutralSilver hover:text-brandPrimary font-medium cursor-pointer"
              >
                <h1 className="link-animation"> {link}</h1>
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <Button
              variant="outlined"
              size="large"
              style={{
                borderColor: "#4CAF4F",
                color: "#F5F7FA",
              }}
            >
              CONTAC US
            </Button>
            {/* <Button
              borderRadius="1.75rem"
              className="bg-neutralSilver dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:border-white hover:bg-brandPrimary hover:text-neutralSilver transition-all "
            >
              CONTACT US
            </Button> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500 "
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
          className={`space-y-4 px-7 mt-14 py-10 bg-brandPrimary ${
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
