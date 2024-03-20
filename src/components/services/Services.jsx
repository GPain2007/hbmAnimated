import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  hover: {
    background: "#fff7f4",
    color: "black",
  },
  initial: {
    background: "transparent",
    color: "inherit",
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>Quote from My Sister</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/Daniela.jpg" alt="the pic" />
          <h1>
            <b>Package</b> Weddings
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Flowers</b> for Events
          </h1>
          <button>WHAT TO KNOW MORE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          ref={ref}
          animate="animate"
        >
          <h2>Branding</h2>
          <p>Describing the package we getting from flowers</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Branding</h2>
          <p>Describing the package we getting from flowers</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Branding</h2>
          <p>Describing the package we getting from flowers</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Branding</h2>
          <p>Describing the package we getting from flowers</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
