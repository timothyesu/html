import React, { useContext, useState } from "react"
import Welcome from "./Welcome";
import ViewEnquiries from "./ViewEnquiries";
import { loginStatus } from "../../../App";
import Login from "./Login";


const Dashboard = () => {
    const [view , setView] = useState ("");
    const [login , setLogin] = useContext(loginStatus)
    
    const dashboardview = ()=> {
        if (view === ""){
            return <Welcome/>
        }
        else if(view === "viewEnquiries"){
            return <ViewEnquiries/>
        }
        else {
            return <h1>Invalid view</h1>
        }
    }
    
    if (login){
    return (
        <div className="container-fluid">
         <div className="row align-items-center">
             <aside className="col-lg-3">
               <h3 onClick={() => setView ("")}>Admin Dashboard</h3> 
               <button onClick={() => setView("addCar")}>Add Car</button>
               <button onClick={() => setView("viewCar")}>view Car</button>
               <button onClick={() => setView("addServices")}>Add Service</button>
               <button onClick={()=> setView("viewServices")}>View Services</button>
               <button onClick={() => setView("viewEnquiries")}>View Enquiries</button>
               <button onClick={() => setLogin(false)}>Logout</button>
             </aside>
             <div className="col-lg-9">
                {dashboardview()}
             </div>
         </div>
        </div>
    )
}
    else {
        return <Login />
    }  

      
}

export default Dashboard