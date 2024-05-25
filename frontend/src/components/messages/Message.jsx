import React from 'react'

const Message = () => {
  return (
    <div className='flex flex-row items-end justify-end'>
      <div className="flex flex-row gap-x-2 justify-center items-start">
        <div className="flex flex-col gap-2">
            <h3 className='bg-blue-500 py-2 px-4 rounded-full text-white'>Hi! What's up?</h3>
            <p className='text-end text-sm'>12:41</p>
        </div>
        <img src="/littlekong.jpg" alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
      </div>
    </div>
  )
}

export default Message
