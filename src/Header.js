import React, {useState} from 'react'
import './header.css';
import Searchbar from './Searchbar';
import Category from './Category';

import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useStateValue } from './State';

function Header() {
  const [{basket}, dispatch] = useStateValue();
  // const [search, setSearch]  = useState();

  // const showResult = (event) => {
  // console.log (search);
  // setSearch(event.target.value);

 

  // }

    

    return (
        <div className='header'>
         <Link to="/">
         <img src="https://cutt.ly/1m6pOYq" alt="" className="header_logo" />
         </Link>

            <div className="header_nav_option">
              <span className="header_nav_option_up">Hello</span>
             <div className="header_nav_sub_option">
             <LocationOnOutlinedIcon />
                  <span className="header_nav_option_down">
                
                  Select your address</span>
             </div>
              </div>  

<div>
  {/* <Category/> */}
</div>
            <div>

            <Searchbar />
            </div>

            <div className="header_nav">
            <Link to="/Login">
              <div className="header_nav_option">
                  <span className="header_nav_option_up">Hello,Sign in</span>
                <div className="header_nav_sub_option">
                <ArrowDropDownOutlinedIcon  />
                <span className="header_nav_option_down">Account and Lists</span>
                
                </div>
              </div></Link>
              <div className="header_nav_option">
              <span className="header_nav_option_up">Returns</span>
                  <span className="header_nav_option_down">& Orders</span>
              </div>
            
            <div className="header_nav_option">
          
            <Link to="/cart">
            <span className="header_nav_option_up header_nav_cart_count" > {basket?.length} </span>
                 <ShoppingCartOutlinedIcon 
              className="header_nav_cart_option"
               />
            </Link>
            </div>
            
            </div>
        </div>
  
    )
}

export default Header
