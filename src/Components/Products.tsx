import img1 from "../assets/laptop.png";
import img2 from "../assets/seo.png";
import company from "../assets/Icons/logo-services1.png";
import img9 from "../assets/image 9.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Products() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 2, y: 0 },
  };

  return (
    <div id="product" className="bg-dark1 py-32" ref={ref}>
      <div className=" px-4 lg:px-14 w-5/6 mx-auto pb-28">
        <div className="md:w-full flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-4 mx-0">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-4/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralSilver font-semibold mb-4 md:full text-right">
              How to design your site footer like we did
            </h2>
            <p className="md:w-full text-m text-fontDark mb-8 text-right pl-40">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={img1} alt=""></img>
          </motion.div>
        </div>
      </div>
      <div className=" px-4 lg:px-14 w-5/6 mx-auto pb-28">
        <div className="md:w-full flex flex-col md:flex-row justify-between items-center gap-4 mx-0">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-4/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralSilver font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-m text-fontDark mb-8 px-auto">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={img2} alt=""></img>
          </motion.div>
        </div>
      </div>
      {/* next */}
      {/* <div className="px-16 lg:px-14 max-w-screen-3x1 w-full bg-dark1 py-16 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/5 flex justify-center"
          >
            <img src={img9} alt="" className="w-full h-auto"></img>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-2/3"
          >
            <div className="mx-auto md:mx-0">
              <p className="md:w-4/5 text-sm text-fontDark mb-8 leading-7">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Hamdo Turkovic
              </h5>
              <p className="text-base text-neutralSilver mb-8">Masazer zena</p>
              <div className="flex items-center gap-8 flex-wrap">
                <img src={company} alt="" className="cursor-pointer"></img>
                <img src={company} alt="" className="cursor-pointer"></img>
                <img src={company} alt="" className="cursor-pointer"></img>
                <img src={company} alt="" className="cursor-pointer"></img>
                <img src={company} alt="" className="cursor-pointer"></img>
                <img src={company} alt="" className="cursor-pointer"></img>
                <div className="flex items-center gap-8">
                  <a
                    href="/"
                    className="font-bold text-brandPrimary hover:text-neutral-400"
                  >
                    Meet all customers →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
}

export default Products;
