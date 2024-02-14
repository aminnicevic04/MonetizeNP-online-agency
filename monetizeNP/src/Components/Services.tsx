import React from "react";
import logo1 from "../assets/Icons/logo-services1.png";

function Services() {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-5xl text-neutralDGrey font-semibold mb-2">
          Our clients
        </h2>
        <p className="text-neutralGrey text-2xl pt-4">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-20 flex flex-wrap justify-between items-center gap-8">
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Services;
