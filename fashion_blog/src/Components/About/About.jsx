import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';


export default function About() {
    return (
        <div>
         
            <section className="services pt-60 pb-60" id="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60">
                
                <h4>About HerStle</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="single_service service_right">
                <a href='/health'>
                <img src="https://image.flaticon.com/icons/svg/684/684262.svg" alt="" style={{color: 'orange' }}/>
                <h4 style ={{color: 'red'}} >Health</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></a>
              </div>
              <div className="single_service service_right">
                <img src="https://www.flaticon.com/premium-icon/icons/svg/2455/2455767.svg" alt="" />
                <h4 style ={{color: 'red'}}>Relationships</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service service_right">
                <img src="https://image.flaticon.com/icons/svg/584/584093.svg" alt="" />
                <h4 style ={{color: 'red'}}>Money & Savings</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <div className="single_mid">
                <img src="https://i.pinimg.com/564x/62/da/e3/62dae3bedb1488b02441a022a5a45759.jpg" style={{height:300}} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/2114/2114368.svg" alt="" />
                <h4 style ={{color: 'red'}}>Nutrition and Food</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/753/753045.svg" alt="" />
                <h4 style ={{color: 'red'}}>Fitness</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="single_service">
                <img src="https://image.flaticon.com/icons/svg/2017/2017763.svg" alt="" />
                <h4 style ={{color: 'red'}}>Our Gender</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        </div>
    )
}
