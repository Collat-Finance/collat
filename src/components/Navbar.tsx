import React from "react";
import { collat_top_logo } from "../images";
import { motion } from "framer-motion";

const Navbar = () => {
  const openAllTabsLinks = () => {
    const learnMoreFocus = window.open("https://docs.collat.finance", "_blank");
    const telegramFocus = window.open("https://t.me/collatfinance", "_blank");
    const twitterFocus = window.open(
      "https://twitter.com/CollatFinance",
      "_blank"
    );
    const discordFocus = window.open("https://discord.gg/QrtvFgGn7r", "_blank");
    const mediumFocus = window.open(
      "https://collatfinance.medium.com",
      "_blank"
    );

    if (
      learnMoreFocus &&
      telegramFocus &&
      twitterFocus &&
      discordFocus &&
      mediumFocus
    ) {
      learnMoreFocus.focus();
      telegramFocus.focus();
      twitterFocus.focus();
      discordFocus.focus();
      mediumFocus.focus();
    } else {
      console.error("Popup blockers prevented some windows from opening.");
    }
  };
  return (
    <div className="navbar_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <a onClick={openAllTabsLinks} href="#">
          <img
            className="navbar_logo"
            src={collat_top_logo}
            alt="navbarLogo"
            height={50}
            width={200}
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
