import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

export default function Footer () {
  return (
    <div className='footer-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 '>
            <div className='copyright-text'>
              <p>CopyRight © 2020</p><p>Campus Bazaar</p>
            </div>
          </div>{' '}
          {/* End Col */}
          <div className='col-sm-6'>
            <ul className='social-link pull-right'>
              <li>
                <a href>
                  <span>
                    {' '}
                    <i
                      className='fa fa-google-plus'
                      aria-hidden='true'
                      style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <i 
                    class='fa fa-facebook' 
                    aria-hidden='true'
                    style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <i 
                    class='fa fa-pinterest-p' 
                    aria-hidden='true'
                    style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <i 
                    class='fa fa-twitter' 
                    aria-hidden='true'
                    style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <i 
                    class='fa fa-whatsapp' 
                    aria-hidden='true'
                    style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href>
                  <span>
                    <i 
                    class='fa fa-tumblr' 
                    aria-hidden='true'
                    style={{ color: 'white' }}
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>{' '}
        
        </div>
      </div>
    </div>
  )
}
