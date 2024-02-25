import React from "react";
import logo1 from "../assets/Icons/logo-services1.png";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services3.png",
    },
  ];
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto mp-20"
      id="service"
    >
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

        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-3 pt-10">
            Manage your entire community in a single system
          </h2>
          <p className="text-neutralGrey text-xl">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary  transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-[#E8F5E9] mt-4 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                  <img
                    src={service.image}
                    alt=""
                    className="ml-5 w-14 h-14"
                  ></img>
                </div>
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralDGrey">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
