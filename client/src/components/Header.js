import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header" >

<NavLink to="/" >
        <h2>Logo</h2>
        </NavLink>
        <input type="text" placeholder="Search"  />

    

      <NavLink to="/create" >
      <h4>Creat Product</h4>\
      </NavLink>

      <NavLink to="/cart" >
      <h2>Cart</h2>
      </NavLink>
        

    </div>
  )
};

export default Header;