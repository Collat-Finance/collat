import React from "react";
import { telegram } from "../images";

const HeroSection = () => {
  return (
    <div className="heroSection_container">
      <div className="hero_container">
        <h1 className="header">
          Revolutionize <br />
          your{" "}
          <span className="financial_content">
            financial <br />
            flexibility
          </span>
        </h1>
        <p className="middle_content">
          Collat Finance is an on-chain lending platform backed by tokenzied RWA
          collateral built on the Solana Blockchain.
        </p>
      </div>
      <div className="button_container">
        <button className="learnMore">Learn More</button>
        <button className="joinTelegram">
          <p>Join Telegram</p>&nbsp; &nbsp;
          <img src={telegram} alt="telegram" height={25} width={25} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
