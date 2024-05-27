import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { setMessages } from '../../state/reducers/useConversation.slice'
import { useDispatch, useSelector } from 'react-redux'
import useListenMessages from '../../hooks/useListenMessages'


const Messages = ({ selectedConversation }) => {
  const { loading, getMessages } = useGetMessages();
  const message = useSelector((state) => state.UseConversation.messages)
  useListenMessages();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const getMessage = async () => {
      await getMessages(selectedConversation, dispatch, setMessages)
    }
    getMessage()
  },[selectedConversation])

  return (
    <div className='flex flex-col overflow-auto h-full scrollbar pb-[100px]'>
      {message.length > 0 ? (
        <>
        {message.map((msg,idx) => (
          <Message key={idx} message={msg} selectedConversation={selectedConversation}/>
        ))}
        </>
      ) : (
        <div className="flex justify-center items-center h-full w-full">
          <span>Send a message to start the</span>
        </div>
      )}
    </div>
  )
}

export default Messages
