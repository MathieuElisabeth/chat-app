import React from 'react'

import ReactEmoji from 'react-emoji'

import './Message.css'


const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const emojiStyle = {
    style: {
      'vertical-align': 'middle'
    }
  }

  return (
    isSentByCurrentUser ? (
      <div className="messageContainer justifyEnd">
        <p className="sendText pr-10">Vous</p>
        <div className="messageBox backgroundPurple">
          <p className="messageText colorWhite">{ReactEmoji.emojify(text, {attributes: emojiStyle})}</p>
        </div>
      </div>
    ) :
    (
     <div className="messageContainer justifyStart">
       <div className="messageBox">
         <p className="messsageText colorDark">{ReactEmoji.emojify(text, {attributes: emojiStyle})}</p>
       </div>
       <p className="sendText pl-10">{user}</p>
     </div> 
    )
  )

}

export default Message
