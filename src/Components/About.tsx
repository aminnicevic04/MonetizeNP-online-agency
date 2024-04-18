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
      title: "Kreativni Dizajn i Sadržaj",
      description:
        "Kreiramo vizuelno atraktivne objave i Reels i TikTok sadržaje koji ostavljaju utisak na vašu ciljanu publiku.",
      image: "/src/assets/ico3zb.png",
    },
    {
      id: 2,
      title: "Izrada Sajta i Aplikacije",
      description:
        "Kreiramo moderne i funkcionalne web stranice i aplikacije koje naglašavaju jedinstvenu vrednost vašeg brenda i privlače korisnike.",
      image: "/src/assets/ico1zb.png",
    },
    {
      id: 3,
      title: "Fotografisanje i Snimanje",
      description:
        "Snimamo profesionalne fotografije i video sadržaje kamerom i dronom koji će istaći vaše proizvode i usluge na društvenim mrežama.",
      image: "/src/assets/ico1zb2.png",
    },
  ];

  return (
    <div id="about" className="bg-dark1" ref={ref}>
      <div className=" md:w-1/2 mx-auto text-center ">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl text-neutralSilver font-semibold mb-3 pt-10"
        >
          Kreiramo vašu digitalnu viziju - stručno i predano.
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fontDark text-xl"
        >
          Osigurajte sve što vam treba uz naš tim.
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 py-20  ">
        {services.map((service) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.6 }}
            key={service.id}
            className="px-6 py-8 text-center md:w-[340px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:scale-10 hover:border-b-4 hover:border-brandPrimary transition-all duration-100 flex items-center justify-center h-full bg-gray900"
          >
            <div>
              <div className="flex justify-center align-middle">
                <img src={service.image} alt="" className="w-16 pb-6"></img>
              </div>
              <h4 className="text-2xl font-bold text-neutralSilver mb-6  px-2">
                {service.title}
              </h4>
              <p className="text-sm text-fontDark">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-4 lg:px-14 w-full mx-auto pt-10 pb-10">
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
              Dizajnirajte Vaš <span className="text-brandPrimary">Online</span>{" "}
              Uspeh
            </h2>
            <p className="md:w-3/4 text-xl text-fontDark mb-8">
              Uronite duboko u svet kreativnosti sa našim timom stručnjaka. Od
              početne ideje do konačne realizacije, nudimo sveobuhvatno rešenje
              za vaš brend. Naša sposobnost da osmislimo originalne koncepte
              garantuje da će vaša prisutnost na mreži biti jedinstvena i
              prepoznatljiva. Bilo da se radi o kreiranju vizuelno impresivnih
              objava ili dinamičnih Reels/TikTok sadržaja, mi ćemo vam pomoći da
              istaknete svoj brend na način koji će privući i angažovati vašu
              ciljanu publiku.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
