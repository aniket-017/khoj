import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';



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