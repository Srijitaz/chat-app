import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustands/useConversation';
import { time } from '../../utils/time';
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} =useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = time(message.createdAt);
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profilePic = fromMe ? authUser.profilePic: selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-purple-500': "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt ='Tailwind css chat bubble component'
                src={profilePic}
                />
            </div>
        </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-3`}> {message.message}</div> 
      <div className='chat-footer opacity-45 text-xs flex gap-1 items-center'>{formattedTime}</div> 
    </div>
  )
}

export default Message;