import React from 'react'

const RegisterForm = () => {



  return (
    <div className='mt-10'>
                <form className='flex flex-col gap-4'>
                    {/* first name */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='first_name'>First Name</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                         id='first_name'
                         type='text'
                         placeholder='John'
                         required
                        />
                    </div>
                    {/* last name */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='last_name'>Last Name</label>
                        {/* input */}
                        <input id='last_name'
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                         type='text'
                         placeholder='Doe'
                         required
                         />
                    </div>
                     {/* Email*/}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='email'>Email</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                         id='eamil'
                         type='email'
                         placeholder='johndoe@gmail.com'
                         required
                        />
                    </div>
                     {/* Password */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='password'>Password</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                         id='password'
                         type='password'
                         placeholder='Enter password'
                         required
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-[16px] font-semibold' htmlFor='c_password'>Re-type Password</label>
                        {/* input */}
                        <input
                        className='border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400'
                         id='c_password'
                         type='password'
                         placeholder='Re-type password'
                         required
                        />
                    </div>
                    {/* Submit button */}
                    <div className='w-full mt-4'>
                        <button
                        className='w-full bg-blue-600 py-3.5 text-white font-bold rounded-sm cursor-pointer'
                         type="submit">Create Account</button>
                    </div>
                </form>
            </div>
  )
}

export default RegisterForm