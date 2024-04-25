import "./navbar.scss";
import { motion } from "framer-motion";
import { Siderbar } from "../siderbar/Siderbar";
import { FaPinterest } from "react-icons/fa";
import TikTok from "/tiktok.png";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Siderbar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HBM FLower City
        </motion.span>

        <div className="social">
          <a href="https://www.instagram.com/hbm_flowercity">
            <img src="/instagram.png" alt="instagram" />
          </a>

          <a href="https://www.tiktok.com/@hbm_flowercity">
            <img src={TikTok} alt="tittok" />
          </a>
          <a href="https://www.pinterest.com/harolynmunford/">
            <FaPinterest />
          </a>
        </div>
      </div>
    </div>
  );
};
