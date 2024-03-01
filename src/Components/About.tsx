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

  return (
    <div id="about" className="bg-dark1" ref={ref}>
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
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
