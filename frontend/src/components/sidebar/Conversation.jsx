import React from 'react'

const Conversation = () => {
  return (
    <div className='w-full flex flex-col mt-5'>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-x-2">
            <img src="/littlekong.jpg" alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
            <span className='text-white'>Little Kong</span>
        </div>
      </div>
    </div>
  )
}

export default Conversation
