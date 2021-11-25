import React from 'react';
import './product.css';
import { useStateValue } from './State';
// import { Link } from "react-router-dom";


function Product({id,title,description,price,image,rating}) {
 const [{basket}, dispatch] = useStateValue();
// console.log("this is basket>>", basket );
    const addToBasket = () => {
dispatch({
    type: 'ADD_TO_BASKET',
    item: {
        id : id,
        title: title,
        description:description,
        price: price,
        image: image,
     
        rating: rating,
},
});
 }

    return (
    
        <div className="product">
  
        <div className="product_info">
        <div><h3>{title}</h3></div>
            <div className="product_description">{description}</div>
            <div className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
            <div className="product_rating">
                {/* <p> ⭐ </p>
                <p> ⭐ </p>
                <p> ⭐ </p> */}
                {rating}
            </div>
        </div>
       <div className="product_image"> <img src={image} alt="" /></div>
        <button onClick={addToBasket}>Add to cart</button>
   </div>
    )
}

export default Product;
