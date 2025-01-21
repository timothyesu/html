import React from 'react'
import AboutBanner from "./Assets/about.jpg"
const About = () => {
  return (
    <div className='container p-5'>
    <div className='row'>
    <div className='col-lg-6'>
       <h2> About us:"Welcome to Timothy Car Travels" "Your Road to Adventure Begins Here"</h2>
       <p>Content: Timothy Car Travels is a premier road trip service provider, dedicated to giving you the ultimate freedom on the road. Founded by travel enthusiasts who understand the joy of exploring new places, our mission is to provide unforgettable road trips with the best vehicles, tailored itineraries, and all the resources you need for a perfect adventure. Whether you're looking for a quick weekend getaway or a cross-country expedition, we’ve got the expertise to make your journey smooth and enjoyable.</p> 
    </div>
    <div className='col-lg-6 p-5 text-end'>
    <img src={AboutBanner} className='w-100 AboutBanner'></img>
    </div>
    </div>
    </div>
  )
}

export default About