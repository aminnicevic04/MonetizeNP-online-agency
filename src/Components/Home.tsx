import { Carousel } from "flowbite-react";
import baner1 from "../assets/slika1.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
// import Button from "../Components/Button/Button";

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 2, y: 0 },
  };

  return (
    <div ref={ref} className="bg-dark1" id="home">
      <div className="px-4 lg:px-14 max-w-screen-3xl mx-auto min-h-screen h-screen">
        <Carousel w-full mx-auto>
          <div className="my-28 md:my-8 py-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug  max-[400px]:text-4xl"
              >
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 8 years
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8"
              >
                Where to grow your business as a photographer: site or social
                media?
              </motion.p>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#4CAF4F",
                  color: "white",
                }}
              >
                Medium
              </Button>
              {/* <Button /> */}
            </div>
          </div>
          {/*  dvojka */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug  max-[400px]:text-4xl"
              >
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 9 years
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8"
              >
                Where to grow your business as a photographer: site or social
                media?
              </motion.p>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#4CAF4F",
                  color: "white",
                }}
              >
                Medium
              </Button>
            </div>
          </div>
          {/* trojka */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="mr-10">
              <img src={baner1} alt=""></img>
            </div>

            <div className="md:w-1/2 ml-10 ">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug  max-[400px]:text-4xl"
              >
                Leassons and insights{" "}
                <span className="text-brandPrimary leading-snug block">
                  from 10 years
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8"
              >
                Where to grow your business as a photographer: site or social
                media?
              </motion.p>
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#4CAF4F",
                  color: "white",
                }}
              >
                Medium
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
