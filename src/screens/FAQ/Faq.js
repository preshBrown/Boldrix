import React, { useCallback, useState } from "react";
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
const [isDropOpen, setIsDropOpen] = useState("")


const limitDropdown = id => {
  setIsDropOpen(id)
}

const closeLimitDropdown = () => {
  setIsDropOpen("")
}
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
          <FaqCard
            limitDropdown={limitDropdown}
            closeLimitDropdown={closeLimitDropdown}
            isDropOpen={isDropOpen}
            header="General"
            id="General"
            data={general}
          />
          <FaqCard 
          limitDropdown={limitDropdown}
          closeLimitDropdown={closeLimitDropdown}
          isDropOpen={isDropOpen}
          id="Ordering"
          header="Ordering" data={ordering} />

          <FaqCard
          limitDropdown={limitDropdown}
          closeLimitDropdown={closeLimitDropdown}
          isDropOpen={isDropOpen}
          id="Payment"
           header="Payment" data={payment} />

           <FaqCard
            limitDropdown={limitDropdown}
            closeLimitDropdown={closeLimitDropdown}
            isDropOpen={isDropOpen}
            id="Delivery"
            header="Delivery" data={delivery} />
          <FaqCard 
          limitDropdown={limitDropdown}
          closeLimitDropdown={closeLimitDropdown}
          isDropOpen={isDropOpen}
          id="Returns"
          header="Returns" data={returns} />

          <FaqCard 
          limitDropdown={limitDropdown}
          closeLimitDropdown={closeLimitDropdown}
          isDropOpen={isDropOpen}
          id="Support"
          header="Support" data={support} />
        </article>

        <div className={classes.FaqFormGrid}>
          <FaqForm />
        </div>
      </div>
      <Category />
    </section>
  );
};

export default Faq;
