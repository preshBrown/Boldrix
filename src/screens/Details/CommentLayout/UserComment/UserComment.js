import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import user1 from "./customer-1.jpg"
import CommentCard from "../CommentCard/CommentCard";

import classes from "./UserComment.module.css";
import UserForm from "./UserForm/UserForm";



const UserComment = (props) => {
  const contextData = useOutletContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
setLoading(false)
    }, 2000)
  })

  let userComment = <h3>LOADING...</h3>
  if (!loading && contextData.userComment) userComment = userComment = (
    <ul className={classes.UserComment}>
      <CommentCard Img={user1} alt="user" />
    </ul>
  );
  if (!loading && !contextData.userComment) userComment = userComment = (
    <>
       <UserForm  Img={user1} alt="user" />
    </>
  );

  return userComment ;
};

export default UserComment;
