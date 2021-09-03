import React from 'react'
import './login.css'
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">
        <Link to ="/"> 
        <img src="https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg" alt="" className="header_logo" />
        </Link>

        <div className="login_container">
          <div className="sign_in_title">
          <h1>Sign-in</h1>
          </div>
            <form>
                <h4>E-mail</h4>
                <input type="text" className="login_input" />

                <h4>Password</h4>
                <input type="password" className="login_input" />
                <button className="sign_in_button">Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button className="create_account_button">Create your Amazon account</button>
        </div>
            
        </div>
    )
}

export default Login;