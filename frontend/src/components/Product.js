import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import './Card.css'
import Carousel from "react-material-ui-carousel";
import { ALL_PRODUCT_SUCCESS } from '../constants/productConstants';



const product = ({product}) => {
  
  const options={
    edit:false,
    colour: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf:true,

}

  return (
    <Link className='card' to={`/product/${product._id}`}>
    <img src={product.images[0].url} alt={`/product/${product.name}`}/>
    {/* <Carousel >
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel> */}
    <div className="card_info">
    <h2>{product.name}</h2>
    <div>
        <ReactStars {...options} /><span>({product.numOfReviews}Reviews)</span>
    </div>

<h3>{`₹${product.price}`}</h3>   
</div>
    </Link>
  )
}  

export default product