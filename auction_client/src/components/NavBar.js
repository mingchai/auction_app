import React from "react";
import {NavLink} from "react-router-dom"

const NavBar = props =>{
  return(
    <nav>
      <NavLink exact to="/">Home</NavLink>
      •
      <NavLink exact to="/auctions">Active Auctions</NavLink>
      •
      <NavLink exact to="/sign_in">Sign In</NavLink>
    </nav>
  )
}

export default NavBar;