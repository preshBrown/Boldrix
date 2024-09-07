import React, { useEffect } from "react";
import HomeImage from "./components/HomeImage/HomeImage";
import ProductCollections from "./components/ProductsCategory/ProductCollections";
import { useDispatch, useSelector } from "react-redux";

import {
  initBestPicks,
  initRecommended,
  initHotDeals,
  initnewArrivals,
} from "../../store/product/productActions";
import {
  bestPickItems,
  recommendedItems,
  hotDealsItems,
  newArrivalsItems,
} from "./HomeData";
import Category from "../../components/Category/Category";
import DemoImage from "../../components/DemoImage/DemoImage";
import Components from "./components/HomeImage/ImagesComponents/Components";
import HomeLoadingSpinner from "../../components/Interfaces/HomeLoadingSpinner/HomeLoadingSpinner"



const Home = (props) => {
  const dispatch = useDispatch();
  const bestPicksProducts = useSelector(
    (state) => state.product.bestPicksProducts
  );
  const bestPicksLoading = useSelector(
    (state) => state.product.bestPicksLoading
  );
  const bestPicksError = useSelector((state) => state.product.bestPicksError);

  const recommendedProducts = useSelector(
    (state) => state.product.recommendedProducts
  );
  const recommendedLoading = useSelector(
    (state) => state.product.recommendedLoading
  );
  const recommendedError = useSelector(
    (state) => state.product.recommendedError
  );

  const hotDealsProducts = useSelector(
    (state) => state.product.hotDealsProducts
  );
  const hotDealsLoading = useSelector((state) => state.product.hotDealsLoading);
  const hotDealsError = useSelector((state) => state.product.hotDealsError);

  const newArrivalsProducts = useSelector(
    (state) => state.product.newArrivalsProducts
  );
  const newArrivalsLoading = useSelector(
    (state) => state.product.newArrivalsLoading
  );
  const newArrivalsError = useSelector(
    (state) => state.product.newArrivalsError
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(initBestPicks());
    }, 10000);

    setTimeout(() => {
      dispatch(initRecommended());
    }, 7000);

    setTimeout(() => {
      dispatch(initHotDeals());
    }, 10000);

    setTimeout(() => {
      dispatch(initnewArrivals());
    }, 100);
  }, [dispatch]);

  let homeSpinner = <HomeLoadingSpinner />
  if (
    !bestPicksLoading ||
    !newArrivalsLoading ||
    !hotDealsLoading ||
    !recommendedLoading
  ) {
    homeSpinner = null}


  return (
    <>
      {homeSpinner}
      <HomeImage images={Components} />

      <ProductCollections
        bestPicks={bestPickItems}
        recommended={recommendedItems}
        hotDeals={hotDealsItems}
        newArrivals={newArrivalsItems}
        bestPicksLoader={bestPicksLoading}
        recommendedLoader={recommendedLoading}
        hotDealsLoader={hotDealsLoading}
        newArrivalsLoader={newArrivalsLoading}
      />

      <Category />
    </>
  );
};

export default Home;
