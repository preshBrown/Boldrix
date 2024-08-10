import React from "react";
import Marquee from "react-fast-marquee";

import { PiWine } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { PiGift } from "react-icons/pi";
import { LuGrape } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import ContentItem from "./ContentItem/ContentItem";
import classes from "./Contents.module.css";

const Contents = () => {
  const contentItems = [
    { name: "Wines", icons: <PiWine /> },
    { name: "Offers", icons: <BiSolidOffer /> },
    { name: "Gifts", icons: <PiGift /> },
    { name: "Grapes", icons: <LuGrape /> },
    { name: "Regions", icons: <IoLocationOutline /> },
  ];

  const contents = (
    <Marquee pauseOnHover={true} speed={60} >
        {contentItems.map((items) => (
          <ContentItem key={items.name} icon={items.icons} name={items.name} />
        ))}
    </Marquee>
  );



  return <nav className={classes.ContentsNav}>{contents}</nav>;
};

export default Contents;
