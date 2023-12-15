import "./hero.scss";
import { motion } from "framer-motion";

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
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
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
          <motion.h2 variants={testVariants}>HBM Flower City</motion.h2>
          <motion.h1 variants={testVariants}>See the Lastest Works</motion.h1>
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
        Your Wedding and Event Florist
      </motion.div>
      <div className="imageContainer">
        <img src="/animatedProfileBig.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
