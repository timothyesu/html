import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Cars from './Cars'
import Contact from './Contact'
import NoPage from './NoPage'
import Login from './Admin/Login'
import Dashboard from './Admin/Dashboard'
import carDetails from './CarDetails'

const Routing=() => {
  return (
    <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/services' Component={Services}></Route>
        <Route path='/cars' Component={Cars}></Route> 
        <Route path='/carDetails/:id' Component={carDetails}></Route>   
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/admin' Component={Login}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
        <Route path='*' Component={NoPage}></Route>
    </Routes>
  )
}

export default Routing