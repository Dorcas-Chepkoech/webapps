import React, { useState } from 'react'
import './login.css'
import Contact from '../Contact/ContactUs'

function Login (props) {
  const [login, setLogin] = useState({})

  const handleChange = evt => {
    evt.preventDefault()

    setLogin({
      ...login,
      [evt.target.name]: evt.target.value
    })
  }

  console.log(login);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login)

    props.history.push('/')

  }
  return (
    <div className='login-wrapper'>
      <div className='form-wrapper'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
        </form>
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </div>
  )
}

export default Login
