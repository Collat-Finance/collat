import React from "react";
import { collat_top_logo } from "../images";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img
        className="navbar_logo"
        src={collat_top_logo}
        alt="navbarLogo"
        height={50}
        width={200}
      />
    </div>
  );
};

export default Navbar;
