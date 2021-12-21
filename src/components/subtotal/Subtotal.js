import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../State";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const redirect = (e) => {
    if(basket?.length >= 1)
    { history.push("/payment")}
    else
    { alert("Select an item first.")}
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
    </div>
  );
}

export default Subtotal;
