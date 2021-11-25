import React from 'react';
import './payment.css';
import Total from './Total';
import { useStateValue } from './State';
// import Subtotal from './Subtotal';
import {Link} from 'react-router-dom';
import CartProduct from './CartProduct';



function Payment() {
    const [{basket}, dispatch] = useStateValue();


    return (

        <div className="payment">
        <h1>Checkout ( <Link to="/cart"> {basket?.length} items</Link> ) </h1>

        <div className="payment_container">
            <div className="payment_section">
            <div className="payment_title">
                <h2>Delievery Address</h2>
                </div>
                <div className="payment_address">
                    <p>
                    isha783@gmail.com
                    {/* {user?.email} */}
                    </p>
                    <p>123 lajpat nagar</p>
                    <p>Alwar, Rajasthan.</p>
                </div>
            </div>
            <div className= "payment_section">
            <div className="payment_title">
                <h2>Review Items and Delievery</h2>
                </div>
                <div className="payment_items">
                {basket.map(item => (
        <CartProduct id="payment_product" 
          id ={ item.id}
        title={ item.title} 
        description={ item.description}
        price= { item.price}
        image={ item.image}
     
        rating={ item.rating} 
/> 

    ))}
                </div>
            </div>
            <div className= "payment_section">
            <Total/>
            </div>
            <div className="payment_section">
            <div className="payment_title">
                <h2>Payment Method</h2>
                
             <div className="payment_method_buttons">
                <button className="payment_method_button">Pay on delievery </button>
                <a href=" https://rzp.io/l/H00VZ9vRc">          <button className="payment_method_button">Pay Online</button></a>

         </div>  
         </div>
            </div>
        </div>
        
</div>
        
    )
}

export default Payment;
