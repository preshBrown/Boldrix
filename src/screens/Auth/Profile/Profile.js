import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Interfaces/Button/Button";
import Imgs from "./customer-1.jpg";
import { TiShoppingCart } from "react-icons/ti";


import classes from "./Profile.module.css";
import { CiEdit } from "react-icons/ci";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Profile = () => {
  return (
    <section className={classes.Profile}>
      <article className={classes.ProfileDescription}>
        <div className={classes.ProfileImageWrapper}>
          <img src={Imgs} alt="Profile" />
        </div>

        <h4 className={classes.ProfileUserName}>Victo Marshal</h4>
        <p className={classes.ProfileBio}>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          ratione numquam quia mollitia
        </p>
        <Button to="/forgot-password" className={classes.ResetPass}>
            <span><CiEdit size={20}/></span>
          Reset Password
        </Button>
      </article>

      <div className={classes.ProfileNavigations}>
        <Button  className={classes.ProfileCart} to="/cart">
          {" "}
          <span><TiShoppingCart size={20} /></span>Cart
        </Button>
        <Button  className={classes.ProfileOrders} to="/orders">
          Orders <span><BiSolidPurchaseTag size={20} /></span>
        </Button>
      </div>
    </section>
  );
};

export default Profile;
