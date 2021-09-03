import React, {useState, useEffect} from 'react'
import './header.css';
import Searchbar from './Searchbar';
import Category from './Category';

import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useStateValue } from './State';
import {Map, GoogleApiWrapper} from 'google-maps-react';

function Header() {
  const [{basket}, dispatch] = useStateValue();
  const [position, setPosition] = useState({
    // loaded:false,
    // coordinates:{
      lat: "" , lng: ""
    // },
  });
  const onSuccess = location => {
    setPosition({
      // loaded: true,
      // coordinates:{
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      // },
    });
    // console.log(position.lat);
  };
  const onError = error => {
    setPosition({
      // loaded: true,
      error,
    });
  };
// const getLocation =() =>{}
  // useEffect(() => {
    
    const getLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
      alert("hsnjdh");
    }
 }
  // }, [])

 

 
    

    return (
        <div className='header'>
         <Link to="/">
         <img src="https://cutt.ly/1m6pOYq" alt="" className="header_logo" />
         </Link>
            <div className="header_nav">
            <div className="header_nav_option">
              <span className="header_nav_option_up">Hello</span>
             <div className="header_nav_sub_option" onClick={getLocation}>
             <LocationOnOutlinedIcon className="header_nav_location_icon" />
                  <span className="header_nav_option_down">
                
                  Select your address</span>
                  {/* {(position.lat) && (position.lng) ?
                   <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${position.lat}, ${position.lng}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${position.lat},${position.lng}&key=AIzaSyB7dLvGEFS4dawZxmAfsUEmsihCRtCxBjU`}  alt=""/> 
                   :null 
                   } */}
                   {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=30.3333376,76.8671744&zoom=14&size=400x300&sensor=false&key=AIzaSyB7dLvGEFS4dawZxmAfsUEmsihCRtCxBjU`}  alt=""/>  */}
                   {/* <Map google= {this.props.google}
                    zoom={14}  initialCenter={{lat: -1.2884, lng: 36.8233}}
                    /> */}
             </div>
              </div>  </div>

<div>
  {/* <Category/> */}
</div>
            <div className="header_nav_option"> 

            <Searchbar />
            </div>

            <div className="header_nav">
            <Link to="/Login">
              <div className="header_nav_option">
                  <span className="header_nav_option_up">Hello,Sign in</span>
                <div className="header_nav_sub_option">
                <ArrowDropDownOutlinedIcon className="header_nav_arrow_icon " />
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
           <div>     <ShoppingCartOutlinedIcon 
              className="header_nav_cart_option"
               /> </div> 

            </Link>
            </div>
            </div>
        </div>
  
    )
}

export default Header
