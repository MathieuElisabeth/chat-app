import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import './Input.css'

const Input = ({setMessage, sendMessage, message }) => {
  return (
    <form className="form">
      <input
      className="input"
      type="text"
      placeholder="Taper un message..."
      value={message} 
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton" onClick={event => sendMessage(event)}>Envoyer <FontAwesomeIcon icon={faPaperPlane}/></button>
    </form>
  )
}

export default Input;
