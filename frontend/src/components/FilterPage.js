import React, { Fragment, useEffect, useState } from "react";
import "./FilterPage.css"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../actions/productAction";
import Slider from "@material-ui/core/Slider";
import {useParams} from 'react-router-dom';
import PaymentsIcon from '@mui/icons-material/Payments';

const categories = [
    "Rented Rooms",
    "Boys Hostel",
    "Girls Hostel",
    "1_BHK",
    "2_BHK",
    "3_BHK",
  ];


const FilterPage = () => {
    let {keyword} = useParams()
    const dispatch = useDispatch();
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    const {
        products,
        loading,
        error,
        productsCount,
        resultPerPage,
        filteredProductsCount,
      } = useSelector((state) => state.products);

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProduct(keyword,currentPage,price,category,ratings));
      }, [dispatch, keyword,currentPage,price,category,ratings,alert,error]);
    
  return (
    
    <div className="FilterPage">
    
    <div className="filterBox_mobile">
    <h2>Filters </h2> 
    
    <hr></hr>
            <h4>Price <PaymentsIcon /></h4>
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
            <h4>Categories <box-icon name='building-house' ></box-icon></h4>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                  style={{fontFamily:"Phudu"}}
                >
                  {category}
                </li>
              ))}
            </ul>

                <hr></hr>
            {/* <fieldset> */}
              <h4 >Ratings <box-icon type='solid' name='star-half'></box-icon></h4>
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
            {/* </fieldset> */}
            <hr></hr>
            </div>
            
    
       
    
    </div>
  )
}

export default FilterPage