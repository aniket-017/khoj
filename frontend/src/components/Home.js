import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
// import H1 from './Image/H1.png'
// import H2 from './Image/H2.jpg'
// import H3 from './Image/H3.jpg'
import { useNavigate } from "react-router-dom";
import information from "./Information";
import { Grid } from "@material-ui/core/";
import MetaData from "./layout/MetaData";
import { clearErrors, getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product.js"
import Loader from "./Loader/Loader.js"
import { useAlert } from "react-alert";

function createcard(information) {
  return (
    // console.log(information.price)
    <Card
      src={information.src}
      title={information.title}
      description={information.description}
      price={information.price}
    />
  );
}

const product = {
  name: "Blue tshirt",
  images: [{ url: "https://media.istockphoto.com/photos/blank-black-tshirt-on-young-man-template-on-white-background-picture-id1302815072?b=1&k=20&m=1302815072&s=170667a&w=0&h=9shLx5L3KE4GarvoLZECC9crFIoc4MjonU7cWpH1V8w="}],
  price: "$3000",
  _id: "aniket"

};





function Home() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products, productsCount } = useSelector(store=> store.products)

  // console.log(products);
  useEffect(() => {
    if (error) {
      alert.error(error);
     dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
 
  

  return (
    <Fragment>
      {loading ? <Loader/> :<Fragment>
      <MetaData title="🏠 ℋeaven ℋomes" />
     
      <div className="home">
        <Banner />
       
        {/* <div className="home_section">
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            width="10px"
            alignItems="flex-start"
          >
            
             {information.map((elem) => (
              <Grid item xs={12} sm={6} md={4} key={information.indexOf(elem)}>
                <Card
                  src={elem.src}
                  title={elem.title}
                  description={elem.description}
                  price={elem.price}
                />
              </Grid> 
            ))} 
          </Grid>
        </div> */}


        <div className="home_section">
          <Grid
            container
            spacing={2}
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

        {products && products.map((product) => <Product product={product}/>)}

        </Grid>
        </div>

























































         {/* <div className="home_section">{information.map(createcard)}</div> */}

        {/*<div className="home_section">
          <Card
            src={information[0].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[0].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[0].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[0].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
        </div>
        <div className="home_section">
          <Card
            src={information[1].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[1].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[1].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[1].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
        </div>
        <div className="home_section">
          <Card
            src={information[2].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[2].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[2].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
          <Card
            src={information[2].src}
            title={information[0].title}
            description={information[0].description}
            price={information[0].price}
          />
        </div> */}
      
      </div>
    </Fragment>}
    </Fragment>
  );
}

export default Home;

