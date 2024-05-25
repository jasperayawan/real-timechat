import React from 'react'

const MessageInput = () => {
  return (
    <form className='w-full relative flex flex-row gap-x-2 mt-10'>
      <input type="text" placeholder='Send a message' className='px-5 py-3 border-slate-500 border-[1px] w-full rounded-full'/>
      <button type='submit' className='px-5 py-3 bg-slate-800 rounded-full text-white'>Submit</button>
    </form>
  )
}

export default MessageInput
