import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex items-center gap-1'>
        <div className='h-12 flex items-center aspect-square border border-gray-800 justify-center rounded-full bg-gray-100'>
            <span className='font-bold text-xl text-gray-700'>JD</span>
        </div>
        <div>
            <p className='text-lg text-gray-900 font-semibold'>John Doe</p>
            <p className='text-sm underline cursor-poinetr w-fit text-red-500 font-semibold'>Log Out</p>
        </div>
    </div>
  )
}

export default UserProfile