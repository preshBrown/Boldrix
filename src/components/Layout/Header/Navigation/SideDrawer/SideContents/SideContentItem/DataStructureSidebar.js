import React from "react";
import { TbListDetails } from "react-icons/tb";
import { MdDarkMode, MdLocalShipping } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaArrowTrendUp, FaCircleInfo } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";

import { MdManageAccounts } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { AiFillBug, AiOutlineLogout } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa6";


const DataStructureSidebar = [
  {
    title: "General",
    icon: <TbListDetails />,
    childrens: [
      {
        title: "Home",
        icon: <FaHome />,
        path: "/",
      },
      {
        title: "About",
        icon: <FaCircleInfo />,
        path: "/about",
      },
      {
        title: "Contact",
        icon: <MdContactPhone />,
        childrens: [
          {
            title: "Facebook",
            path: "#",

          },
          {
            title: "Twitter",
            path: "#",

          },
          {
            title: "Instagram",
            path: "#",

          },
        ],
      },
      {
        title: "FAQ",
        icon: <FaQuestion />,
        path: "/faq",
      },
    ],
  },
  {
    title: "Account",
    icon: <MdManageAccounts />,
    childrens: [
      {
        title: "Login",
        path: "/login",
      },
      {
        title: "Register",
        path: "/signup",
      },
      {
        title: "Forgot Password",
        path: "/forgot-password",
      },
      {
        title: "Reset Password",
        path: "/reset-password/reset",
      },
    ],
  },
  {
    title: "Profile",
    icon: <ImProfile />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Settings",
        childrens: [
          {
            title: "Account",
            path: "/settings/account",
          },
          {
            title: "Billing",
            childrens: [
              {
                title: "Payment",
                path: "/settings/billing/payment",
              },
              {
                title: "Subscription",
                path: "/settings/billing/subscription",
              },
            ],
          },
          {
            title: "Notifications",
            path: "/settings/notifications",
          },
        ],
      },
      {
        title: "Logout",
        icon: <AiOutlineLogout style={{color: "red"}} size={17} />,
        type:"Logout"
      },
    ],
  },
  {
    title: "Advance",
    icon: <FaArrowTrendUp />,
    childrens: [
      {
        title: "Search",
        path: "/search",
      },
      {
        title: "History",
        path: "/history",
      },
    ],
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp />,
    childrens: [
      {
        title: "Theme",
        icon: <IoIosColorPalette />,
        childrens: [
          {
            title: "light",
            icon: <CiLight style={{color: "white"}} size={17} />,
            type: "Theme",
          },
          {
            title: "dark",
            icon: <MdDarkMode style={{color: "black"}} size={14.5} />,
            type: "Theme",
          },
        ],
      },
      {
        title: "Language",
        icon: <FaLanguage />,
        childrens: [
          {
            title: "Eng",
            type: "Language",
          },
          {
            title: "Ger",
            type: "Language",
          },
          {
            title: "Fre",
            type: "Language",
          },
          {
            title: "Esp",
            type: "Language",
          },
          {
            title: "Ita",
            type: "Language",
          },
          {
            title: "Chn",
            type: "Language",
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    icon: <BiSupport />,
    path: "/support",
  },

  {
    title: "Report Bug",
    icon: <AiFillBug />,
    path: "/report-bug",
  },
];

export default DataStructureSidebar;
