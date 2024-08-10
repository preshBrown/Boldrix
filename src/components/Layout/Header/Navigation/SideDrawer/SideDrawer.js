import React from "react";

import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../../Interfaces/Backdrop/Backdrop";
import SideNavItems from "./SideNav/SideNavItems/SideNavItems";
import SideContents from "./SideContents/SideContents";
import Logo from "./Boldrix.png"
import { Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import { useSelector } from "react-redux";
// import DynamicSidebar from "../../../../DynamicSidebar/DynamicSidebar";

const animationTiming = {
  enter: 300,
  exit: 300,
};
const SideDrawer = (props) => {
  const theme = useSelector( state => state.ui.theme)



  const sideContent = (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.OpenSide,
        exit: "",
        exitActive: classes.CloseSide,
      }}
    >
      <aside data-theme={theme} className={classes.SideDrawer}>
        <div className={classes.SideDrawerHeader}>
        <Link to="/"><img className={classes.BoldrixImg} src={Logo} alt="Boldrix" /></Link>
          <span onClick={props.close}>
            <IoCloseOutline size={20} />
          </span>
        </div>
        <div className={classes.SideNavItems}>
          <SideNavItems />
        </div>

        <div className={classes.SideContents}>
          <SideContents />
        </div>
        {/* <DynamicSidebar /> */}
      </aside>
    </CSSTransition>
  );
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.close} />
      {ReactDOM.createPortal(
        sideContent,
        document.getElementById("sidedrawer-hook")
      )}
    </React.Fragment>
  );
};

export default SideDrawer;
