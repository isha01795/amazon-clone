import React from 'react';
import Header from './Header';
import './app.css';
import Item from './Item';
import Payment from './Payment'
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Subheader from './Subheader';
import Footer from './Footer';
import Location from './Location';
import Signup from './Signup';

function App() {
    return (
        <div className="body">
        <Router>
        <div className="app">
        <Header/>
        <Subheader/>
      
    

        <Switch>
        <Route  exact  path="/login">
        <Login/>

        </Route>

        <Route  exact  path="/signup">
        <Signup/>

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


        <Route  exact path= "/item" component={Item}
         />



        <Route  exact path="/">
        <Footer/>
        </Route>


       </Switch>
        </div>
        </Router>
        </div>
    )
}

export default App
