import React from "react";
import img from "../Images/whiskyBackground.jpg";
import classes from "./WhyChooseUs.module.css";
import { MdPayment } from "react-icons/md";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import { GiCardPickup } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";

const WhyChooseUs = () => {
  const items = [
    {
      id: 1,
      header: " Fast Delivery",
      icon: (
        <>
          <TbTruckDelivery size={26} />
        </>
      ),
      description:
        "When you shop at our online store, you can expect quick delivery right to your home.",
    },
    {
      id: 2,
      header: "Convenient Payment Methods",
      icon: (
        <>
          <MdPayment size={26} />
        </>
      ),
      description:
        "In order to give customers a hassle-free purchasing experience, we use practical and cost-effective payment methods on our online store. we provide a variety of payment methods? Both credit card payments and direct bank account payments are accepted.",
    },
    {
      id: 3,
      header: "Find Rare Varieties",
      icon: (
        <>
          <GiCardPickup size={26} />
        </>
      ),
      description:
        "On our online store, you can quickly search and select from a wide variety of collections. A greater variety of collections, including those for wines, gins, rums, whiskeys, etc., are available.",
    },
    {
      id: 4,
      header: "Saves a lot of time.",
      icon: (
        <>
          <IoIosTimer size={26} />
        </>
      ),
      description:
        "You save a ton of time by buying  from our online store. You can easily order  from the comfort of your home and have it delivered right to your door with a few clicks.",
    },
    {
      id: 5,
      header: "Best Price",
      icon: (
        <>
          <IoPricetag size={26} />
        </>
      ),
      description:
        "Our online liquor store give you  better prices. That also includes our higher-quality stock. With that, you might be certain that you are getting the best deals on your preferred product you buying from us.",
    },
    {
      id: 6,
      header: "Amazing Deals and Discounts",
      icon: (
        <>
          <TbDiscount size={26} />{" "}
        </>
      ),
      description:
        "We frequently provide unbelievable deals with great discounts and gifts also during the holiday season.",
    },
  ];

  return (
    <>
      <article style={{ textAlign: "center", paddingTop: "25px" }}>
        <h1>Why Choose Us</h1>
        <p>
          Our main goal is to ensure you buy original drinks. In addition to the
          peace of mind we provide when you buy original drinks,
        </p>
      </article>

      <article className={classes.WhyChooseUs}>
        {items.map((item) => (
          <div key={item.id} className={classes.Item}>
            <header>
          <span style={{verticalAlign: "middle"}}> {item.icon}</span> <span >{item.header}</span>
            </header>
            <p>{item.description}</p>
          </div>
        ))}
      </article>

      <article className={classes.Diff}>
        <div className={classes.DiffImgWrapper}>
          <img src={img} alt="Differences" />
        </div>
        <h1>What Makes Us Different</h1>
        <p>
          We highly respect your service and think that our satisfaction is a
          direct result of your happiness. As a result, whether you’re
          entertaining, looking for a gift, or just need something to help you
          relax after a long week, we’re here to assist you in selecting the
          ideal drink. You can get assistance from our knowledgeable staff with
          gift suggestions for your loved ones, friends, or yourself. We are
          continually looking to bring new goods from different vineyards,
          distilleries, and breweries. With us, we assure you that you can never
          go wrong
        </p>
      </article>
    </>
  );
};

export default WhyChooseUs;
