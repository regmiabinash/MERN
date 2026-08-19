import React from 'react'
import { GoSearch } from "react-icons/go";
import UserProfile from './user-profile';

const Navbar = () => {
  return (
    <main className='flex justify-between items-center w-full border-b border-gray-200 px-2 py-3'>
        {/* login */}
        <div>
            <p className='font-bold italic tracking-widest text-xl text-blue-500'>Task App</p>
        </div>

        {/* search */}
        <div className='bg-gray-100 flex items-center border w-80 border-gray-300 px-2 py-3 rounded-md'>
            <input
            className='w-full h-full outline-none text-sm text-gray-600'
            placeholder='Search Task'
            />
            {/* search icon */}
            <button className='h-full aspect-square cursor-pointer'>
                 <GoSearch/>
            </button>
        </div>

        {/* user profile */}
        <UserProfile/>
    </main>
  )
}

export default Navbar