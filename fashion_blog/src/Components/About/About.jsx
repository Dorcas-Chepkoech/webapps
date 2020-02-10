import React from 'react';
import './About.css';

export default function About() {
    return (
        <div>
            <section className="services pt-60 pb-60" id="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                <p>Best place for friends &amp; family</p>
                <h4>our services</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="single_service service_right">
                <img src="https://image.flaticon.com/icons/svg/684/684262.svg" alt="" />
                <h4>Online Reservations</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service service_right">
                <img src="https://www.flaticon.com/premium-icon/icons/svg/2455/2455767.svg" alt="" />
                <h4>Popular Dishes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service service_right">
                <img src="https://image.flaticon.com/icons/svg/584/584093.svg" alt="" />
                <h4>Online Order</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <div className="single_mid">
                <img src="https://i.pinimg.com/564x/7e/2f/24/7e2f24c92f2f6e49d744d4b2e6fcffc2.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/2114/2114368.svg" alt="" />
                <h4>24/7 Service</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/753/753045.svg" alt="" />
                <h4>Candle Light Dinner</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/2017/2017763.svg" alt="" />
                <h4>Special Local Foods</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
