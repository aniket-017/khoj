


import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import {useParams} from 'react-router-dom';
import { Rating } from "@material-ui/lab";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
    

const ProductDetails = ( { match } ) => {
    const dispatch = useDispatch();
    let {id} = useParams() 
    const alert = useAlert();


   
    // const alert = useAlert();
    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );
    
    useEffect(()=>{
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
        dispatch(getProductDetails(id))
    },[dispatch, id, error,alert]) 



    const options = {
      size: "large",
      value: product.ratings,
      readOnly: true,
      precision: 0.5,
    };


    //   useEffect(() => {
    //     // if (error) {
    //     //   alert.error(error);
    //     //   dispatch(clearErrors());
    //     // }
    
    //     // if (reviewError) {
    //     //   alert.error(reviewError);
    //     //   dispatch(clearErrors());
    //     // }
    
    //     // if (success) {
    //     //   alert.success("Review Submitted Successfully");
    //     //   dispatch({ type: NEW_REVIEW_RESET });
    //     // }
    //     dispatch(getProductDetails(match.params.id));
    //   }, [dispatch, match.params.id]);
  return (
    <Fragment>
      {loading? <Loader />:(<Fragment>
        <MetaData title={`${product.name} -- GCOEARA`} />
        <div className="ProductDetails">
          <div>
             <Carousel>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel> 
            </div>

            
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>

            <div className="detailsBlock-2">
               <Rating {...options} /> 
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div> 

            <div className="detailsBlock-3">
              <h1>{`₹${product.price}`}</h1>
            </div>

            <div className="detailsBlock-4">
               Description : <p>{product.description}</p>
             </div>


             
        </div>
    </Fragment>)}
    </Fragment>
  )
}

export default ProductDetails






















































