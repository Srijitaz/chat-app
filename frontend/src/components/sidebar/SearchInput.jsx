import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustands/useConversation';
import useGetCoversations from '../../hooks/useGetCoversations'
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search, setSearch] = useState("");

  const {setselectedConversation}= useConversation();
  const {conversations} = useGetCoversations();
  useGetCoversations();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      toast.error('Search term must be at least 3 chars long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setselectedConversation(conversation)
      setSearch('');
    } else toast.error("No such user found")
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type='text' placeholder='Search....' className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle bg-purple-500 text-white' >
        <IoSearch className='w-5 h-5 outline-nonr'/>  
        </button>
    </form>
  )
}

export default SearchInput
//Starter code for searchinput
// import React from 'react'
// import { IoSearch } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search....' className='input input-bordered rounded-full'/>
//         <button type='submit' className='btn btn-circle bg-purple-500 text-white' >
//         <IoSearch className='w-5 h-5 outline-nonr'/>  
//         </button>
//     </form>
//   )
// }

// export default SearchInput