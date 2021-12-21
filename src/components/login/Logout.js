import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../State";
import "./login.css";

function Logout() {
  const [{ user }, dispatch] = useStateValue();
  const setUser = () => {
    dispatch({
      type: "ADD_USER",
      user: "Sign in",
    });
  };

  return (
    <div className="logout_button">
      <Link to="/amazon-clone">
        {" "}
        <button type="submit" onClick={setUser}>
          Logout
        </button>{" "}
      </Link>
    </div>
  );
}

export default Logout;
