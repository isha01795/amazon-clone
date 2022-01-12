import React, {useEffect} from "react";
import "./header.css";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { useStateValue } from "../../State";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
useEffect(() => {

 
}, [])

  const [{ user }] = useStateValue();

  return (
    <div className="header_container" id="nav_top">
      <div className="header_nav">
        <Link to="/amazon-clone">
          <img src="https://cutt.ly/1m6pOYq" alt="" className="header_logo" />
        </Link>
        <div className="header_nav_option">
          <span className="header_nav_option_up">Hello</span>
          <Link to="./location">
            {" "}
            <div className="header_nav_sub_option">
              <LocationOnOutlinedIcon className="header_nav_location_icon" />
              <span className="header_nav_option_down">
                Select your address
              </span>
            </div>
          </Link>
        </div>

        <div>{/* <Category/> */}</div>
        <div className="header_nav_option">
          <Searchbar />
        </div>
        {user === "Sign in" ? (
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <div className="header_nav_option">
              {/* {  user?  <span className="header_nav_option_up">
                Hello,{user} </span>  :  <span className="header_nav_option_up">
                Hello,Sign in</span>  } */}

              <span className="header_nav_option_up">Hello,Sign in </span>

              <div className="header_nav_sub_option">
                <ArrowDropDownOutlinedIcon className="header_nav_arrow_icon " />
                <span className="header_nav_option_down">
                  Account and Lists
                </span>
              </div>
            </div>
          </Link>
        ) : (
          <Link to="/Logout" style={{ textDecoration: "none" }}>
            <div className="header_nav_option">
              <span className="header_nav_option_up">Hello,{user} </span>

              <div className="header_nav_sub_option">
                <ArrowDropDownOutlinedIcon className="header_nav_arrow_icon " />
                <span className="header_nav_option_down">
                  Account and Lists
                </span>
              </div>
            </div>
          </Link>
        )}

        <div className="header_nav_option">
          <span className="header_nav_option_up">Returns</span>
          <span className="header_nav_option_down">& Orders</span>
        </div>
        <div className="header_nav_option">
          <Link to="/cart">
            <span className="header_nav_option_up header_nav_cart_count">
              {" "}
              {basket?.length}{" "}
            </span>
            <div>
              {" "}
              <ShoppingCartOutlinedIcon className="header_nav_cart_option" />{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
