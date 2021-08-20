import React, {useState} from 'react';
import Subcategory from './Subcategory';
// import { useStateValue } from './State';
import Api from './Api.json';

import { Link } from 'react-router-dom';

function Category() {
   const [categoryData, setCategoryData] = useState();
//    console.log(categoryData);
   const filterItem = (category) =>{
         const updatedList = Api.filter((api) => {
             return api.category === category;
         });
         setCategoryData(updatedList);
   }
   return(
       <>
     <div className="categoryOption">
     <select name="" id="">
       <option value=""> select </option>
       <option value="">   
       {/* <Link    to={{ */}
                    {/* pathname: "/subcategory", */}
                    {/* aboutprops: { categoryData:{categoryData} }, */}
                  {/* }}> */}
                   {/* <button className="categoryButton" onClick={() => filterItem("men's clothing")} ></button> */}
                  men's clothing
                   {/* </Link> */}
                   </option>
 <option value="">     <Link  to={{
                    pathname: "/category",
                    aboutprops: {  categoryData:{categoryData} },
                  }}>  <button className="categoryButton" onClick={() => filterItem("jewelery")} >jewelery</button>
                  </Link>  </option>
       <Link  to={{
                    pathname: "/category",
                    aboutprops: { categoryData:{categoryData} },
                  }}> <option value=""><button className="categoryButton" 
        onClick={() => filterItem("electronics")} >electronics</button></option> </Link> 
   <Link  to={{
                    pathname: "/category",
                    aboutprops: {  categoryData:{categoryData} },
                  }}>   <option value=""><button className="categoryButton"
        onClick={() => filterItem("women's clothing")} >women's clothing</button></option></Link> 
        </select> 
     </div>
        {/* <Subcategory  categoryData={categoryData} /> */}
       </>
   )
}

export default Category;
