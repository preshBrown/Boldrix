import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import ModalComponents from "./ModalComponents/ModalComponents";
import classes from "./AuthModal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import HomeBackdrop from "../HomeLoadingSpinner/HomeBackdrop";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const AuthModal = (props) => {

  const authModal = (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.Mopen,
        exit: "",
        exitActive: classes.Mclose,
      }}
    >
      <div onClick={props.close} className={classes.AuthModal}>
        <ModalComponents />
      </div>
    </CSSTransition>
  );

  return (
    <React.Fragment>
      <HomeBackdrop show={props.show} close={props.close} />
    {authModal}
    </React.Fragment>
  ) 
};

export default AuthModal;
