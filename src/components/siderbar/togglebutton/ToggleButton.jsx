import PropTypes from "prop-types";

import { motion } from "framer-motion";

export const ToggleButton = ({ setIsOpen, isOpen }) => {
  return (
    <button
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 9.5 L 20 9.5" },
            open: { d: "" },
          }}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        />

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  );
};

ToggleButton.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default ToggleButton;
