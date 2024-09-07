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
import { initDetail } from "../../store/DetailsAndCart/detailAndCartAction";

import classes from "./Details.module.css";
import Spinner from "../../components/Interfaces/Spinner/Spinner";

const Details = (props) => {
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

    const product = allProducts.find((products) => products.id === prodId);
    console.log("🚀 ~ useEffect ~ product:", product);

    setTimeout(() => {
      dispatch(initDetail(product));
    }, 1000);
  }, [dispatch, prodId]);

  const whishList = () => {
    console.log("🚀 ~ Details ~ prodId:", prodId);
  };

  const toggleComments = () => {
    if (!openComments) navigate("comments");
    // if (!openComments) navigate("comments");
    setOpenComments(!openComments);
  };

  let detail = <Spinner />

  if (!loading && product) detail = (
    <>
      {/* <section>
        <div className={classes.Details}>
          <div className={classes.DetailsImgWrapper}>
            <div className={classes.DetailsImgContainer}>
              <img src={defaultImg} alt="Details" />
            </div>
            <h4>{product.brandSummary}</h4>
            <h5>{product.descriptionSummary}</h5>
          </div>

          <article className={classes.DetailsInfo}>
            <div className={classes.Info}>
              <div className={classes.Rating}>
                <h2>4.5</h2>
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
      </section> */}



      {/* <section style={{ marginBottom: "35px" }}>
        <AddToCart price={product.price} />
      </section> */}

      {/* <section>
        <ProductInfo
          header="About The Product"
          subHeader="Product details"
          description={product.descriptionIntro}
          // keyFeatures={product.keyFeatures}
        />
      </section> */}

      {/* <section>
        <CommentLayout
          header="Reviews"
          toggleComments={toggleComments}
          open={openComments} 
        >
          <Outlet context={{ ...props, userComment: false }} />
        </CommentLayout>
      </section> */}

      {/* <section style={{ marginBottom: "35px" }}>
        <ProductInfo
          header="Shipping Policy"
          subHeader="Shipping Policy"
          description={product.descriptionOutro}
        />
      </section> */}

      {/* <SimilarProduct similarData={bestPickItems} /> */}
      {/* <Category /> */}
    </>
  );


  return {detail};
};

export default Details;
