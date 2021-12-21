import React from "react";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../State";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router";

function Total() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Total ( {basket.length} items) :<strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Total;
