import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";
import Login from "./screens/Auth/Login/LogIn";
import SignUp from "./screens/Auth/SignUp/SignUp";
import Searched from "./screens/Searched/Searched";
import Cart from "./screens/Cart/Cart";
import ErrorPage from "./screens/ErrorPage/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { initTheme, onIsValidAge } from "./store/ui/uiActions";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Comments from "./screens/Details/CommentLayout/Comments/Comments";
import UserComment from "./screens/Details/CommentLayout/UserComment/UserComment";
import Faq from "./screens/FAQ/Faq";
import Checkout from "./screens/Checkout/Checkout";
import ProductsStore from "./screens/ProductsStore/ProductsStore";
import TermsAndConditions from "./screens/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";
import ForgotPassword from "./screens/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./screens/Auth/ResetPassword/ResetPassword";
import Profile from "./screens/Auth/Profile/Profile";
import Orders from "./screens/Orders/Orders";
import { checkAuth, logout } from "./store/Auth/loginActions";

let logoutTimer;

function App() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.ui.theme);
  const token = useSelector((state) => state.logIn.token);

  const tokenUiExpirationDate = useSelector(
    (state) => state.logIn.tokenUiExpirationDate
  );

  useEffect(() => {
    if (token && tokenUiExpirationDate) {
      console.log("🚀 ~ useEffect ~ tokenUiExpirationDate:", tokenUiExpirationDate)
      const remainingTime =
        tokenUiExpirationDate.getTime() - new Date().getTime();

      logoutTimer = setTimeout(() => {
        dispatch(logout());
      }, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenUiExpirationDate, dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  },[dispatch]);

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const selectedTheme = localStorage.getItem("Theme");

  if (preference && !selectedTheme) dispatch(initTheme("dark"));

  const userConsent = localStorage.getItem("userConsent");
  if (userConsent === "true") dispatch(onIsValidAge());


  return (
    <Routes>
      <Route path="/" element={<Layout theme={theme} />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/products" element={<ProductsStore />} />
        <Route path="/products/:prodId" element={<Details />}>
          <Route path="comments" element={<Comments />} />
          <Route path="user-comment" element={<UserComment />} />
        </Route>
        <Route path="/searched/:prodId" element={<Searched />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
//₦
