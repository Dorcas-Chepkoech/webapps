import React, { useState } from 'react'
import './contact.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Contact () {
  const [input, setInput] = useState({})

  const handleChange = event => {
    event.preventDefault()
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }
  console.log(input)
  return (
    <div>
      <Navbar/>
      <section className='contact pt-100 pb-100' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 mx-auto text-center'>
              <div className='section-title mb-100'>
                <h4>Contact Us</h4>
              </div>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-md-8'>
              <form action='#' className='contact-form'>
                <div className='row'>
                  <div className='col-xl-6'>
                    <input type='text' placeholder='name' name='name' onChange={handleChange} />
                  </div>
                  <div className='col-xl-6'>
                    <input type='email' placeholder='email' name='email' onChange={handleChange} />
                  </div>
                  {/* <div className='col-xl-6'>
                    <input type='text' placeholder='subject' name='' />
                  </div>
                  <div className='col-xl-6'>
                    <input type='phone' placeholder='telephone' />
                  </div> */}
                  <div className='col-xl-12'>
                    <textarea
                      placeholder='message'
                      cols={30}
                      rows={10}
                      defaultValue={''}
                      name='message'
                      onChange={handleChange}
                    />
                    <input type='submit' defaultValue='send message' />
                  </div>
                </div>
              </form>
            </div>
            <div className='col-md-4'>
              <div className='single-contact'>
                <i className='fa fa-map-marker' />
                <h5>Address</h5>
                <p>Litein, KCO 490-20210, KENYA</p>
              </div>
              <div className='single-contact'>
                <i className='fa fa-phone' />
                <h5>Phone</h5>
                <p>(+254) 743114536</p>
              </div>
              <div className='single-contact'>
                <i className='fa fa-envelope' />
                <h5>Email</h5>
                <p>cbazaar254@outlook.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
