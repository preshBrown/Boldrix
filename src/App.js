import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./screens/Home/Home";
import Details from "./screens/Details/Details";
import LogIn from "./screens/Auth/LogIn";
import SignUp from "./screens/Auth/SignUp";
import Searched from "./screens/Searched/Searched";
import Cart from "./screens/Cart/Cart";
import ErrorPage from "./screens/ErrorPage/ErrorPage"
import { useDispatch, useSelector } from "react-redux";
import { initTheme } from "./store/ui/uiActions";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Comments from "./screens/Details/CommentLayout/Comments/Comments";
import UserComment from "./screens/Details/CommentLayout/UserComment/UserComment";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector( state => state.ui.theme)

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const selectedTheme = localStorage.getItem("Theme");




  if (preference && (!selectedTheme))
    dispatch(initTheme("dark"));



  return (
    <Routes>
      <Route path="/" element={<Layout  theme={theme} />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<LogIn />} />

        <Route path="/products/:prodId" element={<Details />} >
        <Route path="comments" element={<Comments />} />
        <Route path="user-comment" element={<UserComment />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searched/:prodId" element={<Searched />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<ErrorPage/> } />
      </Route>
    </Routes>
  );
}

export default App;
