import React from 'react'
import { setSelectedConversation } from "../../state/reducers/useConversation.slice";
import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx }) => {
  const conversationUser = useSelector((state) => state.UseConversation.selectedConversation);
  const dispatch = useDispatch();

  const isSelected = conversationUser?._id === conversation?._id;
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <div onClick={() => dispatch(setSelectedConversation(conversation))} className={`w-full cursor-pointer ${isSelected ? 'bg-blue-500' : ''} flex flex-col mt-5`}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-x-2">
            <div className="relative">
             <img src={conversation.profilePic} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
              <div className={`${isOnline ? 'w-[10px] h-[10px] rounded-full bg-green-500 absolute -top-[5px] -right-[5px]' : ''}`}></div>
            </div>
            <span className='text-white'>{conversation.fullName}</span>
        </div>
      </div>
    </div>
  )
}

export default Conversation
