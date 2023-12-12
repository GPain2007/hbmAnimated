import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Home", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <a href={`http://`} key={item}>
          {item}
        </a>
      ))}
    </motion.div>
  );
};

// export default Links;
