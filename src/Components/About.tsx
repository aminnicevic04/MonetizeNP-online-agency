import React from "react";
import About1 from "../assets/about1.png";
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
function About() {
  return (
    <div id="about">
      <div className="px-4 lg:px-14 w-full mx-auto mt-12 mb-32">
        <div className="md:w-full  flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="pl-12">
            <img src={About1} alt=""></img>
          </div>
          <div className="md:w-4/5 px-12 pr-40 mx-auto ">
            <h2 className="text-5xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-l text-neutralDGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <div className="px-12 lg:px-40 bg-neutralSilver py-28 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-5xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="text-xl">
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <img src={A1} alt=""></img>
                <div>
                  <h4 className="text-3xl text-neutralDGrey font-semibold ">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={A2} alt=""></img>
                <div>
                  <h4 className="text-3xl text-neutralDGrey font-semibold ">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <img src={A3} alt=""></img>
                <div>
                  <h4 className="text-3xl text-neutralDGrey font-semibold ">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src={A4} alt=""></img>
                <div>
                  <h4 className="text-3xl text-neutralDGrey font-semibold ">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
