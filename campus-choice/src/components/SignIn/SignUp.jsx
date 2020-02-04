import React, { useState } from 'react'
import './sign.css'
import Contact from '../Contact/ContactUs'

function SignIn (props) {
  const [userDeets, setUserDeets] = useState({})

  const handleChange = evt => {
    evt.preventDefault()

    setUserDeets({
      ...userDeets,
      [evt.target.name]: evt.target.value
    })
  }

  console.log(userDeets);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userDeets)

    props.history.push('/login')

  }
  return (
    <div className='login-wrapper'>
      <div className='form-wrapper'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className='firstname'>
            <label htmlFor='name'>Full name</label>
            <input
              type='text'
              placeholder='Enter Full Name'
              name='name'
              onChange={handleChange}
            />
          </div>
        
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email Account'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='password'>
            <label htmlFor='phone'>Password</label>
            <input
              type='password'
              className=''
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
          </div>
          {/* <div className='password'>
            <label htmlFor='phone'>Password</label>
            <input
              type='password'
              className=''
              placeholder='Password'
              name='password'
              onChange={handleChange}
            />
          </div> */}
        </form>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignIn;
