import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import "./NavStyle.css"

const Navbar = () => {
    const [username, setUsername] = useState('Guest');
    const [isLogedIn,setIsLoged] =useState(false);
    const [userRole,setUserRole] = useState(null);

    useEffect(
        ()=>{
            const sessionData = localStorage.getItem("session");
        if(sessionData)
        {
            const parsedData = JSON.parse(sessionData);
            setIsLoged(parsedData.isLogedIn);
            setUserRole(parsedData.userrole);
            setUsername(parsedData.username)
        }
        
  
        },[]);
        
                const HandleLogout= ()=>{
                    localStorage.removeItem("session");
                    setIsLoged(false);
                    setUserRole(null);
                    setUsername("Guest")
                   }
    useEffect(
        ()=>{
           console.log("localStorage updated")
        
  
        },[HandleLogout]);
     

  return (<>
  <nav className='nav'>
    
  <header class="header-area section-padding-1 transparent-bar">
    <div class="header-large-device">
        <div class="header-bottom sticky-bar">
            <div class="container-fluid">
                <div class="header-bottom-flex">
                    <div class="logo-menu-wrap">
                        <div class="logo">
                            <Link to="/">
                                <img  src="assets/images/logo/logo-6.png" alt="logo" />
                            </Link>
                        </div>
                        <div class="main-menu menu-lh-1 main-menu-padding-1 menu-mrg-1">
                            <nav>
                                <ul>
                                    <li><Link to="/">Home</Link>
                                  
                                    </li>
                                    <li><Link to="/Shop">Shop</Link>
                                       
                                    </li>
                                  
                                    
                                    <li><Link to="/About">About Us</Link></li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="header-action-wrap header-action-flex header-action-width header-action-mrg-1">
                        <div class="search-style-1">
                            <form>
                                <div class="form-search-1">
                                    <input class="input-text" value="" placeholder="Type to search (Ex: Phone, Laptop)" type="search"/>
                                    <button>
                                        <i class="icofont-search-1"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        {isLogedIn?
                        <div className="same-style">
                                      <div className="dropdown">
                                          <Link className="dropbtn">
                                              <i className="icofont-user-alt-3"></i>

                                          </Link>
                                          <div className="dropdown-content container text-center p-3">
                                              {/* <i className='icofont-user'></i> */}
                                              <h5>{username}</h5>
                                              <button onClick={HandleLogout} className='btn btn-danger'>Log Out</button>
                                          </div>
                                      </div>
                  </div>  :
                  <div className="same-style">
                  <Link to='/Login'><button className='btn btn-dark'>login/Signup</button></Link>
              </div>
                  }
                        <div class="same-style header-cart">
                            <a class="cart-active" href="#"><i class="icofont-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-small-device header-small-ptb sticky-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-6">
                    <div class="mobile-logo mobile-logo-width">
                        <a href="index.html">
                            <img alt="" src="assets/images/logo/logo-9.png"/>
                        </a>
                    </div>
                </div>
                <div class="col-6">
                    <div class="header-action-wrap header-action-flex header-action-mrg-1">
                        <div class="same-style header-cart">
                            <a class="cart-active" href="#"><i class="icofont-shopping-cart"></i></a>
                        </div>
                        <div class="same-style header-info">
                            <button class="mobile-menu-button-active">
                                <span class="info-width-1"></span>
                                <span class="info-width-2"></span>
                                <span class="info-width-3"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  </nav>
  
  </>
  )
}

export default Navbar