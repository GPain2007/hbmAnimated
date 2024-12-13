import "./hero.scss";
import { motion } from "framer-motion";
import Carousel from "../carousel/Carousel";

const testVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-300%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const carouselVariants = {
  initial: {
    x: +500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={testVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={testVariants}>HBM Flower City</motion.h1>
          <motion.h2 variants={testVariants}>
            {`Welcome to a world of romance and natural beauty, where every detail
            bloom's with charm.`}
          </motion.h2>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={testVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Bespoke Weddings & Events
      </motion.div>
      <div className="imageContainer">
        <motion.div
          variants={carouselVariants}
          initial="initial"
          animate="animate"
        >
          <Carousel />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
