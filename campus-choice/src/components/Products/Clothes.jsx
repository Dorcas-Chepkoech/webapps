import React, {useState} from 'react';
import './products.css';
import ProductData from './Products.json';
import Navigation from '../Navbar/Navbar';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';




function Clothes() {




    return (
     <div>
       <Navigation/>
       <Search/>
       <div className="container">
          <h3 className="h3">shopping Demo-6 </h3>
          <hr/>
          <div className="row">
            <hr/>
          {ProductData.map((productDetail, index) => {
            return(
             
              <div className="col-md-3 col-sm-6">
                <div className="product-grid6">
                  <div className="product-image6">
                  <h2 className="title"><a href="#">{productDetail.name}</a></h2>
                    <a href="#">
                      <img className="pic-1" src={productDetail.imgUrl} />
                    </a>
                  </div>
                  <div className="product-content">
            <h3 className="title"><a href="#">{productDetail.description}</a></h3>
                    <div className="price">Ksh. {productDetail.price}
                     
                    </div>
                  </div>
                  <ul className="social">
                    <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
                    <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
                    <li><a href data-tip="Add to Cart" href="checkout"><i className="fa fa-shopping-cart" /></a></li>
                  </ul>
                </div>
              </div>
         
          

            )
          })}
      </div>
        </div>
        <Footer/>
        
     </div>
    )
}

export default Clothes;