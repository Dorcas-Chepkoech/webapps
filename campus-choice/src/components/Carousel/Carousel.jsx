import React from 'react';
import './carousel.css';

export default function CarouselOne() {
  return (
    <div className="page-header clear-filter" filter-color="orange">
        <div className="page-header-image" style={{backgroundImage: 'url("https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
        <div className="content">
          <div className="container">
            <div className="col-md-4 ml-auto mr-auto">
              <div className="card card-login card-plain">
                <form className="form" method action>
                  <div className="card-header text-center">
                    <div className="logo-container">
                      <img src="https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/now-logo.png" alt="" />
                    </div>
                  </div>
                  
                 </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
