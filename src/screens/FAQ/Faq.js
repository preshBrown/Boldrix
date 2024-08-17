import React from "react";
import FaqCard from "./FaqCard/FaqCard";
import FaqForm from "./FaqForm/FaqForm";
import {
  delivery,
  general,
  ordering,
  payment,
  returns,
  support,
} from "./FaqData";

import classes from "./Faq.module.css";
import Button from "../../components/Interfaces/Button/Button";
import Category from "../../components/Category/Category";

const Faq = (props) => {
  return (
    <section className={classes.Faq}>
      <div className={classes.FaqContainer}>
        <article className={classes.FaqHeader}>
          <h1>FAQs</h1>

          <h4>How can we help you today?</h4>
          <p>
            This information has been designed to assist you to use our service
            more effectively. If you don’t find an answer or need further help,
            feel free to{" "}
            <Button className={classes.ContactBtn} Danger to="/contact">
              contact us
            </Button>
            .
          </p>
        </article>

        <article className={classes.FaqDescription}>
          <FaqCard header="General" data={general} />
          <FaqCard header="Ordering" data={ordering} />
          <FaqCard header="Payment" data={payment} />
          <FaqCard header="Delivery" data={delivery} />
          <FaqCard header="Returns" data={returns} />
          <FaqCard header="Support" data={support} />
        </article>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <FaqForm />
      </div>

      <Category />
    </section>
  );
};

export default Faq;
