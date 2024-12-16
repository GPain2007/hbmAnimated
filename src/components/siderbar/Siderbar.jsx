import Links from "./links/Links";
import "./siderbar.scss";
import { ToggleButton } from "./togglebutton/ToggleButton";
import { motion } from "framer-motion";
import { useState } from "react";

export const Siderbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 350px 350px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    close: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "close"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </motion.div>
  );
};
