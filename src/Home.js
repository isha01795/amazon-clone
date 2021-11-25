import React from 'react';
import Product from './Product'
import './home.css';
import Api from './Api.json';
import Carousel_part  from './Carousel_part';

function Home() {
    return (
        <div className="home">
        <div  className="home_image"> 
            <Carousel_part/>
            </div>
       
      

        {/* <div className="home_row home_row-1">
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
        </div>     */}

        {/* <div className="home_row home_row-1">
        <Product  className="home_product"
                  id= {Api[12].id}

               title={Api[12].title}
             description={Api[12].description}
             price={Api[12].price}
             image={Api[12].image}
             rating={Api[12].rating}
        />
      
            <Product className="home_product"
              id= {Api[7].id}
               title={Api[7].title}
             description={Api[7].description}
             price={Api[7].price}
             image={Api[7].image}
             rating={Api[7].rating}
        />
          <Product
                  id= {Api[11].id}

                title={Api[11].title}
             description={Api[11].description}
             price={Api[11].price}
             image={Api[11].image}
             rating={Api[11].rating}
         />
            
       
        </div>
        <div className="home_row home_row-2">
        <Product className="home_product"
                  id= {Api[18].id}
               title={Api[18].title}
             description={Api[18].description}
             price={Api[18].price}
             image={Api[18].image}
             rating={Api[18].rating}
        />
     
          
                         <Product
                  id= {Api[19].id}

               title={Api[19].title}
             description={Api[19].description}
             price={Api[19].price}
             image={Api[19].image}
             rating={Api[19].rating}
        />
       
   
        </div>
        <div className="home_row home_row-3">
        <Product
                  id= {Api[16].id}

               title={Api[16].title}
             description={Api[16].description}
             price={Api[16].price}
             image={Api[16].image}
             rating={Api[16].rating}
        />
                      <Product
                  id= {Api[15].id}

               title={Api[15].title}
             description={Api[15].description}
             price={Api[15].price}
             image={Api[15].image}
             rating={Api[15].rating}
        />
        </div> 
        <div className="home_row home_row-4">
        <Product 
         id= {Api[10].id}
         title={Api[10].title}
             description={Api[10].description}
             price={Api[10].price}
             image={Api[10].image}
             rating={Api[10].rating}
         />
        <Product
                  id= {Api[14].id}

               title={Api[14].title}
             description={Api[14].description}
             price={Api[14].price}
             image={Api[14].image}
             rating={Api[14].rating}
        />
        </div>  
        <div className="home_row home_row-4">
        <Product 
         id= {Api[17].id}
         title={Api[17].title}
             description={Api[17].description}
             price={Api[17].price}
             image={Api[17].image}
             rating={Api[17].rating}
         />
        <Product
                  id= {Api[13].id}

               title={Api[13].title}
             description={Api[13].description}
             price={Api[13].price}
             image={Api[13].image}
             rating={Api[13].rating}
        />
        </div>     */}

        </div>

    )
}

export default Home;
