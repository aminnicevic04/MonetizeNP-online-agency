import tesla from "../assets/image 9.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Blog() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const animation = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 2, y: 0 },
  };

  const blogs = [
    {
      id: 1,
      title: "kako je hamdija turkovic zaradio 100 evra za dva dana",
      img: tesla,
    },
    {
      id: 2,
      title: "kako je hamdija turkovic zaradio 200 evra za dva dana",
      img: tesla,
    },
    {
      id: 3,
      title: "kako je hamdija turkovic zaradio 300 evra za dva dana",
      img: tesla,
    },
  ];

  return (
    <div
      ref={ref}
      className="px-4 bg-dark1 lg:px-14 max-w-screen-3xl mx-auto py-12 "
      id="testemonial"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animation}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-5xl text-neutralSilver font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-xl text-fontDark mb-8 mx-auto">
          The Nextcent blog is the best place to read about the latest joining
          the community, read about how our community are increasing their
          membership income and lot's more.
        </p>
      </motion.div>
      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm-grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={blog.id}
            className="mx-auto relative mb-12  "
          >
            <img
              src={blog.img}
              alt=""
              className="w-80 hover:scale-105 transition-all duration-300 cursor-pointer"
            ></img>
            <div className="text-center px-4 py-8 bg-dark2 shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-fontDark font-semibold ">
                {blog.title}
              </h3>
              <div className="felx items-center gap-8 justify-center">
                <a
                  href="/"
                  className="font-bold text-brandPrimary  cursor-pointer"
                >
                  <span className="text-neutralSilver hover:text-brandPrimary ">
                    Read more{" "}
                  </span>
                  →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
