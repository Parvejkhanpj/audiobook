import React from "react";
import { FiSettings } from "react-icons/fi";
import "./header.css";
const Header = () => {
  return (
    <div className="flex header-wrapper max-width">
      <div className="header-logo">
        <img className="logo" src={require("../../assets/Logo.png")} />
      </div>
      <div className="header-icon ">
        <FiSettings className="header-setting-icon" />
      </div>
    </div>
  );
};

export default Header;
