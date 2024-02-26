import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let location = useLocation();
  if ((location.pathname !== "/login") & (location.pathname !== "/register")) {
    return <div>Footer</div>;
  }
};

export default Footer;
