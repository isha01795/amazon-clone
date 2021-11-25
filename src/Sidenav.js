import React, {useState}from 'react';
import './sidenav.css';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'; 

function Sidenav(props ) {

 
    
        return (
        <>
          <div id="sidenav_container" className= {props.clas}  >
         <Link to="./login" onClick={props.close}  style={{textDecoration:'none'}}> <div className="sidenav_signin">
            <AccountCircleIcon style={{fontSize:'2.5rem', marginRight:"5px"}}/>
              Hello, Sign in
            </div>

            </Link>
            <nav className="sidenav">
            
            <div className="close_icon">
            <CloseIcon style={{fontSize:'2.5rem'}} onClick={props.close}/>
          </div>
          <div className="sidenav_options">
          <h5>Trending</h5>
          <ul>
                <li>Best Sellers</li>
                <li>Movers</li>
                <li>New Releases</li>
              </ul>
          </div>
          <div className="sidenav_options"> <h5>Trending</h5>
          <ul>
                <li>Best Sellers</li>
                <li>Movers</li>
                <li>New Releases</li>
              </ul>
          </div>
          <div className="sidenav_options">
          <h5>Trending</h5>
          <ul>
                <li>Best Sellers</li>
                <li>Movers</li>
                <li>New Releases</li>
              </ul>
          </div>
            
            </nav>
          </div>
        </>
      );
    
}

export default Sidenav;
