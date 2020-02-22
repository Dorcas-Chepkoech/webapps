import React from 'react';
import './Checkout.css';
import ProductData from '../Products/Products.json';
import Navigation from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function Checkout() {
  
    return (
       <div>
          {ProductData.map((item, index) => {
            return(
            <div className="wrapper"> 
        
         <Navigation/>    
        <div className="product group">
          <div className="col-1-2 product-image">{item.image}
            <div className="bg" />
            
          </div>
          <br/>
         <br/>
          <div className="col-1-2 product-info">
            <h1>{item.name}</h1>
            <br/>
            <h2>Ksh. {item.price}</h2>
            <p>{item.description}</p>
            <a href className="share-link"><i class="fa fa-phone" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-comments-o" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>
         
        </div>
       <Footer/>
      </div>
       )
      }
      )}
      </div>
  
  );
}
