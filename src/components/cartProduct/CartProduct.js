import React from "react";
import "./cartProduct.css";
import { useStateValue } from "../../State";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CartProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

    toast.success(`${title} removed from cart successfully!`, {
      position: "top-right"})
  };

  return (
    <>
      <div className="cart_product">
        <img src={image} alt="" className="cart_product_image" />

        <div className="cart_product_info">
          <p className="cart_product_title">{title}</p>
          <p className="cart_product_price">
            <small>$</small>
            <strong> {price}</strong>
          </p>
          <div className="cart_product_rating">{rating}</div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
     <ToastContainer />

    </>
  );
}

export default CartProduct;
