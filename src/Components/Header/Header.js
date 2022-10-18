import React from "react";

const Header = ({ getheadermovie }) => {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      <img className="header-image" src={getheadermovie}/>
    </header>
  );
};

export default Header;
