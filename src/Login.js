import React , {useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom';
import {useStateValue} from './State';


function Login() {
    const [{user}, dispatch] = useStateValue();
    const [email, setEmail] = useState("");
// console.log(user);

   const showEmail =(e) =>{
   setEmail(e.target.value);
   }

    const setUser = () => {
        const username = email;
   console.log(username);
dispatch({
      type: 'ADD_USER',
      userName: 
          username,
      
})
// console.log(userName);


    }



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
                <input type="email" className="login_input" value={email} onChange={showEmail} readOnly  />

                <h4>Password</h4>
                <input type="password" className="login_input"  readOnly />
                <button className="sign_in_button" onClick={setUser} >Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
           <Link to="/signup"> <button className="create_account_button">Create your Amazon account</button> </Link>
        </div>
            
        </div>
    )
}

export default Login;
