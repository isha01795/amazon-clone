import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../State";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(false);
  const [type, setType] = useState("password");
  // console.log(user);

  const showName = (e) => {
    setName(e.target.value);
  };
  const showEmail = (e) => {
    setEmail(e.target.value);
  };

  const iconChange = () => {
    {
      state ? setState(false) : setState(true);
    }
    {
      state ? setType("password") : setType("text");
    }
  };

  const setUser = () => {
    const username = email;
    console.log(username);
    dispatch({
      type: "ADD_USER",
      userName: username,
    });
    // console.log(userName);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg"
          alt=""
          className="header_logo"
        />
      </Link>

      <div className="login_container">
        <div className="sign_in_title">
          <h1>Sign-up</h1>
        </div>
        <form>
          <h4>Name</h4>

          <input
            type="text"
            value={name}
            className="login_input"
            onChange={showName}
            required
          />
          <h4>E-mail</h4>

          <input
            type="email"
            className="login_input"
            value={email}
            onChange={showEmail}
            required
          />
          <h4>Password</h4>
          <input type="password" className="login_input password" required />

          <div className="c_password_block">
            <h4>Confirm Password</h4>
            <input type={type} className="login_input cpassword" required />
            {state ? (
              <VisibilityIcon
                className="visibility_icon"
                onClick={iconChange}
              />
            ) : (
              <VisibilityOffIcon
                className="visibility_icon"
                onClick={iconChange}
              />
            )}
          </div>
          <button className="sign_in_button" onClick={setUser}>
            Sign Up
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
