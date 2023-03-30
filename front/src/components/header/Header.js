import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <nav className="navbar fixed-top ">
        <div className="container-fluid" style={{}}>
          <a className="navbar-brand" href="/" style={{color:'white', textAlign:'center',}}>Product Management System</a>
        </div>
      </nav>
    </div>
  )
}

export default Header
