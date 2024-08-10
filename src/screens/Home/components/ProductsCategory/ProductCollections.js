import React from "react";

import { SlBadge } from "react-icons/sl";
import { GiBeerBottle } from "react-icons/gi";

import ProductLayout from "./ProductLayout/ProductLayout";
import Spinner from "../../../../components/Interfaces/Spinner/Spinner"
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
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione numquam quia mollitia"
        items={bestPicks && !bestPicksLoader ? bestPicks : <Spinner />}
      />

      <ProductLayout
        category="Recommended"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione numquam quia mollitia"
        items={
          recommended && !recommendedLoader ? recommended : <Spinner />
        }
      />

      <ProductLayout
        category="Hot Deals"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione numquam quia mollitia"
        items={hotDeals && !hotDealsLoader ? hotDeals : <Spinner />}
      />

      <ProductLayout
        category="New Arrival"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ratione numquam quia mollitia"
        items={
          newArrivals && !newArrivalsLoader ? newArrivals : <Spinner />
        }
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
