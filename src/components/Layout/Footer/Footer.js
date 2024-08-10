import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <footer theme={theme}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
