import React from "react";
import { discord, footer_logo, medium, telegram, twitter } from "../images";

const Footer = () => {
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
    <div className="footer_container">
      <div className="footer_contents">
        <div>
          <a href="#" onClick={openAllTabsLinks}>
            <img
              className="footer_logo"
              src={footer_logo}
              width={200}
              height={50}
              alt="footerImage"
            />
          </a>
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
