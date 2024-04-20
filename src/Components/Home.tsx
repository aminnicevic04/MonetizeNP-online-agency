import { Carousel } from "flowbite-react";
// import baner1 from "../assets/slika1.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import Button from "../Components/Button/Button";
import zena from "../assets/2.jpg";
import raketa from "../assets/raketa.jpg";
import treca from "../assets/3.jpg";

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
      <div className="px-4 lg:px-14 max-w-screen-3xl mx-auto min-h-screen h-screen ">
        <Carousel className="w-full mx-auto">
          <div className="md:my-8 py-0 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="">
              <img
                src={raketa}
                alt=""
                className="max-sm:h-80 max-sm:w-full max-sm:overflow-auto"
              ></img>
            </div>

            <div className="md:w-1/2 lg:ml-20 ml-0 max-lg:text-center">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug max-[700px]:text-4xl"
              >
                Vaše digitalno putovanje{" "}
                <span className="text-brandPrimary leading-snug block">
                  počinje ovde.
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8 pt-8 max-md:text-lg"
              >
                Da li ste spremni za uzlet svog brenda i na ostvarivanje porasta
                u prodaji?
              </motion.p>
              {/* <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#4CAF4F",
                  color: "white",
                }}
              >
                Medium
              </Button> */}
              {/* <Button /> */}
            </div>
          </div>
          {/*  dvojka */}
          <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div className="">
              <img
                src={zena}
                alt=""
                className="max-sm:h-80 max-sm:w-full max-sm:overflow-auto"
              ></img>
            </div>

            <div className="md:w-1/2 lg:ml-20 ml-0 max-lg:text-center">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-6xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug  max-[700px]:text-4xl"
              >
                Vaša popularnost počinje na{" "}
                <span className="text-brandPrimary leading-snug block">
                  društvenim mrežama
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8  max-md:text-lg"
              >
                Naš tim kreatora sadržaja će vam pomoći da svi čuju priču vašeg
                brenda.
              </motion.p>
            </div>
          </div>
          {/* trojka */}
          <div className="md:my-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12 max-sm:gap-9 ">
            <div className="">
              <img
                src={treca}
                alt=""
                className="max-sm:h-80 max-sm:w-full max-sm:overflow-auto"
              ></img>
            </div>

            <div className="md:w-1/2 lg:ml-20 ml-0 max-lg:text-center">
              <motion.h1
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl font-semibold mb-4 text-neutralSilver md:w-4/4 leading-snug  max-[700px]:text-4xl"
              >
                Vaša prodaja počinje na{" "}
                <span className="text-brandPrimary leading-snug block">
                  dobrom websajtu
                </span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutralSilver text-2xl mb-8  max-md:text-lg"
              >
                Naš tim programera će vam pomoći da svoju prodaju podignete na
                veći nivo brzom web prodavnicom.
              </motion.p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
