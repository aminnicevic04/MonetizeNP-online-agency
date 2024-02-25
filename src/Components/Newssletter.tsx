import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Newssletter() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 2, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="px-4 lg:px-14 max-w-screen-3xl mx-auto bg-neutralSilver py-16"
      id="faq"
    >
      <div>
        <div className="text-center">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-4 lg:leading-snug"
          >
            bla blablabla CONTACT US blablabla
          </motion.h2>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8"
          >
            <button className="btn-primary text-white">Try us →</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Newssletter;
