import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-area">
  <div className="container">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" to="#">
        <img src={logo} alt="" height={'50px'} /></a>
    </div>
 
    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
   
      <ul className="nav navbar-nav navbar-right new-navbar">
        <li><Link to="/">Home </Link></li>
        <li><Link to="/about">About Us </Link></li>
        <li><Link to="/services">Services </Link></li>
        <li><Link to="/contactus">Contact Us </Link></li>
       </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
