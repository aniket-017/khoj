import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const Card = ({product}) =>{
//   return(<Link className='card' to={product._id}>
//         {/* <img src={product.img[0].url} alt={product.name}/> */}
//         <div className="card_info">
//             <h2> { product.name} </h2>
//             <h4> { product.name } </h4>
//             <h3> { product.name } </h3>
//         </div>
//   </Link>
//   );
// };

function Card(props) {
  const navigate = useNavigate();
 
  return (
    <div className='card' onClick={()=> navigate('/search')}>
        <img src={ props.src } alt="don" />
        <div className="card_info">
            <h2> { props.title } </h2>
            <h4> { props.description } </h4>
            <h3> { props.price } </h3>
        </div>
    </div>
  )
}

export default Card




