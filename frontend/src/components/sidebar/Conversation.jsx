import React from 'react';
import useConversation from '../../zustands/useConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setselectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-purple-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-purple-500" : ""}`}
        onClick={() => setselectedConversation(conversation)}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user-avatar' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-300'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Conversation;