import React from "react";
import "./App.css";
import { Footer, HeroSection, Navbar } from "./components";
import { left_hero_logo, right_hero_logo } from "./images";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="app">
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, stiffness: 10 }}
      >
        <div className="leftImage">
          <img src={left_hero_logo} alt="leftImage" />
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, stiffness: 10 }}
      >
        <div className="rightImage">
          <img src={right_hero_logo} alt="leftImage" />
        </div>
      </motion.div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
