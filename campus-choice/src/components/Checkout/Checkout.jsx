import React from 'react';
import './Checkout.css';
import Navigation from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function Checkout() {
    return (
       <div>
            <div className="wrapper"> 
        
         <Navigation/>    
        <div className="product group">
          <div className="col-1-2 product-image">
            <div className="bg" />
            
          </div>
          <br/>
         <br/>
          <div className="col-1-2 product-info">
            <h1>Field Notes Cherry Graph 3-Pack</h1>
            <br/>
            <h2>$7.50</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt qui dolorum architecto veniam aut, animi laborum unde assumenda, quas illo nesciunt, autem eius? Dignissimos iusto eos eveniet perspiciatis in dolorem!</p>
            <a href className="share-link"><i class="fa fa-phone" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-comments-o" aria-hidden="true"></i></a>
            <a href className="share-link"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </div>
        </div>
       <Footer/>
      </div>
       </div>
    )
}
