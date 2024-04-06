import React from "react";
import { collat_top_logo } from "../images";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="navbar_logo"
          src={collat_top_logo}
          alt="navbarLogo"
          height={50}
          width={200}
        />
      </motion.div>
    </div>
  );
};

export default Navbar;
