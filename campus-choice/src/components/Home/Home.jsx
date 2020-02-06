import React from 'react';
import './home.css';
import Footer from '../Footer/Footer';
import HomeNav from '../HomeNav/HomeNav';
import Search from '../Search/Search';


function Home() {
    return (
        <div>
          <HomeNav/>
          
          {/* <div className="image-wrap">
          <div className="img-content">
            <img src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="overlay" />
        </div> */}
        <div className="banner-content">
            
          <h2>Your shop of Choice!!</h2><br/>
          <Search/><br/>
          <div className="banner-btn">
            <a href className="ban-btn btn-green">Sign-Up Today!</a>
            
          </div>
        </div><Footer/>
      </div>
      
    )
}
export default Home;