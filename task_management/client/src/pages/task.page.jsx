import React from 'react'
import RegisterForm from '../component/forms/register.form'
import AddEditTask from '../component/forms/task.form.jsx'
const TaskPage= () => {
  return (
    <main className='h-full w-full flex justify-center items-center '>
        <div className='shadow-md border border-blue-400 px-5 py-5 min-w-120 min-h-100 rounded-md '>
            <h1 className='text-3xl font-bold text-center '>Create Task</h1>
            <p className='mt=1 text-center text-[14px]'>To create Task fill the form below</p>
            {/* form */}
            <AddEditTask/>
             {/* link to login page */}
                    <div className='mt-1'>
                        <p className='text-center'>Don't have an account?<span className='text-blue-600 italic font-semibold'>create account</span></p>
                    </div>
        </div>
    </main>
   
  )
}

export default TaskPage