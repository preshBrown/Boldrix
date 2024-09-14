import React from "react";

import { FaGooglePay } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const coreList = [
  // { name: "App", to: "#" },
  { name: "About", to: "#" },
  { name: "Contact", to: "#" },
  { name: "Terms of Use", to: "#" },
  { name: "Privacy Policy", to: "#" },
  { name: "Content Policy", to: "#" },
  { name: "Terms of Sale", to: "#" },
  { name: "Wine News", to: "#" },
  { name: "Premium", to: "#" },
  { name: "Gifting", to: "#" },
  { name: "Become an Affiliate", to: "#" },
  // { name: "Press", to: "#" },
  // { name: "Wine Style Awward", to: "#" },
  // { name: "Merchants", to: "#" },
  // { name: "Brand Partnerships", to: "#" },
  // { name: "Careers", to: "#" },
  
  // { name: "Site Map", to: "#" },
  // { name: "Wistleblower", to: "#" },
];

export const paymentMethods = [
  { name: "vesa", icon: <SiVisa style={{ color: "blue", }} size={40} /> },
  {
    name: "master",
    icon: <FaCcMastercard style={{ color: "rgb(241, 44, 9)" }} size={40} />,
  },
  {
    name: "discover",
    icon: <FaCcDiscover style={{ color: "rgb(255, 123, 0)" }} size={40} />,
  },
  { name: "pay", icon: <FaApplePay style={{ color: "white" }} size={40} /> },
  {
    name: "gpay",
    icon: <FaGooglePay style={{ color: "rgb(255, 217, 0)" }} size={40} />,
  },
  {
    name: "paypal",
    icon: <FaCcPaypal style={{ color: "skyblue" }} size={40} />,
  },
];

export const socialHandleLinks = [
  {
    name: "telegram",
    icon: <FaTelegramPlane style={{ color: "#0088cc" }} size={25} />,
  },
  {
    name: "x",
    icon: <FaXTwitter style={{ color: "rgb(20, 23, 26)" }} size={25} />,
  },

  {
    name: "facebook",
    icon: <FaFacebookF style={{ color: "rgb(66, 103, 178)" }} size={25} />,
  },
  {
    name: "instagram",
    icon: (
      <FaSquareInstagram style={{ color: "rgb(205, 72, 107)" }} size={25} />
    ),
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn style={{ color: "rgb(0, 119, 181)" }} size={25} />,
  },
];
