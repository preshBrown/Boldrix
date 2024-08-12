import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import defaultImg from "./Bespoke-bourbon-cream.jpg";

import AddToCart from "./AddToCart/AddToCart";
import { bestPickItems } from "../Home/HomeData";

import { IoGitCompare } from "react-icons/io5";
import SimilarProduct from "../../components/SimilarProducts/SimilarProducts";
import ProductInfo from "./ProductInfo/ProductInfo";
import CommentLayout from "./CommentLayout/CommentLayout";
import Category from "../../components/Category/Category";

import classes from "./Details.module.css";

const Details = (props) => {
  const [openComments, setOpenComments] = useState(false);
  const navigate = useNavigate();

  const prodId = useParams().prodId;

  const whishList = () => {
    console.log("🚀 ~ Details ~ prodId:", prodId);
  };

  const toggleComments = () => {
    if (!openComments) navigate("comments");
    // if (!openComments) navigate("comments");
    setOpenComments(!openComments);
  };

  return (
    <>
      <section>
        <div className={classes.Details}>
          <div className={classes.DetailsImgWrapper}>
            <div className={classes.DetailsImgContainer}>
              <img src={defaultImg} alt="Details" />
            </div>
            <h4>Boldiva/ Whisky/ 70cl</h4>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.Reiciendis ratione numquam quia molli
            </h5>
          </div>

          <article className={classes.DetailsInfo}>
            <div className={classes.Info}>
              <div className={classes.Rating}>
                <h2>4.5</h2>
                <ReactStars
                  count={5}
                  edit={false}
                  size={24}
                  value={3}
                  activeColor="#ffd700"
                />
              </div>
              <small>(19 reviews)</small>
              <small className={classes.WriteReaview}>Write A Review</small>
              <ul className={classes.Type}>
                <li>
                  <small>
                    <span>Brand: </span> boldiver
                  </small>
                </li>
                <li>
                  <small>
                    <span>Category: </span> Whisky
                  </small>
                </li>
                <li>
                  <small>
                    <span>Collections: </span> Hot deal
                  </small>
                </li>
                <li>
                  <small>
                    <span>Availability: </span> In stock
                  </small>
                </li>
              </ul>

              <button onClick={whishList}>
                <span style={{ verticalAlign: "middle", color: "red" }}>
                  {" "}
                  <CiHeart size={20} />
                </span>{" "}
                Add To Wishlist
              </button>
              <button onClick={whishList}>
                <span style={{ verticalAlign: "middle" }}>
                  {" "}
                  <IoGitCompare size={20} />
                </span>{" "}
                Add To Compare
              </button>
            </div>
          </article>
        </div>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <AddToCart price="$ 500" />
      </section>

      <section>
        <ProductInfo
          header="About The Product"
          subHeader="Product details"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molli"
        />
      </section>

      <section>
        <CommentLayout
          header="Reviews"
          toggleComments={toggleComments}
          open={openComments}
        >
          <Outlet context={{ ...props, userComment: false }} />
        </CommentLayout>
      </section>

      <section style={{ marginBottom: "35px" }}>
        <ProductInfo
          header="Shipping Policy"
          subHeader="Shipping Policy"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molliLorem ipsum, dolor sit amet consectetur adipisicing elit.Reiciendis ratione numquam quia molli"
        />
      </section>

      <SimilarProduct similarData={bestPickItems} />
      <Category />
    </>
  );
};

export default Details;
