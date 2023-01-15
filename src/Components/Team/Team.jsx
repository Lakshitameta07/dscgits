import React from 'react'
import './Team.css'
import Card from '../../Components/Card/Card'
import  img1 from '../../assets/Bhvyc.jpeg'
function Team() {
  return (
    <div className='Team'>
      <h2>Our Team</h2>
    <div className='cards'>
      <Card
      img={img1}
      heading={"Bhavya Chawda"}
      detail={"GDSC Lead"}
      />
      {/* <Card
      heading={"Lakshit Ameta"}
      detail={"Android Lead"}
      /> */}
      {/* <Card
      heading={"Parth Malvi"}
      detail={"CP Lead"} 
       /> */}
    </div>
    </div>
  )
}

export default Team