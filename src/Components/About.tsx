// import About1 from "../assets/about1.png";
// import A1 from "../assets/A1.png";
// import A2 from "../assets/A2.png";
// import A3 from "../assets/A3.png";
// import A4 from "../assets/A4.png";
import kinez from "../assets/kinez  hodajuci.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ico3zb.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ico1zb.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ico1zb2.png",
    },
  ];

  return (
    <div id="about" className="bg-dark1" ref={ref}>
      <div className=" md:w-1/2 mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl text-neutralSilver font-semibold mb-3 pt-10"
        >
          Manage your entire community in a single system
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fontDark text-xl"
        >
          Who is Nextcent suitable for?
        </motion.p>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12  ">
        {services.map((service) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.6 }}
            key={service.id}
            className="px-6 py-8 text-center md:w-[320px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:scale-10 hover:border-b-4 hover:border-brandPrimary transition-all duration-100 flex items-center justify-center h-full bg-gray900"
          >
            <div>
              <div className="flex justify-center align-middle">
                <img src={service.image} alt="" className="w-16 pb-4"></img>
              </div>
              <h4 className="text-2xl font-bold text-neutralSilver mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-fontDark">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-4 lg:px-14 w-full mx-auto pt-12 pb-20">
        <div className="md:w-full  flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:pl-32"
          >
            <img src={kinez} alt=""></img>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-4/5 px-12  mx-auto "
          >
            <h2 className="text-5xl text-neutralSilver font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-l text-fontDark mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
