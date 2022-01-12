import React from 'react';
import Header from './components/header/Header';
import './app.css';
import Item from './components/item/Item';
import Payment from './components/payment/Payment'
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Subheader from './components/subheader/Subheader';
import Footer from './components/footer/Footer';
import Location from './components/Location';
import Signup from './components/login/Signup';
import Logout from './components/login/Logout';

function App() {
    return (
        <div className="body">
        <Router>
        <div className="app">
        <Header/>
      
    

        <Switch>
        <Route  exact  path="/login">
        <Login/>

        </Route>

        <Route  exact  path="/signup">
        <Signup/>

        </Route>
      
        <Route exact  path="/logout">
        <Logout/>

        </Route>
        <Route exact  path="/location">
        <Location/>

        </Route>

 
        <Route  exact path="/cart">
        <Cart/>

        </Route>
        <Route exact  path="/payment">
        <Payment/>

        </Route>


        <Route  exact path= "/item" component={Item}/>
      

        <Route  exact path="/amazon-clone">

<Subheader/>


        </Route>


       </Switch>
       <Footer/>

        </div>
        </Router>
        </div>
    )
}

export default App
