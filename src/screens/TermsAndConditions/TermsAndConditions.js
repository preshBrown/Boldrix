import React from "react";
import PolicyHeader from "../PrivacyPolicy/PolicyHeader/PolicyHeader";
import { useNavigate } from "react-router-dom";
import PrivacyLogo from "./Privacy-Policy.png";
import PolicyCard from "../PrivacyPolicy/PolicyCard/PolicyCard";

import classes from "./TermsAndConditions.module.css";
import { termsData } from "./TermsData/TermsData";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/");
  };
  return (
    <>
      <PolicyHeader
        link="#"
        heading="Terms & Conditions"
        intro="Welcome to our website dedicated to our brand BOLDRIX® (the “Website”). You should be of legal drinking age in your country to visit the Website."
        img={PrivacyLogo}
        alt="Term & Conditions"
        getStarted={getStarted.bind(this)}
      />

      <div className={classes.TermsAndConditions}>
        <p>
        These Terms and conditions together with our Privacy Policy and Cookie Policy (the “Terms”) govern your use of this Website.
        </p>{" "}
      </div>
      {termsData.map((policies) => (
        <PolicyCard
          key={policies.title}
          title={policies.title}
          header={policies.header}
          listData={policies.listData}
          footerData={policies.footerData}
        />
      ))}
      <h4 className={classes.Effective}>
        This terms is effective as of 30 November 2022.
      </h4>
    </>
  );
};

export default TermsAndConditions;
