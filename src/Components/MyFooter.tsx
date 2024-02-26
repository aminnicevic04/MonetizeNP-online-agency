import React from "react";
import { Footer } from "flowbite-react";
import LOGO from "../assets/logo2.png";

function MyFooter() {
  return (
    <Footer
      container
      className="bg-neutral-950 border-t border-solid border-neutralSilver border-opacity-100 border-l-0 border-r-0 border-b-0 rounded-none "
    >
      <Footer.Copyright href="#" by="MONETIZE NP™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default MyFooter;
