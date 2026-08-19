import React from 'react'
import Navbar from '../component/header'
import { IoMdAdd } from 'react-icons/io'
import Card from '../component/tasks/card'
import AddEditTask from '../component/forms/task.form'
import Modal from 'react-modal'
import { useState } from 'react'

const Homepage = () => {
  const [isAddModalOpen, setAddModalOpen] = useState({
    type:'add',
    data:null,
    isOpen:false
  })

  const openAddModal = () =>{
    setAddModalOpen({
        type:'add',
        data:null,
        isOpen:true
    })
  }

    const onClose = () =>{
    setAddModalOpen({
        type:'add',
        data:null,
        isOpen:false
    })
  }


  return (
    <main className='h-full w-full'>
      <Navbar/>
        {/* Task List */}
        <div className='grid grid-cols-3 gap-6 mt-10'>
          <Card/>
          
          <Card/>
          
          <Card/>
          
          <Card/>
        </div>
        {/* Add new task button */}
        <button 
        onClick={openAddModal}
         title='Add New Note'
        className='h-12 aspect-square rounded-md bg-blue-500 text-white font-bold cursor-pointer flex items-center justify-center fixed bottom-30 right-50'>
          <IoMdAdd size={24} className='font-bold'/>
          {/* add Edit task */}
        </button>
        <Modal
  isOpen={isAddModalOpen.isOpen}
  onRequestClose={onClose}
  style={{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  }}
  className="w-[40%] h-fit mx-auto mt-16"
>
  <AddEditTask  onClose={onClose}/>
</Modal>

       
    </main>
  )
}

export default Homepage