import React from 'react'
import { NavLink } from 'react-router-dom'
const Header2 = () => {

  const navLinkStyle=({isActive})=>{
    return{
      fontWeight: isActive ? "bold":"normal",
      textDecoration: isActive ? "none" :"underline",
      color:isActive?"red":"white",
      fontSize: "30px"

    }
  }
  return (
      <div className='header2'>
       {/* <Link to={'/'} > <h1 style={{color:'white', cursor:'pointer' , textdecoration:'none'}}>Home</h1> </Link>
       <Link to={'/about'} > <h1 style={{color:'white', cursor:'pointer' , textDecoration:'None'}}>About</h1> </Link>
       <Link to={'/contact'} > <h1 style={{color:'white', cursor:'pointer' , textDecoration:'None'}}>Contact</h1> </Link> */}
       <NavLink style={navLinkStyle} to={'/app'}>Home</NavLink>
       <NavLink style={navLinkStyle} to={'/about'}>About</NavLink>
       <NavLink style={navLinkStyle} to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Header2