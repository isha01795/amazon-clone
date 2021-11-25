import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Carousel_part({children}) {
    return (
       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71mAkIfn4uL._SX3000_.jpg"
            alt="First slide"
          />
   
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="	https://m.media-amazon.com/images/I/71f+i8EI0JL._SX3000_.jpg"
            alt="Second slide"
          />
      
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71zjz6cTIeL._SX3000_.jpg"
            alt="Third slide"
          />
      
        
        </Carousel.Item>
      </Carousel> 

    )
}

export default Carousel_part;
