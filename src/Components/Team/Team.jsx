import React from 'react'
import './Team.css'
import Card from '../../Components/Card/Card'
// import  img1 from '../../assets/Bhvyc.jpeg'
// import  temp from '../../assets/blue.jpg'
// import img2 from '../../assets/himakshi.jpg'
// import img3 from '../../assets/hitiksha.jpg'
// import img4 from '../../assets/karan.jpeg'
// import img5 from '../../assets/lakshit.jpeg'
// import img6 from '../../assets/niharikaB.jpeg'
// import img7 from '../../assets/nishant.jpeg'
// import img8 from '../../assets/saloni.jpeg'

function Team() {
  return (
    <div className='Team'>
      <h2 id='teams'>Our Team</h2>
    <div className='cards'>
      <Card
      // imgs={temp}
      // img={img1}
      // heading={"Bhavya Chawda"}
      // detail={"GDSC Lead"}
      />
    </div>
    <div className='core-team'>
    <h2 id='core'>Core Team</h2>
    </div>
    </div>
  )
}

export default Team