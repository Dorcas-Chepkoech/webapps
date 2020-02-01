import React, { useState } from 'react';
import './login.css';

function Login () {
  const [data, setData] = useState({})

  const handleChange = event => {
    event.preventDefault()
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  console.log(data);
  return (
    <div className='login-wrapper'>
      <div className='form-wrapper'>
        <h1>Login</h1>
        <form>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className=''
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
          

          <a href=''>
            <button>Log In</button>
           
          </a>
        </form>
      </div>
    </div>
  )
}

export default Login
