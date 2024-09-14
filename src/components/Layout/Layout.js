import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import SideDrawer from "./Header/Navigation/SideDrawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Layout.module.css";
import { initTheme } from "../../store/ui/uiActions";
import ValidAge from "../../screens/ValidAge/ValidAge";

const Layout = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const selectedTheme = localStorage.getItem("Theme");

  useEffect(() => {
    if (selectedTheme) dispatch(initTheme(selectedTheme));
  }, [dispatch, selectedTheme]);

  const toggleSide = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const closeSide = () => {
    setShowSideDrawer(false);
  };
  return (
    <div data-theme={theme} className={classes.LayoutWrapper}>
      <Header toggle={toggleSide} />
      <SideDrawer show={showSideDrawer} close={closeSide} />
      <ValidAge />
      <main className={classes.Layout}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
