import React from "react";
import { discord, footer_logo, medium, telegram, twitter } from "../images";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_contents">
        <div>
          <img
            className="footer_logo"
            src={footer_logo}
            width={200}
            height={50}
            alt="footerImage"
          />
        </div>
        <div className="footerRights">
          2024 Collat Finance. All Right Reserved
        </div>
        <div className="footer_images">
          <a href="https://twitter.com/CollatFinance">
            <img src={twitter} alt="twitter" width={30} height={30} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://t.me/collatfinance">
            <img src={telegram} alt="telegram" width={30} height={30} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://discord.gg/QrtvFgGn7r">
            <img src={discord} alt="discord" width={30} height={23} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://collatfinance.medium.com/">
            <img src={medium} alt="medium" width={30} height={20} />
          </a>
        </div>
        <div className="footerRights2">
          2024 Collat Finance. All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
