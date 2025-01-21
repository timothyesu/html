import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SendEnquiry from "./SendEnquiry"
import axios from "axios";


   const CarDetails = () => {
     const {id} = useParams();
     const [car , setCar] = useState({})
     useEffect (() =>{
        axios.get(`http://localhost:4000/cars/${id}`)
        .then ((res) => setCar(res.data))
        
     })  
    return (
        <div className="container p-5">
            <div className="row">
              <div className="col-lg-8">
                <h2>{car.name}</h2>
                <p>{car.desription}</p>
              </div>
              <div className="col-lg-4"></div>
              <SendEnquiry/>
            </div>
        </div>
    )
}

export default CarDetails