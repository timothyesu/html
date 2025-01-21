import React, { useEffect, useState } from 'react'
import CarsBanner from "./Assets/Cars.jpg"
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Cars= ()=> {
  const [data , setData] = useState([])
  useEffect (()=>{
    axios.get(`http://localhost:4000/cars`)
    .then ((res)=>setData(res.data))
    .catch ((err)=>console.log(err))
  })
  return (
       <div className='container p-5'>
        <h1 className='text-center mb-5'> {data.length}  + Cars </h1>
        <div className='row'>
          {
            data.map((cars,index)=>{
               return (
                <div key={index} className='col-md-4 mb-3'>
                  <div className='card'>
                    <div className='card-body'>
                    <h5 className='card-title'>{cars.name}</h5>
                    {/* <p className='card-text'>{cars.description}</p>
                    <p className='card-text'>Model:{cars.model}</p>
                    <p className='card-text'>{cars.category}</p> */}
                    <p className='card-text'> Price per day:{cars.pricePerDay}</p>
                    <NavLink to={`/carDetails/${cars.id}`}>
                    <button className='btn btn-primary'>Know More</button>
                    </NavLink>
                    </div>
                  </div>
                </div>
               )
            })
          }
        </div>
       </div>
  )
}

export default Cars