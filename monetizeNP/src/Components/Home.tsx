import React from "react";
import { Carousel } from "flowbite-react";
import baner1 from "../assets/slika1.png";

function Home() {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel w-full mx-auto>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <h1 className="text-7xl font-semibold mb-4 text-neutralDGrey md:w-4/4 leading-snug">
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">register</button>
            </div>
          </div>
          {/*  dvojka */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <h1 className="text-7xl font-semibold mb-4 text-neutralDGrey md:w-4/4 leading-snug">
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 9 years
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">register</button>
            </div>
          </div>
          {/* trojka */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <h1 className="text-7xl font-semibold mb-4 text-neutralDGrey md:w-4/4 leading-snug">
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 10 years
                </span>
              </h1>
              <p className="text-neutralGrey text-2xl mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
