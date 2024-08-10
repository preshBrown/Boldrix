import React from "react";
import { useOutletContext } from "react-router-dom";
import CommentCard from "../CommentCard/CommentCard";
import user1 from "./customer-1.jpg"


import classes from "./Comments.module.css"

const Comments = () => {

  const contextData = useOutletContext();
  console.log("🚀 ~ Comments ~ contextData:", contextData);



  // const comments = <p> LOADING...</p>
  const comments = (
    <ul className={classes.Comments}>
      <CommentCard Img={user1} alt="user"/>
      <CommentCard Img={user1} alt="user"/>
    </ul>
  )



  return comments;
};

export default Comments;
