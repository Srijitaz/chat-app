import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMsg from '../../hooks/useGetMsg'
import MessageSkeleton from '../skeleton/MessageSkeleton';
const Messages = () => {
  const{messages, loading}=useGetMsg();
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({ behavior : "smooth"})
    } ,100)
  }, [messages])
  console.log("messages: ",messages)
  return (
    <div className='px-4 flex-1 overflow-auto '>

      {!loading && 
      messages.length > 0 &&
       messages.map((message) =>(
        <div key ={message._id}
          ref={lastMsgRef}
        >
          <Message  message ={message}/>
        </div>
       )
        
      )}
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key ={idx}/>)}

        {!loading && messages.length === 0 && (
          <p className='text-center'>Start chatting</p>
        )}
    </div>
  )
}

export default Messages;
// import React from 'react'
// import Message from './Message'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto '>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

// export default Messages;
