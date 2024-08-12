import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import Backdrop from "../Backdrop/Backdrop";
import ReactDOM from "react-dom";


import classes from "./Modal.module.css";

const animationTiming = {
  enter: 400,
  exit: 400,
};


const ModalOverlay = (props) => {


  const overlay = (
    <article className={[classes.Modal, props.className].join(" ")}>
      <header className={[classes.ModalHeader, props.headerClass].join(" ")}>
        <h3>{props.header}</h3>
      </header>

      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={[classes.ModalContent, props.contentClass].join(" ")}>
          {props.children}
        </div>

        <footer className={[classes.ModalFooter, props.footerClass].join(" ")}>
          {props.footer}
        </footer>
      </form>
    </article>
  );

  return overlay
};

const Modal = (props) => {


  const modal = (
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
    <ModalOverlay {...props} />
  </CSSTransition>
  )


  return (
    <React.Fragment>
    <Backdrop show={props.show} clicked={props.close} />
    {/* {ReactDOM.createPortal(
      modal,
      document.getElementById("modal-hook")
    )} */}
    {modal}
  </React.Fragment>
  );
};

export default Modal;
