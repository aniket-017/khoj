import React, { Fragment, useEffect, useState, useRef } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../Loader/Loader";
//import ProductCard from "../Home/ProductCard";
//import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import Product from "../Product";
import { Grid } from "@material-ui/core/";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Aos from "aos";
import "aos/dist/aos.css";
import Mymap from "./Mymap.js";
import Button from "@mui/material/Button";

const categories = [
  "Rented Rooms",
  "Boys Hostel",
  "Girls Hostel",
  "1_BHK",
  "2_BHK",
  "3_BHK",
];

const Products = ({ match }) => {
  let { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([0, 25000]);
  const [ratings, setRatings] = useState(0);
  const applyButtonRef = useRef(null);
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage,));
  }, [dispatch,keyword, currentPage]);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const handleReset = () => {
    setCategory("");
    setPrice([0, 25000]);
    setRatings(0);
    if (applyButtonRef.current) {
      applyButtonRef.current.click();
    }
  };

  const handleApply = () => {
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  // const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="खोजो" />
          <h2 className="productsHeading">Accomodations On Rent</h2>
          <div className="aniket">
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="center"
              width="15px"
              alignItems="flex-start"
            >
              {/* <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} /> */}

              {products &&
                products.map((product) => <Product product={product} />)}
            </Grid>
          </div>
          <div className="filterBox">
            <div className="filterBox_mobile">
              <h4>Price</h4>
              <Slider
                className="slider_mobile"
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="on" //auto
                aria-labelledby="range-slider"
                min={500}
                max={5000}
              />
              <hr></hr>
              <h4>Categories</h4>
              <ul className="categoryBox">
                {categories.map((cat) => (
                  <li
                    className="category-link"
                    key={cat}
                    onClick={() => {
                      if (category.includes(cat)) {
                        setCategory(category.filter((c) => c !== cat));
                      } else {
                        setCategory([...category, cat]);
                      }
                    }}
                    style={{ fontFamily: "Phudu" }}
                  >
                    <input
                      type="checkbox"
                      checked={category.includes(cat)}
                      readOnly
                    />{" "}
                    {cat}
                  </li>
                ))}
              </ul>

              <hr></hr>
              <h4>Ratings </h4>
              <Slider
                className="slider_mobile"
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="on"
                min={0}
                max={5}
              />

              <div className="filter-buttons">
                <button onClick={handleReset} className="filter-buttons1">
                  Reset
                </button>
                <button
                  onClick={handleApply}
                  ref={applyButtonRef}
                  className="filter-buttons2"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          ...
          {/* <div>
            <Mymap></Mymap>
            </div> */}
          {/* {products && products.map((product) => <Mymap product={product} />)} */}
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
