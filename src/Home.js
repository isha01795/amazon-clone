import React from 'react';
import Product from './Product'
import './home.css';
import Api from './Api.json';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img src="https://cutt.ly/em6f7Gb" alt="" className="home_image" />
            </div>

        <div className="home_row home_row-1">
        <Product  className="home_product"
                  id= {Api[2].id}

               title={Api[2].title}
             description={Api[2].description}
             price={Api[2].price}
             image={Api[2].image}
             rating={Api[2].rating}
        />
      
            <Product className="home_product"
              id= {Api[3].id}
               title={Api[3].title}
             description={Api[3].description}
             price={Api[3].price}
             image={Api[3].image}
             rating={Api[3].rating}
        />
          <Product
                  id= {Api[1].id}

                title={Api[1].title}
             description={Api[1].description}
             price={Api[1].price}
             image={Api[1].image}
             rating={Api[1].rating}
         />
            
       
        </div>
        <div className="home_row home_row-2">
        <Product className="home_product"
                  id= {Api[8].id}
               title={Api[8].title}
             description={Api[8].description}
             price={Api[8].price}
             image={Api[8].image}
             rating={Api[8].rating}
        />
     
          
                         <Product
                  id= {Api[9].id}

               title={Api[9].title}
             description={Api[9].description}
             price={Api[9].price}
             image={Api[9].image}
             rating={Api[9].rating}
        />
       
   
        </div>
        <div className="home_row home_row-3">
        <Product
                  id= {Api[6].id}

               title={Api[6].title}
             description={Api[6].description}
             price={Api[6].price}
             image={Api[6].image}
             rating={Api[6].rating}
        />
                      <Product
                  id= {Api[5].id}

               title={Api[5].title}
             description={Api[5].description}
             price={Api[5].price}
             image={Api[5].image}
             rating={Api[5].rating}
        />
        </div> 
        <div className="home_row home_row-4">
        <Product 
         id= {Api[0].id}
         title={Api[0].title}
             description={Api[0].description}
             price={Api[0].price}
             image={Api[0].image}
             rating={Api[0].rating}
         />
        <Product
                  id= {Api[4].id}

               title={Api[4].title}
             description={Api[4].description}
             price={Api[4].price}
             image={Api[4].image}
             rating={Api[4].rating}
        />
        </div>    

        </div>

    )
}

export default Home;
