import React from 'react'
import mainBanner from "./Assets/img.jpg"
const Home = () => {
  return (
    <div className='container p-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1>"Timothy Car Travels: Your Trusted Partner for Premium Car Rental"</h1>
            <p> Explore the world with Timothy Car Travels-Where journeys become memorable experiences</p>
            <button className='btn btn-primary me-3'>Know More</button>
            <button className='btn btn-danger'>Book Now</button>
          </div>
          <div className='col-lg-6 p-5 text-end'>
               <img src={mainBanner} className='w-100 mainBanner'></img>
          </div>
        </div>
    </div>
  )
}

export default Home