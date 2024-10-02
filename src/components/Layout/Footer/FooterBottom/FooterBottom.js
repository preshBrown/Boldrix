import React from "react";
import CoreList from "./CoreList/CoreList";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import classes from "./FooterBottom.module.css";
import SocialHandle from "./SocialHandle/SocialHandle";
import DownloadLinks from "./DownloadLinks/DownloadLinks";

const FooterBottom = () => {
  return (
    <div className={classes.FooterBottom}>
      <section className={classes.FooterItemContainer}>
        <div>
          <CoreList />
        </div>

        <div className={classes.FooterBottomContainer}>
          {/* <section>
            <PaymentMethods />
            <small>Payment options will vary by merchant</small>
          </section>
          <section style={{ width: "100%" }}>
            <DownloadLinks />
          </section> */}
          <section>
            <SocialHandle />
          </section>
        </div>
      </section>

      <section className={classes.LastFooterInfo}>
        {" "}
        <p>
          &copy;{new Date().getFullYear()}{" "}
          <em>
            <strong>Boldrix</strong>
          </em>{" "}
        </p>
      </section>
    </div>
  );
};

export default FooterBottom;
