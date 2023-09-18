import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
     
   <Link to={'insta'}><h3>contact via instagram</h3></Link>
   <Link to={'mail'}><h3>contact via mail </h3></Link>
   <Outlet/>
    </div>
  )
}

export default Contact

