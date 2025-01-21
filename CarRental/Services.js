import React from 'react'
import ServicesBanner from "./Assets/Services.jpg"
const Services = () => {
  const data =[
    {
      name: "Local City Ride",
      description: "Affordable and quick rides within the city. Ideal for commuting, errands, or leisure trips."
    },
    {
      name: "Airport Transfer",
      description: "Convenient pick-up and drop-off services for both domestic and international airports."
    },
    {
      name: "Outstation Trip - Weekend Getaway",
      description: "Plan your weekend trips with ease, whether it's a visit to the hills or nearby tourist spots."
    },
    {
      name: "City Tour",
      description: "Explore the major landmarks and hidden gems of your city with our guided city tours."
    },
    {
      name: "Outstation Trip - Long-Distance",
      description: "Comfortable and safe rides for long-distance travel, whether it's for business or vacation."
    },
    {
      name: "Corporate Ride",
      description: "Specialized transportation for corporate events, conferences, and client meetings."
    },
    {
      name: "Custom Trip Planning",
      description: "Customize your outstation trip based on your preferences, including route, stops, and vehicle options."
    }
  ];
  return (
      <div className='Container p-5'>
         <h1>Services</h1>
         <div className='row'>
            {
              data.map((services, index)=>{
                return (
                  <div key={index} className='col-md-4 mb-3'>
                    <div className='card p-3 h-100'>
                      <h5>{services.name}</h5>
                      <p>{services.description}</p>
                    </div>
                  </div>
                )
              })
            }
         </div>
      </div>
  )
}

export default Services