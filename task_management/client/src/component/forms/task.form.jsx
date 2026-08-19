import React from 'react'
import { TbAsterisk } from 'react-icons/tb';
import { IoMdClose } from "react-icons/io";

const AddEditTask = ({onClose}) => {
  return (
    <div className=' bg-white p-5 rounded-md relative'>
      {/* clase modal */}
      <button 
      onClick={onClose}
      className='absolute right-3 top-3 bg-white p-5 rounded-md '>
        <IoMdClose size={22}  className='text-slate-950' />
      </button>
      <div>
                <form className=' flex-col gap-6  bg-white p-6 rounded-lg shadow-md aspect-square cursor-pointer absolute right-3 top-3 h-10  flex justify-center items-center' >
                    {/* Title */}
                    <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-xl font-bold' htmlFor='title'>Title</label>
                        <TbAsterisk size={12} className='text-red-500'/>
                        {/* input */}
                        <input
                        className='border border-blue-200 px-2 py-2.5 rounded-md text-lg bg-slate-50 text-slate-950'
                         name='title'
                         id='title'
                         placeholder='Cryptography Assignment'
                        />
                    </div>
                    {/* context */}
                    <div className='flex flex-col gap-1'>
                      <div className='flex flex-col gap-1'>
                        {/* label */}
                        <label className='text-xl font-bold' htmlFor='context'>context</label>
                        {/* input */}
                        <textarea
                        className='border border-gray-400 px-2 py-2.5 rounded-md text-lg bg-slate-50 text-slate-950'
                        name='text'
                         id='content'
                         placeholder='Task dexcription'
                         />
                    </div>
                  </div>
                     {/* priority*/}
                    <div className='flex flex-col gap-1'>
            
                        <label className='text-xl font-bold' htmlFor='priority'>Priority</label>
                        
                        <select
                        defaultValue={'low'}
            id="priority"
            className="border border-blue-200 px-2 py-2.5 rounded-md focus:outline-blue-400 text-lg font-bold"
            required
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
                    </div>

                    {/* Submit button */}
                    <div className='w-full mt-4'>
                        <button
                        className='w-full bg-blue-500 py-3 text-white font-bold rounded-sm cursor-pointer text-xl'
                         type="submit"
                          >Create</button>
                    </div>
                </form>
            </div>
          </div>
  )
}

export default AddEditTask