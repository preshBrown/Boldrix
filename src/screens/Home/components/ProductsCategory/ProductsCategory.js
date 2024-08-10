import React from "react";

import ProductLayout from "./ProductLayout/ProductLayout";
import HomeLoadingSpinner from "../../../../components/Interfaces/HomeLoadingSpinner/HomeLoadingSpinner";

const ProductsCategory = (props) => {

  let ProductsCategory = <HomeLoadingSpinner />; 
  // let ProductsCategory = <p>loading</p>

  if (!props.loading && props.data) {
    ProductsCategory = props.data.map((data) => (
      <ProductLayout
        key={data.id}
        id={data.id}
        category={data.category}
        badgeIcon={data.badgeIcon} 
        beerIcon={data.beerIcon}
        description={data.description}
        items={data.items}
      />
    ));
  }
  // if (!props.loading && props.data.length === 0) {
  //   ProductsCategory = <h1> No Data Found</h1>;
  // }
  return <>{ProductsCategory}</>;
};

export default ProductsCategory;
