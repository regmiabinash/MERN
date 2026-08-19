import React from 'react'
import { Link } from 'react-router'

export const NotfoundPage = () => {
  return (
    <main className='h-full w-full'>
        <div className='flex flex-col gap-2'>
            <h1>Page Not Found</h1>
            <p>404. not found</p>
            <Link className='w-50 py-3 bg-blue-400 text-white font-bold rounded-md text-center' to={'/'}>Back to Home</Link>
        </div>
    </main>
  )
}
export default NotfoundPage
