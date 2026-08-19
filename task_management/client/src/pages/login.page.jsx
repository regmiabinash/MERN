import React from 'react'
import RegisterForm from '../component/forms/register.form'
import LoginForm from '../component/forms/login.form'
import { Link } from 'react-router'
const LoginPage= () => {
  return (
    <main className='h-full w-full flex justify-center items-center '>
        <div className='shadow-md border border-blue-400 px-5 py-5 min-w-120 min-h-100 rounded-md '>
            <h1 className='text-3xl font-bold text-center '>Login</h1>
            <p className='mt=1 text-center text-[14px]'>Login to access your tasks </p>
            {/* form */}
            <LoginForm/>
             {/* link to login page */}
                    <div className='mt-1'>
                        <p className='text-center'>
                          Don't have an account?
                          <Link to={'/register'}>
                          <span className='text-blue-600 italic font-semibold'>create account</span>
                          </Link>
                          </p>
                    </div>
        </div>
    </main>
   
  )
}

export default LoginPage