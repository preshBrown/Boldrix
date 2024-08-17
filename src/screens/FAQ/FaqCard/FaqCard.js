import React, { useState } from "react";

import classes from "./FaqCard.module.css";
import { TiMinus, TiPlus } from "react-icons/ti";

const FaqCard = (props) => {
  const [open, setOpen] = useState(false);

  const toggleInfo = () => {
    setOpen(!open);
  };
  const openInfo = () => {
    setOpen(true);
  };

  const closeInfo = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={`${classes.FaqInfo} ${open ? classes.Open : ""}`}>
        <header
          onClick={toggleInfo.bind(this)}
          className={classes.FaqInfoHeader}
        >
          {open ? (
            <TiMinus
              className={classes.Icon}
              onClick={openInfo.bind(this)}
              size={23}
            />
          ) : (
            <TiPlus
              className={classes.Icon}
              onClick={closeInfo.bind(this)}
              size={23}
            />
          )}
          <h4>{props.header}</h4>{" "}
        </header>
        {open && (
          <div className={classes.FaqInfoDescription}>
            {props.data.map((data) => (
              <>
                <h5>{data.subHeader}</h5>
                <p>{data.description}</p>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FaqCard;
