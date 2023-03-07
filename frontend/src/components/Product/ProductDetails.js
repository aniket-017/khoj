


import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails, newReview } from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import {useParams} from 'react-router-dom';
import { Rating } from "@material-ui/lab";
import Loader from "../Loader/Loader";
import { useAlert } from "react-alert";
import Aos from "aos";
import "aos/dist/aos.css"
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import ReviewCard from "./ReviewCard.js"
import { NEW_REVIEW_RESET } from "../../constants/productConstants";



import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import BungalowIcon from '@mui/icons-material/Bungalow';
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import RouterIcon from '@mui/icons-material/Router';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import { fontFamily, padding } from "@mui/system";


import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import {Room , Star, StarBorder}from '@material-ui/icons';
import axios from "axios";
import Product from "../Product";


const ProductDetails = ( { match } ) => {
    const dispatch = useDispatch();
    let {id} = useParams() 
    const alert = useAlert();


   

   
    // const alert = useAlert();
    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );
    


       //Map start
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    // const [lng, setLng] = useState(75.23);
    // const [lat, setLat] = useState(19.53);
  
    const [viewport, setViewport] = useState({
     
      latitude: 18.9881,
      longitude: 73.9635,
      zoom: 10,
    });

    
  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);

  };
    //Map end



      // const { newReview } = useSelector(state => state);
      // const { success, error: reviewError } = newReview;

      const { success, error: reviewError } = useSelector(
        (state) => state.newReview
      );
    

   

    const options = {
      size: "large",
      value: product.ratings,
      readOnly: true,
      precision: 0.5,
    };


    // const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");


    const submitReviewToggle = () => {
      open ? setOpen(false) : setOpen(true);
    };
  
    const reviewSubmitHandler = () => {
      const myForm = new FormData();
  
      myForm.set("rating", rating);
      myForm.set("comment", comment);
      myForm.set("productId", id);
  
      dispatch(newReview(myForm));
  
      setOpen(false);
    };



    // useEffect(()=>{
    //   if (error) {
    //     alert.error(error);
    //     dispatch(clearErrors());
    //   }
    //     dispatch(getProductDetails(id))
    // },[dispatch, id, error,alert]) 

    useEffect(()=>{
      Aos.init({duration:3000})
    },[]);

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    

        if (reviewError) {
          alert.error(reviewError);
          dispatch(clearErrors());
        }
    
        if (success) {
          alert.success("Review Submitted Successfully");
          dispatch({ type: NEW_REVIEW_RESET });
        }
        dispatch(getProductDetails(id));
      }, [dispatch, id, error, alert]);

      // , reviewError, success

  return (
    <Fragment>
      {loading? <Loader />:(<Fragment>
        <MetaData title={`${product.name} --AK`} />
        {/* <div className="ProductDetails"  data-aos="flip-right"> */}
        <div className="ProductDetails"  >
          <div className="img">
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
              <h1 >{product.name}</h1>
              <p>AK # {product._id}</p>
            </div>

            <div className="detailsBlock-2" >
               <Rating {...options} /> 
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div> 

            <div className="detailsBlock-3"  >
              <h1>{`₹${product.price}`}</h1>
            </div>

            {/* <div className="detailsBlock_forall" > */}
            <div  >

            <h1 style={ {padding:0, font: "400 3.8vmax Acme", marginTop:"50px"  } } >What this place offers</h1>
            <div className="detailsBlock-4" ><BungalowIcon className="Icon"/>&nbsp; No. Of Vacant Rooms : <span>{product.NoOfRoomsVacant}</span> 
            </div>

            <div className="detailsBlock-4" >
            <ReduceCapacityIcon className="Icon"/>&nbsp; Hostel Capacity : <span>{product.Capacitiy}</span> 
            </div>
            {/* <div className="detailsBlock-4">
              No. Of Students per room: <p>{product.NoOFStudents}</p>
            </div> */}
            <div className="detailsBlock-4" >
            <GroupsIcon className="Icon" />&nbsp;  No. Of Persons per room: <span>{product.NoOFStudents}</span>
            </div>

            <div className="detailsBlock-4" >
            <SolarPowerIcon className="Icon"/>&nbsp; SolarHeater : <span>{product.SolarHeater}</span> 
            </div>

            <div className="detailsBlock-4" >
            <ElectricBoltIcon />&nbsp; Light Facility : <span>{product.LightFacility}</span>
            </div>

            <div className="detailsBlock-4" >
            <RouterIcon />&nbsp; Wifi Facility : <span>{product.WifiFacility}</span>
            </div>

            <div className="detailsBlock-4" >
            <RestaurantIcon />&nbsp;  Mess Facility : <span>{product.MessFacility}</span>
            </div>

            <div className="detailsBlock-4" >
            <AccessTimeIcon />&nbsp;  In Out Time : <span>{product.InOutTime}</span>
            </div>

            <div className="detailsBlock-4" >
            <CallIcon/>&nbsp; Contact Number : <span>{product.ContactNo}</span>
            </div>

            <div className="detailsBlock-4" >
            <LocationOnIcon />&nbsp; Address : <span>{product.Address}</span>
            </div>


<div>
<Map
      mapboxAccessToken="pk.eyJ1IjoiYW5pa2V0MTciLCJhIjoiY2xlZ3FwOW02MGJ0NTN4bWNhMXBqY25lcCJ9.qjfXDd_p2yjXQz3wa2w2UQ"
      style={{
          width: "100%",
          height: "70vh",
          borderRadius: "15px",
          border: "2px solid red",
         
        }}
        
      initialViewState={{...viewport
          // longitude: lng,
          // latitude: lat,
          // zoom: 14
      }}
      onViewportChange={(nextviewport) => setViewport(nextviewport)}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        
        
        >
       
           <Marker
              latitude={product.lat}
              longitude={product.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            ><Room style={{fontSize:viewport.zoom*7, color:"slateblue"}}
            onClick={() => handleMarkerClick(product._id)}
            />
              
              
              </Marker>
              {product._id === currentPlaceId && (
                <Popup
          
                latitude={product.lat}
                longitude={product.long}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
              ><Product  product={product} style={{height:50} } /></Popup> )}
              <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
        </Map>
</div>
            <button onClick={submitReviewToggle} className="submitReview">Submit Review</button>



            <h3 className="reviewsHeading">REVIEWS</h3>

<Dialog
  aria-labelledby="simple-dialog-title"
  open={open}
  onClose={submitReviewToggle}
>
  <DialogTitle>Submit Review</DialogTitle>

  <DialogContent className="submitDialog">
    <Rating
      onChange={(e) => setRating(e.target.value)}
      value={rating}
      size="large"
    />

    <textarea
      className="submitDialogTextArea"
      cols="30"
      rows="5"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    ></textarea>
  </DialogContent>

  <DialogActions>
  {/* onClick={submitReviewToggle} */}
    <Button onClick={submitReviewToggle} color="secondary">
      Cancel
    </Button>
    {/* onClick={reviewSubmitHandler}  */}
    <Button onClick={reviewSubmitHandler} color="primary">
      Submit
    </Button>
  </DialogActions>

</Dialog>


            {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
            </div>
             
            
             
        </div>
       
    </Fragment>)}




    </Fragment>
  )
}

export default ProductDetails






















































