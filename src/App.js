import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const [user, setUser] = useState(0);
  const {id, name, description, age, image} = data[user];

  const prevPerson = () => {
    setUser(( user => {
      user --;
      if(user < 0){
        return data.length-1;
      }
      return user
    }))
  }
  const nextPerson = () => {
    setUser((user => {
      user ++;
      if(user > data.length - 1){
      user = 0;
      }
      return user;
   
    }))
  }

  return (<div>
    <div className='container'>
      <img src={image} alt='person' width="300px"/>
    </div>
    <div className='container'>
      <h1>{id} - {name}</h1>
    </div>
    <div className='container'>
      <h2>{description}</h2>
    </div>
    <div className='container'>
      <h2>{age} years old</h2>
    </div>
    <div className='btn container'>
      <button onClick={prevPerson}>Prev</button>
      <button onClick={nextPerson}>Next</button>
    </div>
  </div>
  );
}

export default App;
