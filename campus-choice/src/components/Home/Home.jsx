import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './home.css';
import Footer from '../Footer/Footer';
import HomeNav from '../HomeNav/HomeNav';
import Search from '../Search/Search';

function Home(props) {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
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
          
          <div className="banner-btn">
            <a href className="ban-btn btn-green" onClick={toggle}>{buttonLabel}Sign-Up Today!</a>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            
          </div>
        </div><Footer/>
      </div>
      
    )
}
export default Home;