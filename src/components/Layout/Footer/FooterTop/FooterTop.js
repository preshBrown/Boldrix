import React from "react";

import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiWineBottle } from "react-icons/gi";

import classes from "./FooterTop.module.css";
import FooterTopItem from "./FooterTopItem/FooterTopItem";
import Subscribe from "./FooterTopItem/Subscribe/Subscribe";
import BoldrixIntro from "./FooterTopItem/BoldrixIntro/BoldrixIntro";

const FooterTop = () => {
  const itemsData = [
    {
      id: 1,
      to: "#",
      icon: <RiVerifiedBadgeLine size={35} />,
      data: "Shop the world's largest wine marketplace ",
    },
    {
      id: 2,
      to: "#",
      icon: <MdOutlineSupportAgent size={35} />,
      data: "Our support team is always here to help",
    },
    {
      id: 3,
      to: "#",
      icon: <TbTruckDelivery size={35} />,
      data: "Careful delivery right to your doorstep",
    },
    {
      id: 4,
      to: "#",
      icon: <GiWineBottle size={35} />,
      data: "Check honest reviews of any wine before purchase",
    },
  ];
  return (
    <div className={classes.FooterTop}>
      <Subscribe />
      <BoldrixIntro />
      <h2>Trusted by millions to discover and buy the right wine every time</h2>
      <ul className={classes.ItemsContainer}>
        {itemsData.map((items) => (
          <FooterTopItem
            key={items.id}
            to={items.to}
            icon={items.icon}
            data={items.data}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterTop;
