import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import OrderListItem from "../OrderListItem/OrderListItem";


import classes from "./OrderCard.module.css";

const OrderCard = (props) => {
  const { limitDropdown, id, closeLimitDropdown, isDropOpen } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDropOpen === id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isDropOpen, id]);

  const toggleInfo = () => {
    // setOpen(!open);
    if (isDropOpen === id) {
      console.log("toggle - closeLimt");

      closeLimitDropdown();
    } else {
      limitDropdown(id);
    }
  };
  const openInfo = () => {
    setOpen(true);
  };

  const closeInfo = () => {
    setOpen(false);
  };
  // onClick={openInfo.bind(this)}
  // onClick={closeInfo.bind(this)}

  return (
    <>
      <div className={`${classes.OrderCard} ${open ? classes.Open : ""}`}>
        <header
          onClick={toggleInfo.bind(this)}
          className={classes.OrderCardHeader}
        >

          <h4>{props.header}</h4>{" "}
          <h4 className={classes.cost}>₦ {props.cost}</h4>{" "}
          <FaChevronRight
            className={classes.Icon}
            onClick={toggleInfo.bind(this)}
            size={23}
          />
        </header>
        {open && (
          <ul className={classes.OrderCardDescription}>
            {props.data.map((data) => (
              <OrderListItem 
               key={data.id}
                img={data.image1}
                description={data.brandSummary}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default OrderCard;
