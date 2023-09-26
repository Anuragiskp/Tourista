import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';

function Navbar() {

    return (
      <div className="Navbar">
        {/* <nav className = "navbar">
            <div className = "container flex">
                <a href = "index.html" className = "site-brand">
                    Tour<span>ista</span>
                </a>

                <button type = "button" id = "navbar-show-btn" className = "flex">
                    <i className = "fas fa-bars"></i>
                </button>
                <div id = "navbar-collapse">
                    <button type = "button" id = "navbar-close-btn" className = "flex">
                        <i className = "fas fa-times"></i>
                    </button>
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <Link to="/" className = "nav-link">Home</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to="/health" className = "nav-link">Health</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to ="/news" className = "nav-link">News</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to ="/about" className = "nav-link">About</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/contact" className = "nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}

        <div className="navbar-container">
            <Box className="logo-container">
                <h1 id="tourista-logo">Tourista</h1>
            </Box>
           
            <Box className='navbar-links'>
                <Link to="/" className = "navbar-link">Home</Link>
                <Link to="/health" className = "navbar-link">Health</Link>
                <Link to ="/news" className = "navbar-link">News</Link>
                <Link to ="/about" className = "navbar-link">About</Link>
                <Link to = "/contact" className = "navbar-link">Contact</Link>
            </Box>
        </div>
        <Outlet />
    </div>
    
    );
  }
  
  export default Navbar;