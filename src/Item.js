import React from 'react';
import './item.css';
import { useStateValue } from './State';
import { Link } from 'react-router-dom';

const Item = (props) =>
   {
      const product_details = props.location.aboutprops.product.value;
    //   console.log(props.location.aboutprops.product.value.title);

    const [{basket}, dispatch] = useStateValue();
        const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id : product_details.id,
            title: product_details.title,
            description:product_details.description,
            price: product_details.price,
            image: product_details.image,
         
            rating: product_details.rating,
    },
    });
     }
               
    return (
        <div className="item_container">

     

         <div className="item_info">
        <div className="item_head"> <div className="item_rating">
           
           {product_details.rating}
       </div> <h3>{product_details.title}</h3></div>
            <div className="item_description">{product_details.description}</div>
    
           
        </div>
       <div className="item_image"> <img src={product_details.image} alt="" /></div> 

       <div className="item_price">
      <strong> Price:</strong> &nbsp;
                $
                <strong>{product_details.price}</strong>
            </div>
        
            <button onClick={addToBasket} >Add to cart</button>
   
           <Link to="./cart"><div> <button onClick={addToBasket} id="buy_button" >Buy Now</button> </div> </Link>
           
        </div>
    )
 
  }
export default Item;
