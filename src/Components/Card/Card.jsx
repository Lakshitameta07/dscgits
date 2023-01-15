import React from 'react'
import './Card.css'
const Card = ({img,heading,detail},color) => {
  return (
    <div className='card' style={{bordeColor:{color}}}>
        <img src={img} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        </div>
  )
}
export default Card