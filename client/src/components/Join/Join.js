import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState(false);

  const handlerInput = e => {
    if(!name.trim() || !room.trim()) {
      e.preventDefault(); 
      setError(true);
    } 
  }


  return (
    <div className='joinOuterContainer'>
      <h1>La Conv'</h1>
      <div className='joinInnerContainer'>
        <h2 className="heading">Rejoindre une salle</h2>
        {error && <p>Pseudo et salle requis</p>}
        <div><input placeholder="Pseudo" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} /></div>
        <div><input placeholder="Salle" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} /></div>
        <Link onClick={handlerInput} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Entrer</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
