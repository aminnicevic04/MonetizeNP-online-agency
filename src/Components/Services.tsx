import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/Avenia.png";
import k4 from "../assets/k4.png";
import k5 from "../assets/k5.png";
import k6 from "../assets/k6.png";
import A1 from "../assets/flw.png";
import A2 from "../assets/like.png";
import A3 from "../assets/oko.png";
import A4 from "../assets/kartica.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "../Components/Parallax UI/InfinitiveMovingCards";

function Services() {
  const CounterAnimation: React.FC<{ target: number }> = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const speed = 1000; // change animation speed here
      const inc = target / speed;

      const timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + inc;
          return newCount >= target ? target : newCount;
        });
      }, 1);

      return () => clearInterval(timer);
    }, [target]);

    return <div>{Math.ceil(count).toLocaleString()}</div>;
  };
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
      className="bg-dark1 md:px-32 px-4 py-16 max-w-screen-3xl mx-auto mp-20"
      id="service"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animation}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" my-8"
      >
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl text-neutralSilver font-semibold mb-2 text-center"
        >
          Naši zadovoljni klijenti
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fontDark text-2xl pt-4 text-center"
        >
          Naš MonetizeNP team je radio za preko 50 zadovoljnih klijenata
        </motion.p>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="my-20 flex flex-wrap justify-between items-center gap-4"
        >
          <img src={k1} alt="" className="w-28"></img>
          <img src={k2} alt="" className="w-32"></img>
          <img src={k3} alt="" className="w-36"></img>
          <img src={k4} alt="" className="w-40"></img>
          <img src={k5} alt="" className="w-40"></img>
          <img src={k6} alt="" className="w-28"></img>
        </motion.div>
        {/* ubaceno */}
        <div className="px-12 md:px-2 lg:px-12 bg-dark1 py-28">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Pružamo rast i uspeh vašem online biznisu. */}
            <div className="md:w-1/2">
              <motion.h2
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl text-neutralSilver font-semibold mb-4 md:w-2/3"
              >
                Osiguravamo rast
                <br />
                <span className="text-brandPrimary">
                  online prisutnosti <br />i prodaje.
                </span>
              </motion.h2>
              <p className="text-xl text-neutralSilver">
                Naš tim garantuje povećanje lajkova, pregleda i prodaje
                proizvoda.
              </p>
            </div>
            {/* stats */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animation}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12"
            >
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <img src={A1} alt="" className="w-14"></img>
                  <div>
                    <h4 className="text-3xl text-neutralSilver font-semibold ">
                      <CounterAnimation target={22046} />
                    </h4>
                    <p className="text-brandPrimary">Pratioci</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src={A2} alt="" className="w-14"></img>
                  <div>
                    <h4 className="text-3xl text-neutralSilver font-semibold ">
                      <CounterAnimation target={79507} />
                    </h4>
                    <p className="text-brandPrimary">Lajkovi</p>
                  </div>
                </div>
              </div>
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <img src={A3} alt="" className="w-14"></img>
                  <div>
                    <h4 className="text-3xl text-neutralSilver font-semibold ">
                      <CounterAnimation target={121004} />
                    </h4>
                    <p className="text-brandPrimary">Pregledi</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src={A4} alt="" className="w-14"></img>
                  <div>
                    <h4 className="text-3xl text-neutralSilver font-semibold ">
                      <CounterAnimation target={4321} />
                    </h4>
                    <p className="text-brandPrimary">Prodaja</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
