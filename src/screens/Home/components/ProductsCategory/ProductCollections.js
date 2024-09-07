import React from "react";

import { SlBadge } from "react-icons/sl";
import { GiBeerBottle } from "react-icons/gi";

import ProductLayout from "./ProductLayout/ProductLayout";
import Spinner from "../../../../components/Interfaces/Spinner/Spinner";
// import HomeLoadingSpinner from "../../../../components/Interfaces/HomeLoadingSpinner/HomeLoadingSpinner";

const ProductCollections = (props) => {
  const {
    bestPicks,
    recommended,
    hotDeals,
    newArrivals,
    bestPicksLoader,
    recommendedLoader,
    hotDealsLoader,
    newArrivalsLoader,
  } = props;

  const productCollections = (
    <>
      <ProductLayout
        category="Best Picks"
        badgeIcon={<SlBadge size={35} />}
        beerIcon={<GiBeerBottle size={70} />}
        description="Our Best Picks collection features the most popular drinks that our customers can't get enough of. Handpicked by our experts, these beverages offer the perfect blend of taste and quality. Whether you're looking for something refreshing or a drink to complement your meal, our Best Picks won't disappoint."
        items={bestPicks && !bestPicksLoader ? bestPicks : <Spinner />}
      />

      <ProductLayout
        category="Recommended"
        description="Not sure what to try? Let us guide you with our Recommended collection. We've carefully selected a variety of drinks that cater to different tastes and preferences. From classic flavors to new favorites, these recommendations are sure to satisfy your palate."
        items={recommended && !recommendedLoader ? recommended : <Spinner />}
      />

      <ProductLayout
        category="Hot Deals"
        description="Get the most out of your money with our Hot Deals collection. Enjoy high-quality drinks at unbeatable prices. These offers won't last long, so grab your favorite beverages while you can and make the most of these limited-time savings."
        items={hotDeals && !hotDealsLoader ? hotDeals : <Spinner />}
      />

      <ProductLayout
        category="New Arrival"
        description="Be the first to experience the latest additions to our collection with our New Arrivals. We've introduced a range of exciting new drinks, each with its unique flavor and character. Discover the newest trends in beverages and enjoy something fresh and exciting."
        items={newArrivals && !newArrivalsLoader ? newArrivals : <Spinner />}
      />
    </>
  );
  // let productCollections = <HomeLoadingSpinner />;

  // if (!props.loading && props.data) {
  // productCollections = props.data.map((data) => (
  //   <ProductLayout
  //     key={data.id}
  //     id={data.id}
  //     category={data.category}
  //     badgeIcon={data.badgeIcon}
  //     beerIcon={data.beerIcon}
  //     description={data.description}
  //     items={data.items}
  //   />
  //   ));
  // }

  return productCollections;
};

export default ProductCollections;
