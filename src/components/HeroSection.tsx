import React from "react";
import { telegram } from "../images";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="heroSection_container">
        <div className="hero_container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="header">
              Revolutionize <br />
              your{" "}
              <span className="financial_content">
                financial <br />
                flexibility
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, type: "spring" }}
            transition={{ duration: 2.5 }}
          >
            <p className="middle_content">
              Collat Finance is an on-chain lending platform backed by tokenzied
              RWA collateral built on the Solana Blockchain.
            </p>
          </motion.div>
        </div>
        <div className="button_container">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 2.5 }}
          >
            <a
              href="https://docs.collat.finance"
              target="_blank"
              rel="noreferrer"
            >
              <button className="learnMore">Learn More</button>
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 2.5, delay: 0.3 }}
          >
            <a
              href="https://t.me/collatfinance"
              target="_blank"
              rel="noreferrer"
            >
              <button className="joinTelegram">
                Join Telegram&nbsp;&nbsp;
                <img src={telegram} alt="telegram" height={25} width={25} />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
