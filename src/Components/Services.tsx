import logo1 from "../assets/Icons/logo-services1.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import { InfiniteMovingCards } from "../Components/Parallax UI/InfinitiveMovingCards";

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 2, y: 0 },
  };

  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/services3.png",
    },
  ];
  // const testimonials = [
  //   {
  //     quote:
  //       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
  //     name: "Charles Dickens",
  //     title: "A Tale of Two Cities",
  //   },
  //   {
  //     quote:
  //       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
  //     name: "William Shakespeare",
  //     title: "Hamlet",
  //   },
  //   {
  //     quote: "All that we see or seem is but a dream within a dream.",
  //     name: "Edgar Allan Poe",
  //     title: "A Dream Within a Dream",
  //   },
  //   {
  //     quote:
  //       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //     name: "Jane Austen",
  //     title: "Pride and Prejudice",
  //   },
  //   {
  //     quote:
  //       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //     name: "Herman Melville",
  //     title: "Moby-Dick",
  //   },
  // ];
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
        className="text-center my-8"
      >
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl text-neutralSilver font-semibold mb-2"
        >
          Our clients
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fontDark text-2xl pt-4"
        >
          We have been working with some Fortune 500+ clients
        </motion.p>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animation}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="my-20 flex flex-wrap justify-between items-center gap-8"
        >
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
          <img src={logo1} alt=""></img>
        </motion.div>

        <div className="mt-20 md:w-1/2 mx-auto text-center">
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
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:scale-110 hover:border-b-4 hover:border-brandPrimary transition-all duration-100 flex items-center justify-center h-full bg-gray900"
            >
              <div>
                <div className="bg-brandPrimary mt-4 mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                  <img
                    src={service.image}
                    alt=""
                    className="ml-5 w-14 h-14"
                  ></img>
                </div>
                <h4 className="text-2xl font-bold text-neutralSilver mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-fontDark">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* infinitive slider */}
        {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-dark1 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div> */}
      </motion.div>
    </div>
  );
}

export default Services;
