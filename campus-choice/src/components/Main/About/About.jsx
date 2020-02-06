import React from 'react';
import './about.css';
import Footer from '../../Footer/Footer.jsx'
import Navigation from '../../Navbar/Navbar';
import Search from '../../Search/Search';

function About() {
    return (
      <div>
        
        <section className="blog-me pt-100 pb-100" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mx-auto text-center">
              <div className="section-title mb-100">
                <p>Price.Service.Selection</p>
                <h4>Featured Products</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <img src="https://i.pinimg.com/564x/9a/59/6d/9a596dd880532e91bb40ffa0fa895e21.jpg" alt="" style={{height:"275px"}} />
                  <div className="post-category">
                    <a href="#">Clothes</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h4><a href="#">The look you need. The style you crave. <i className="fa fa-heart" style={{color:"red"}}></i> </a></h4>
                    <div className="meta">
                      <ul>
                        <li>04 June 2018</li>
                      </ul>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.</p>
                  <a href="#" className="box_btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <img src="https://i.pinimg.com/564x/02/19/9f/02199f3ecc6c0e537b4358e0791c1dda.jpg" alt="" style={{height:"275px"}}/>
                  <div className="post-category">
                    <a href="#">Phones & Accesories</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h4><a href="#">The Phone You've always wanted! <i class="fa fa-mobile" style={{color:"blue", height:"20px"}}></i></a></h4>
                    <div className="meta">
                      <ul>
                        <li>23 June 2018</li>
                      </ul>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.</p>
                  <a href="#" className="box_btn">Buy</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <img src="https://i.pinimg.com/564x/1a/90/7d/1a907d7f8028e30eb0567a3b294c137b.jpg" alt=""  style={{height:"275px"}}/>
                  <div className="post-category">
                    <a href="#">Laptops & Accesories</a>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h4><a href="#">It Does More. It Costs Less. It’s that Simple. <i class="fa fa-laptop"></i></a></h4>
                    <div className="meta">
                      <ul>
                        <li>31 July 2018</li>
                      </ul>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.</p>
                  <a href="#" className="box_btn">Buy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
    )
}
export default About;
