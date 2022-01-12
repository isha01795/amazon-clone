import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../State";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const redirect = (e) => {
    if(basket?.length >= 1)
    { history.push("/payment")}
    else
    { 
    toast.error(`Select an item first`, {
      position: "top-center"})}
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items) :<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" id="" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={ redirect}>Proceed to Buy</button>
      <ToastContainer />
    </div>
  );
}

export default Subtotal;
