import React from "react";
import "./cart.css";
import { useStateValue } from "../../State";
import Subtotal from "../subtotal/Subtotal";
import CartProduct from "../cartProduct/CartProduct";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart_left">
        <div className="cart_title">
          <h1>Your Shopping Basket</h1>
          <img src="./cart.png" alt="" className="cart_image" />
        </div>

        {basket.map((item) => (
          <CartProduct
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="cart_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
