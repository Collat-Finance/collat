import React from "react";
import { discord, footer_logo, medium, telegram, twitter } from "../images";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
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
            <img src={twitter} alt="twitter" width={30} height={30} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={telegram} alt="telegram" width={30} height={30} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={discord} alt="discord" width={30} height={23} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={medium} alt="medium" width={30} height={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
