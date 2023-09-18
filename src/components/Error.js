import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Error = () => {
  const Navigate=useNavigate()
  return (
    <div>
        <h1 className='error'>
           😄 404 pase not found
         </h1>
        {/* <Link to={"/app"}><button >Go Back</button></Link> */}
        <button onClick={()=>Navigate(-1)} >Go Back</button>
     </div>
  )
}

export default Error