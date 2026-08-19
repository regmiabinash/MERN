import React from 'react'
import { BsBroadcastPin, BsFillPinAngleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Card = () => {
  return (
    <div className='border border-gray-300 py-3 px-4 rounded-md shadow flex flex-col gap-2'>
        <div className='flex justify-between'>
            <p className='text-lg font-bold text-gray-800'>Task</p>
            {/* pin */}
            <BsFillPinAngleFill size={22} className='text-gray-600'/>
        </div>
        {/* priority */}
        <div>
            <p className='bg-blue-300 w-25 rounded-md text-center text-white font-bold text-sm py-0.5'>High</p>
        </div>
        <div className='flex flex-col gap-1'>
             {/* title */}
             <p className='text-lg font-semibold text-gray-700 line-clamp-1'>Task Title</p>
             {/* content */}
             <p className='text-[18px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi commodi magnam ab impedit perferendis eligendi eaque deleniti odio ipsum fuga dolor tenetur atque vitae saepe, totam porro inventore cupiditate asperiores?</p>
             {/* button */}
             <div className='flex justify-end gap-2 mt-1 items-center'>
            {/* edit */}
            <FaEdit title='Edit Task'size={20} className='text-blue-500 cursor-pointer'/>
            {/* delete */}
            <FaTrash  title='Delete Task'size={20} className='text-red-500 cursor-pointer'/>
             </div>
        </div>
    </div>
  )
}

export default Card