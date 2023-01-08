import React, { useState, useEffect } from 'react';
import  { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css'

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
let socket;


const Chat = ({location}) => {
  const history = useHistory()
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'chat-app-api-44c8.up.railway.app';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
        setTimeout(() => {history.push('/')}, 1000)
      }
    });
  }, [ENDPOINT, location.search, history]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    })
  }, [])

  const sendMessage = e => {
    e.preventDefault()
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat;
