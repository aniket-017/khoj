import React, { Fragment, useEffect, useState, useRef  } from "react";
import "./FilterPage.css"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../actions/productAction";
import Slider from "@material-ui/core/Slider";
import {useParams} from 'react-router-dom';
import PaymentsIcon from '@mui/icons-material/Payments';
import { height } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const categories = [
    "Rented Rooms",
    "Boys Hostel",
    "Girls Hostel",
    "1_BHK",
    "2_BHK",
    "3_BHK",
  ];


const FilterPage = () => {

  const navigate = useNavigate();
  
    let {keyword} = useParams()
    const dispatch = useDispatch();
    const [price, setPrice] = useState([0, 25000]);
    const [category, setCategory] = useState([]);
    const [ratings, setRatings] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const applyButtonRef = useRef(null); 
    const [style, setStyle] = useState("FilterPage");
   
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

      const handleReset = () => {
        setCategory("");
        setPrice([0, 25000]);
        setRatings(0);
        if (applyButtonRef.current) {
          applyButtonRef.current.click();
        }
      };

      const changeStyle = () => {
        // console.log("you just clicked");
      
       
      };


      const handleApply = () => {
        setStyle("cont2");
        dispatch(getProduct(keyword,currentPage,price,category,ratings));
       
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        Aos.init();
        // dispatch(getProduct(keyword,currentPage,price,category,ratings));
      }, [dispatch, keyword,currentPage,price,category,ratings,alert,error]);
    
  return (
    
    <div className="FilterPage" className={style} >
  
    {/* <div className="filterBox_mobile" data-aos="flip-right" > */}
    <div className="filterBox_mobile" data-aos="fade-up" >
    {/* <div className="filterBox_mobile" data-aos="zoom-in" > */}
    <h2>Filters </h2> 
    
    <hr></hr>
    <div className="horizontal">
            <h4 style={{marginRight: "15px"}}>Price </h4>
            <PaymentsIcon size="lg"/>
            <Slider
            className="slider_mobile"
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on" //auto
              aria-labelledby="range-slider"
              min={500}
              max={5000}
            />
            </div>
<hr></hr>
            <h4>Categories <box-icon name='building-house' size="sm" ></box-icon></h4>
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
            {/* <fieldset> */}
            <div className="horizontal">
              <h4 style={{marginRight: "15px"}} >Ratings </h4>
              <box-icon classname="boxi" type='solid' name='star-half' size="lg" ></box-icon>
              {/* <box-icon type='solid' name='star-half'></box-icon> */}
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
              </div>
            {/* </fieldset> */}
            <hr></hr>
            <div className="filter-buttons">
              <button onClick={handleReset} className="filter-buttons1">Reset</button>
              <button onClick={handleApply }  ref={applyButtonRef} className="filter-buttons2">Apply</button>
              </div>
            </div>
            
          
       
    
    </div>
  )
}

export default FilterPage