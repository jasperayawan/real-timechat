import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../state/reducers/useConversation.slice';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const messages = useSelector((state) => state.UseConversation.messages)
  const dispatch = useDispatch()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        dispatch(setMessages([...messages, newMessage]))
    })

    return () => socket?.off("newMessage")
  },[socket, setMessages, messages])
}

export default useListenMessages
