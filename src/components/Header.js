import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <header>
      <div className="appName">
        Weather App <i className="fas fa-cloud-sun"></i>
      </div>
    </header>
  );
};

export default Header;
