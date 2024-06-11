import "./services.scss";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
  return (
    <motion.div className="services">
      <motion.div className="titleContainer">
        <h1>Our Process For Weddings</h1>
        <Link to="/offerings">
          <button>Inquire</button>
        </Link>
        <hr />
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Inquiry</h2>
          <p>
            We ask that you fill out our inquiry form to give us more details
            about your upcoming event. Once we determine that your date is
            available we will reach out to you to get more specifics.
          </p>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Proposal</h2>
          <p>
            Once your date is determined to be available, we will create a
            custom proposal that will give you a vision of your big day and an
            estimated cost. If you like the proposal, a consultation will be set
            up to walk you through your proposal and discuss further design
            details.
          </p>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Booking</h2>
          <p>
            Are you ready to save the date? Simply review and sign your contract
            and pay your deposit. Please remember that your deposit is
            non-refundable.
          </p>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <h2>Final Details</h2>
          <p>
            Your proposal and design concepts will be set but if any changes
            need to be made we can update them along the way. 8-12 weeks before
            your wedding date we will set up a mock up so we can bring your
            vision to life and make any final changes to your design. Six weeks
            before the event we will have a check in to finalize all design
            details and logistics for your event.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
