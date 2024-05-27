import React from 'react'
import { useSelector } from 'react-redux'
import { extractTime } from '../../utils/extractTime'

const Message = ({ message, selectedConversation }) => {
  const user = JSON.parse(localStorage.getItem("chat-user"))

  const fromMe = message.senderId === user._id
  const formattedTime = extractTime(message.createdAt)
  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-zinc-600 text-white'

  return (
    <div className={`flex flex-row ${fromMe ? 'items-end justify-end' : 'items-start justify-start'} pr-5`}>
      <div className="flex flex-row gap-x-2 justify-center items-start">
        <div className="flex flex-col gap-2">
            <h3 className={`${bubbleBgColor} py-2 px-4 rounded-full text-white`}>{message.message}</h3>
            <p className='text-end text-sm'>{formattedTime}</p>
        </div>
        <img src={profilePic} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
      </div>
    </div>
  )
}

export default Message
