import React from 'react'
import './Card.css'
const Card = ({imgs,img,heading,detail},color) => {
  return (
    <div className='card' style={{bordeColor:{color}}}>
      <img id='img1' src={imgs} alt=''/>
        <img id='img2' src={img} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        </div>
  )
}
export default Card