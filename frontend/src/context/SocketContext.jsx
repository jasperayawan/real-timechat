import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import { useSelector } from 'react-redux';
import io from 'socket.io-client'

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const auth = useSelector((state) => state.Auth)
    const usr = localStorage.getItem("chat-user")

    useEffect(() => {
        if(usr){
            const user = JSON.parse(usr)
            const socket = io("http://localhost:5000", {
                query: {
                    userId: user?._id
                }
            });

            setSocket(socket)

            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close();
        } else {
            if(socket){
                socket.close();
                setSocket(null)
            }
        }
    },[usr])

  return (
    <SocketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </SocketContext.Provider>
  )
}

