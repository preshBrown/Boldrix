import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { CiHeart } from "react-icons/ci";
import defaultImg from "./Bespoke-bourbon-cream.jpg";

import AddToCart from "./AddToCart/AddToCart";
import {
  bestPickItems,
  recommendedItems,
  hotDealsItems,
  newArrivalsItems,
} from "../Home/HomeData";

import { IoGitCompare } from "react-icons/io5";
import SimilarProduct from "../../components/SimilarProducts/SimilarProducts";
import ProductInfo from "./ProductInfo/ProductInfo";
import CommentLayout from "./CommentLayout/CommentLayout";
import Category from "../../components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import {
  initDetail,
  resetLoading,
} from "../../store/DetailsAndCart/detailAndCartAction";

import classes from "./Details.module.css";
import Spinner from "../../components/Interfaces/Spinner/Spinner";

const Details = (props) => {
  const [deliveryStartDate, setDeliveryStartDate] = useState("");
  const [deliveryEndDate, setDeliveryEndDate] = useState("");

  const dispatch = useDispatch();
  const product = useSelector((state) => state.dc.productDetail);
  const loading = useSelector((state) => state.dc.loading);
  const error = useSelector((state) => state.dc.error);

  const [openComments, setOpenComments] = useState(false);
  const navigate = useNavigate();

  const prodId = useParams().prodId;

  useEffect(() => {
    const allProducts = [
      ...bestPickItems,
      ...recommendedItems,
      ...hotDealsItems,
      ...newArrivalsItems,
    ];

    const product = allProducts.find(
      (products) => products.id.toString() === prodId
    );
    console.log("🚀 ~ useEffect ~ product:", product);
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    const orderDate = new Date(`${year}-${month}-${day}`);

    const addDays = (date, days) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    const deliveryStartDate = addDays(orderDate, 4);
    const deliveryEndDate = addDays(orderDate, 9);

    const options = {weekday:"long", year: "numeric", month: "short", day: "numeric" };
    const formattedStartDate = deliveryStartDate.toLocaleDateString(
      "en-GB",
      options
    );
    const formattedEndDate = deliveryEndDate.toLocaleDateString(
      "en-GB",
      options
    );

    setDeliveryStartDate(formattedStartDate);
    setDeliveryEndDate(formattedEndDate);

    setTimeout(() => {
      dispatch(initDetail(product));
    }, 5000);

    return () => dispatch(resetLoading());
  }, [dispatch, prodId]);

  const whishList = () => {
    console.log("🚀 ~ Details ~ prodId:", prodId);
  };

  const toggleComments = () => {
    if (!openComments) navigate("comments");
    // if (!openComments) navigate("comments");
    setOpenComments(!openComments);
  };

  let detail = (
    <div style={{paddingTop: "150px", paddingBottom: "150px"}}>
    <Spinner />
  </div> 
  );

  if (!loading && product)
    detail = (
      <>
        <section>
          <div className={classes.Details}>
            <div className={classes.DetailsImgWrapper}>
              <div className={classes.DetailsImgContainer}>
                <img src={product.image1} alt="Details" />
              </div>
              <h4>{product.brandSummary}</h4>
              <h5>{product.descriptionSummary}</h5>
            </div>

            <article className={classes.DetailsInfo}>
              <div className={classes.Info}>
                <div className={classes.Rating}>
                  <h2>{product.rating}</h2>
                  <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    value={product.rating}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                </div>
                <small>(19 reviews)</small>
                <small className={classes.WriteReaview}>Write A Review</small>
                <ul className={classes.Type}>
                  <li>
                    <small>
                      <span>Brand: </span> {product.brand}
                    </small>
                  </li>
                  <li>
                    <small>
                      <span>Category: </span> {product.category}
                    </small>
                  </li>
                  <li>
                    <small>
                      <span>Collections: </span> {product.collection}
                    </small>
                  </li>
                  <li>
                    <small>
                      <span>Availability: </span> {product.avalability}
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
          <AddToCart deliveryStartDate={deliveryStartDate}
           deliveryEndDate={deliveryEndDate}
           initialPrice={product.initialPrice} price={product.price} id={prodId} />
        </section>

        <section>
          <ProductInfo
            header="About The Product"
            subHeader="Product details"
            description={product.descriptionIntro}
            keyFeatures={product.keyFeatures}
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
            description={product.descriptionOutro}
          />
        </section>

        <SimilarProduct similarData={bestPickItems} />
        <Category />
      </>
    );

  return detail;
};

export default Details;
