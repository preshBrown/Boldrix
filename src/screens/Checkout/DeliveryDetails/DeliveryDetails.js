import React from "react";
import Button from "../../../components/Interfaces/Button/Button";
import Logo from "./Bespoke-bourbon-cream.jpg";
import classes from "./DeliveryDetails.module.css";
import { MdTransferWithinAStation } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const DeliveryDetails = (props) => {
  const navigate = useNavigate();

  const onPurchase = () => {
    navigate("/");
  };
  return (
    <>
      <h4 className={classes.CheckoutPaymentMethod}>
        <span className={classes.CheckoutPaymentMethodHeader}>
          DELIVERY DETAILS
        </span>{" "}
        <Button Danger to="#" className={classes.Change}>
          Change
        </Button>
      </h4>

      <article className={classes.DeliveryDetails}>
        <div className={classes.PaymentMethod}>
          <span>
            <MdTransferWithinAStation size={26} />
          </span>
          <div className={classes.PaymentMethodContentWrapper}>
            <h4>Pick-up Station</h4>
            <small>Delivery between 19 Aug & 25 Aug.</small>
          </div>
        </div>

        <ul className={classes.DeliveryDetailsItems}>
          <li className={classes.DeliveryDetailsItem}>
            <h5>
              <span>Shipment 1/2</span>
              <span>Fulfilled by Boldrix</span>
            </h5>

            <article className={classes.DeliveryDetailsCard}>
              <div className={classes.PickUpStation}>
                <h5> Pick-up Station</h5>
                <small>Delivery between 19 Aug & 25 Aug</small>
              </div>

              <div className={classes.ItemDescription}>
                <div className={classes.ItemDescriptionImgWrapper}>
                  <img src={Logo} alt="ItemImage" />
                </div>
                <div>
                  <h4>
                    Lattude boldiver Lorem ipsum, dolor sit amet consectetur
                  </h4>
                  <small>QTY:</small> <span>2</span>
                </div>
              </div>
            </article>
          </li>
          <li className={classes.DeliveryDetailsItem}>
            <h5>
              <span>Shipment 1/2</span>
              <span>Fulfilled by Boldrix</span>
            </h5>

            <article className={classes.DeliveryDetailsCard}>
              <div className={classes.PickUpStation}>
                <h5> Pick-up Station</h5>
                <small>Delivery between 19 Aug & 25 Aug</small>
              </div>

              <div className={classes.ItemDescription}>
                <div className={classes.ItemDescriptionImgWrapper}>
                  <img src={Logo} alt="ItemImage" />
                </div>
                <div>
                  <h4>
                    Lattude boldiver Lorem ipsum, dolor sit amet consectetur
                  </h4>
                  <small>QTY:</small> <span>2</span>
                </div>
              </div>
            </article>
          </li>
          <li className={classes.DeliveryDetailsItem}>
            <h5>
              <span>Shipment 1/2</span>
              <span>Fulfilled by Boldrix</span>
            </h5>

            <article className={classes.DeliveryDetailsCard}>
              <div className={classes.PickUpStation}>
                <h5> Pick-up Station</h5>
                <small>Delivery between 19 Aug & 25 Aug</small>
              </div>

              <div className={classes.ItemDescription}>
                <div className={classes.ItemDescriptionImgWrapper}>
                  <img src={Logo} alt="ItemImage" />
                </div>
                <div>
                  <h4>
                    Lattude boldiver Lorem ipsum, dolor sit amet consectetur
                  </h4>
                  <small>QTY:</small> <span>2</span>
                </div>
              </div>
            </article>
          </li>
        </ul>
        <h3 className={classes.ModifyCart}>
          <Button Danger className={classes.ModifyCartBtn} to="/cart">
            {" "}
            MODIFY CART{" "}
          </Button>{" "}
        </h3>
      </article>

      <h4 className={classes.BackHome}>
        <Button Danger to="/">
          <span>
            <IoIosArrowBack className={classes.BackHomeIcon} size={24} />
          </span>
          Go back & continue shopping
        </Button>
      </h4>

      <div className={classes.ConfirmOrder}>
        <button onClick={onPurchase}>CONFIRM ORDER</button>
      </div>
    </>
  );
};

export default DeliveryDetails;
