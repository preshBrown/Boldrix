import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Interfaces/Button/Button";
import Imgs from "./customer-1.jpg";
import { TiShoppingCart } from "react-icons/ti";

import classes from "./Profile.module.css";
import { CiEdit } from "react-icons/ci";
import { BiSolidPurchaseTag } from "react-icons/bi";
import Spinner from "../../../components/Interfaces/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { closeUserError, getUserData } from "../../../store/user/userActions";
import ErrorModal from "../../../components/Interfaces/ErrorModal/ErrorModal";

const Profile = () => {
  const {userId} = useParams()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);
  const token = useSelector((state) => state.logIn.token);
  const userData = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    console.log("🚀 ~ Profile ~ token:", token)
    dispatch(getUserData(userId, token));
  }, []);

  const closeErrorModal = () => {
    dispatch(closeUserError());
    navigate(-1);
  };

  let user = (
    <div style={{ paddingTop: "150px", paddingBottom: "150px" }}>
      <Spinner />
    </div>
  );

  if (!loading && userData) {
    user = (
      <>
        <article className={classes.ProfileDescription}>
          <div className={classes.ProfileImageWrapper}>
            <img src={`${process.env.REACT_APP_BACKEND_URL.split("/api")[0]}/${userData.image}`} alt="Profile" />
          </div>

          <h4 className={classes.ProfileUserName}>{userData.name}</h4>
          <p className={classes.ProfileBio}>
            {" "}{userData.bio}
          </p>
          <Button to="/forgot-password" className={classes.ResetPass}>
            <span>
              <CiEdit size={20} />
            </span>
            Reset Password
          </Button>
        </article>

        <div className={classes.ProfileNavigations}>
          <Button className={classes.ProfileCart} to="/cart">
            {" "}
            <span>
              <TiShoppingCart size={20} />
            </span>
            Cart
          </Button>
          <Button className={classes.ProfileOrders} to="/orders">
            Orders{" "}
            <span>
              <BiSolidPurchaseTag size={20} />
            </span>
          </Button>
        </div>
      </>
    );
  }

  return (
    <section className={classes.Profile}>
      <ErrorModal
        errorMessage={error}
        error={error}
        close={closeErrorModal.bind()}
      />
      {user}
    </section>
  );
};

export default Profile;
