import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "./logo";
import TopSearchBox from "./topSearchbox";
import BoxMenuDrop from "./boxmenudrop";
import ProfileMenuDrop from "./profilemenudrop";

const Header = () => {
  return (
    <div className="menu">
     <div className="menu-section">
        <div className="head-section">
        <div className="Box-menu-1">
          <BoxMenuDrop />
          </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
       
        <div className="Profile-Menu-1">
          <ProfileMenuDrop />
          </div>
      </div>
        <div className="topmenu-menu-search menu-search">
          <TopSearchBox />
        </div>
      </div>
      
      <div className="menu-section">  
    <div className="Box-menu">
          <BoxMenuDrop />
          </div>
          <div className="Profile-Menu">
          <ProfileMenuDrop />
  </div>
  </div>
      </div>
  
  );
};

export default Header;
