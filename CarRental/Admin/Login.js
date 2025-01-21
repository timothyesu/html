import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginStatus } from '../../../App';


const Login = () => {
  const [details , setDetails] = useState ({});
  const navigate = useNavigate ();
  const [login , setLogin] = useContext (loginStatus)
     
     const changeData = (e) => {
      console.log (e.target.name, e.target.value);
      setDetails ({ ...details , [e.target.name]: e. target.value})
     }

     const submitHandler = (e) => {
      e.preventDefault();
      console.log(details);

       const {username, password} = details;      
       if (username === "admin" && password === "admin") {
        setLogin(true)
        navigate ("/dashboard")
       }
       else {
        alert("Invalid Credentials")
       }

     }

  return (
    <div className='container p-5'>
      <div className='col-lg-6 p-5 mx-auto'>
            <h3 className='text-center'> Admin Login</h3>
            <form onSubmit={submitHandler}>
              <input type='text' name='username' onChange={changeData} placeholder='Username' className='form-control mb-3'></input>
              <input type='password' name='password' onChange={changeData} placeholder='Password' className='form-control mb-3'></input>
              <input type='submit' className='form-control mb-3 btn btn-success'></input>
            </form>
      </div>    
    </div>
  )
}

export default Login