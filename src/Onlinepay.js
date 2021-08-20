import React from 'react';
import './onlinepay.css';

function Onlinepay() {
    return (
        
             <div className="onlinepay">
             <div className="onlinePayment">
                <p className="payment_input"> Card number: <input type="number" name="" id="" required/></p>
                <span className="payment_input">Expiry Date:<select name="" id="">
                        <option value="">---month--</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                    </select></span>
                <span><select name="" id="">
                        <option value="">--year--</option>
                        <option value="">2021</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                        <option value="">2025</option>
                    </select></span>
                <p className="payment_input"> CVV: <input type="password" name="" id="" required/></p>
                <p className="payment_input">Password: <input type="password" name="" id="" required/></p>
                <p className="payment_input">OTP: <input type="number" name="" id="" required/></p>

    <button className="payment_button"> Pay Now </button>
    </div>
        </div>
    )
}

export default Onlinepay
