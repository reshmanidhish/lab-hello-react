import React from 'react'
import logo from "./../images/ironhack-logo-xs.png";
import iconmenu from "./../images/menu-top-xs.png";
import "./Header.css";

function Header(){
  return (
    <div>
       <div className="header">
          <div className="iconImage">
              <img src={logo} alt="" />
              <img src={iconmenu} alt="" />
          </div>
          <h1> Say hello to reactJS </h1>
          <h3>{"You will learn how to use the front end library and become a ninja"}</h3>
          <button> awesome</button>
      </div> 
    </div>
 )
}

export default Header;