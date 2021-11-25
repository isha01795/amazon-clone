import React , {useState, useEffect}from 'react';
import './subheader.css';
import MenuIcon from '@material-ui/icons/Menu';
import Sidenav from './Sidenav';
import Product from './Product';
import Home from './Home';
import Api from './Api.json';




function Subheader() {
    const [clas, setClas] = useState("hide");
 const [state, setState] = useState(false);
    const [categoryData, setCategoryData] = useState(Api);
   console.log(categoryData);
   const filterItem = (data) =>{
         const updatedList = Api.filter((api) => {
             return api.category === data;
         });
         setCategoryData(updatedList);
         setState(true);
   }


   const setData = () => {

       setCategoryData(Api);
   }


  //  for toogle side navbar
   const openSidenav =() => {

         setClas("show");
   }
   const closeSidenav =() =>{
    setClas("hide")
   }

    return (
        <>
        <div className="subheader_container">

        <span className="subheader_option">
        <MenuIcon className="menu_icon" onClick={openSidenav}/>
 
        </span>


  <Sidenav
    close = {closeSidenav}
    clas = {clas}
  />



    <span className="subheader_option" onClick={setData}>     
    
     All
      </span> 
        <span className="subheader_option"      onClick={() => filterItem("mobiles")}>Mobiles</span>

      
        <span className="subheader_option" 
        onClick={() => filterItem("jewelery")}
        >Jewelery</span>




        <span className="subheader_option"    
         onClick={() => filterItem("electronics")}
         >Electronics</span><span className="subheader_option"   onClick={() => filterItem("books")}>Books</span> <span className="subheader_option"
         onClick={() => filterItem("men's clothing")}
         >Men's Wear </span> <span className="subheader_option"      onClick={() => filterItem("toys")}>Toys and Games</span> 
         
         <span className="subheader_option"  
          onClick={() => filterItem("women's clothing")}
          >Women's Wear</span>
         
            
        </div>
        <Home/>
<div className="product_items">


      { categoryData? categoryData.map((elem,key) => {
            const{ id, title, description, price, image, rating} = elem;
            return(
                <>
                <Product id={id} title={title} description={description} price={price} image={image} rating={rating}/>
                </>
            )
        }
    ): null} 

    </div>
    


        </>
    )
}

export default Subheader;
