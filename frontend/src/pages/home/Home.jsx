import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageControl from '../../components/messages/MessageControl'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
      <Sidebar/>
      <MessageControl/>
    </div>
  )
}

export default Home;