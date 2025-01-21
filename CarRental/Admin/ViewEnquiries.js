
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEnquiries =() => {
    const [enquiries , setEnq] = useState([])

    const [name , setName] = useState("")
        const [mobile , setMobile] = useState("")
        const [email , setEmail] = useState("")
        const [id , setId] = useState ("")
    useEffect(()=>{
        axios.get(`http://localhost:4000/enquiries`)
        .then((res) =>setEnq(res.data))
        .catch((err) =>console.log(err))
    })     

    const deleteEnq = (enqId) => {
            axios.delete(`http://localhost:4000/enquiries/${enqId}`)
            .then(()=> alert("Enq Deleted"))
            .catch ((err) => console.log(err))
    }
     const getOneRecord = (enqId) => {
        axios.get (`http://localhost:4000/enquiries/${enqId}`)
        .then ((res) => {
            setName (res.data.name)
            setMobile (res.data.mobile)
            setEmail (res.data.email)
            setId (res.data.id)
        })
        .catch ((err) => console.log (err))
    }
    const updateEnq = (e) => {
        e.preventDefault ();
        axios.put (`http://localhost:4000/enquiries/${id}` , {id,name,mobile,email})
        .then ((res)=>alert("Enq Updated"))
        .catch((err) => console.log (err))
    }
  return (
    <div className='container p-5'>
        <h2>ViewEnquiries</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    enquiries.map((enq , index)=>{
                        return (
                            <tr key={index}>
                                 <td>{enq.name}</td>
                                 <td>{enq.mobile}</td>
                                 <td>{enq.email}</td>
                                 <td>
                                    <button onClick={()=> getOneRecord (enq.id)} data-bs-target = "#update" data-bs-toggle="modal" className='btn btn-primary me-3'>Edit</button>
                                    <button onClick={() =>deleteEnq(enq.id)} className='btn btn-danger'>Delete</button>
                                 </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className='modal' id='update'>
           <div className='modal-dialog'>
         <div className='modal-content'>
           <div className='modal-header'>
              <h5>Update Enquiries</h5>
           </div>
           <div className='modal-body'>
           <form onSubmit={updateEnq}>
        <input name='name' placeholder='Enter Name' value={name} className='form-control mb-3' onChange={(e) => setName(e.target.value)}></input>
        <input name='mobile' placeholder='Mobile Number' value={mobile} className='form-control mb-3' onChange={(e) => setMobile(e.target.value)}></input>
        <input name='email' placeholder='Email Address' value={email} className='form-control mb-3' onChange={(e) => setEmail(e.target.value)}></input>
        <input type='submit'  placeholder='Enter Name' className='form-control mb-3'></input>
       </form>
           </div>
           </div>
           </div>
           </div>
    </div>    
  )
}

export default ViewEnquiries     