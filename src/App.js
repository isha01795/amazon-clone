import React from 'react';
import Header from './Header';
import './app.css';
import Item from './Item';
import Payment from './Payment'
import Home from './Home';
import Cart from './Cart';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Subcategory from './Subcategory';

function App() {
    return (
        <div className="body">
        <Router>
        <div className="app">
        
        <Header/>
        <Switch>
        <Route path="/login">
        <Login/>

        </Route>

        <Route path="/category">
        <Subcategory/>


        </Route>
        <Route path="/cart">
        <Cart/>

        </Route>
        <Route path="/payment">
        <Payment/>

        </Route>


        <Route  exact path= "/item" component={Item}
         />
      

        <Route path="/">
        <Home/>
        </Route>


       </Switch>
        </div>
        </Router>
        </div>
    )
}

export default App
