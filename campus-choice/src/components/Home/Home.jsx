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
        <div className="banner-content">
        </div><Footer/>
      </div>
      
    )
}
export default Home;