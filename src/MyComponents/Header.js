import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import DarkMode from './DarkMode';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TodoList" >{props.title}</Link>
       
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div> */}
        
        <DarkMode />
        
      </div> 
     
    </nav>
  )
}
Header.defaultProps = {
  title: "TITLE HERE",
}

Header.propTypes = {
  title: PropTypes.string,
}
