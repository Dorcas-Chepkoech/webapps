import React from 'react'
import './App.css'

const App = () => <PersonList />

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'john',
      job: 'developer'
    },
    {
      img: 50,
      name: 'bobby',
      job: 'designer'
    },
    {
      img: 78,
      name: 'pete',
      job: 'dancer'
    },
    {
      img: 22,
      name: 'dee',
      job: 'millionare'
    }
  ]
  return (
    <section>
      <Person people={people[0]}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
        sunt veniam facilis in excepturi!</Person> 
      <Person people={people[1]}/>
      <Person people={people[2]} />
      <Person people={people[3]} />
    </section>
  )
}

const Person = props => {
  const { img, name, job } = props.people;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/med/men/${img}.jpg`
  return (
    <div className='person'>
      <img src={url} alt='' />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  )
}
export default App
