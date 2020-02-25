import React from 'react';
import {Link} from 'react-router-dom';

function HomePage () {
  return (
    <div className='jumbotron'>
      <h1>PluralSight Administration</h1>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        quibusdam pariatur nulla aspernatur dolorum ipsam. Minus facere, velit
        nesciunt, eos dolore, tempora pariatur vero nemo odio labore ratione
        debitis ab.
      </p>
      <Link to="about" className="btn btn-primary">About</Link>
    </div>
  )
}
export default HomePage
