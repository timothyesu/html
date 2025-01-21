import React from 'react'
import errorMsg from "./Assets/Gify1.gif"
const NoPage = () => {
  return (
    <div className='container p-5 text center'>
        <img src= {errorMsg} className='w-50' alt=''></img>
    </div>
  )
}

export default NoPage