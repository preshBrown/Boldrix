import React, { useEffect, useRef, useState } from "react";

import classes from "./Products.module.css";
import Button from "../../../components/Interfaces/Button/Button";
import { CiFilter } from "react-icons/ci";
import Sort from "../Sort/Sort";
import Layout from "../../../components/Layout/Layout";
import LayoutControl from "../LayoutControl/LayoutControl";
import StoreLayout from "../StoreLayout/StoreLayout";
import FilterLayout from "../FilterLayout/FilterLayout";
import Modal from "../../../components/Interfaces/Modal/Modal";
import FilterModal from "../FilterLayout/FilterModal/FilterModal";
import { useLocation } from "react-router-dom";
import {
  bestPickItems,
  hotDealsItems,
  newArrivalsItems,
  recommendedItems,
} from "../../Home/HomeData";
import { initProductStore } from "../../../store/productStore/productStoreActions";
import { useDispatch, useSelector } from "react-redux";
// useLocation

const Products = () => {
  const [layoutControl, setLayoutControl] = useState("One");
  const [mobileFilter, setMobileFilter] = useState(false);
  const [filter, setFilter] = useState(false);

  const dispatch = useDispatch();
  const storeProducts = useSelector((state) => state.pStore.productStore);
  const loading = useSelector((state) => state.pStore.loading);
  const error = useSelector((state) => state.pStore.error);

  useEffect(() => {
    const allProducts = [
      ...bestPickItems,
      ...recommendedItems,
      ...hotDealsItems,
      ...newArrivalsItems,
    ];

    dispatch(initProductStore(allProducts));
  }, []);

  const controls = (position) => {
    setLayoutControl(position);
  };
  const filterHandler = () => {
    setFilter(!filter);
  };
  const filterHandlerMobile = () => {
    setMobileFilter(!mobileFilter);
  };

  const sortInputHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className={classes.MobileFilter}>
        <FilterModal
          header="Filters"
          footer={
            <div className={classes.footerButton}>
              <Button clicked={filterHandlerMobile} W-100>
                Ok
              </Button>
            </div>
          }
          show={mobileFilter}
          close={filterHandlerMobile}
        >
          <div className={classes.FilterModalContents}>
            <FilterLayout />
          </div>
        </FilterModal>
      </div>

      <article className={classes.Products}>
        <div className={classes.Products_Wrapper}>
          <header className={classes.Products_Header}>
            <Button
              clicked={filterHandlerMobile}
              className={classes.Filter_Btn}
            >
              <span>
                <CiFilter />
              </span>
              Filters
            </Button>
            <Button clicked={filterHandler} className={classes.Filter_Btn}>
              <span>
                <CiFilter />
              </span>
              Filters
            </Button>
            <Sort setSort={sortInputHandler} />
            <LayoutControl controls={controls} />
          </header>

          <div className={classes.ProductsBody}>
            {filter && <FilterLayout className={classes.FilterLayoutBody} />}
            <StoreLayout
              loading={loading}
              productStore={storeProducts}
              switched={layoutControl !== "One"}
              LayoutModes={layoutControl}
              filter={filter}
            />
          </div>
          <footer className={classes.Footer_Header}>
            <Button className={classes.pageBtn}>1</Button>
            <Button className={classes.pageBtn}>2</Button>
          </footer>
        </div>
      </article>
    </>
  );
};

export default Products;
