import React from 'react'
import './subcategory.css';
import { useStateValue } from './State';
import Api from './Api.json';

function Subcategory({props}) {
//  const [{basket}, dispatch] = useStateValue();
//     const addToBasket = () => {
// dispatch({
//     type: 'ADD_TO_BASKET',
//     item: {
//         id : id,
//         title: title,
//         description:description,
//         price: price,
//         image: image,
     
//         rating: rating,
// },
// });
//  }
 const data = props.location.aboutprops.categoryData;
    return (
    <>
        {data.map((Api ) => { 
            return (
                <>
        <div className="product">
        <div className="product_info">
        <div><h3>{Api.title}</h3></div>
            <div className="product_description">{Api.description}</div>
            <div className="product_price">
                <small>$</small>
                <strong>{Api.price}</strong>
            </div>
            <div className="product_rating">
              
                {Api.rating}
            </div>
        </div>
       <div className="product_image"> <img src={Api.image} alt="" /></div>
        {/* <button onClick={addToBasket}>Add to cart</button> */}
   </div>
</>
 )
 })}

 </>


    )
}

export default Subcategory;
