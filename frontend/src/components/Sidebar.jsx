import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 flex flex-col'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutBtn/>
    </div>
  )
}

export default Sidebar

//starter code for sidebar
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutBtn from './LogoutBtn'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-600 flex flex-col'>
//         <SearchInput/>
//         <div className='divider px-3'></div>
//         <Conversations/>
//         <LogoutBtn/>
//     </div>
//   )
// }

// export default Sidebar