import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const NoChatSelected = () => {
  return (
    <div className='w-full h-full gap-y-3 flex justify-center items-center flex-col text-white'>
      <h2>Welcome Little Kong</h2>
      <p>Select a chat to start messaging</p>
      <IoChatbubbleEllipsesOutline fontSize={40}/>
    </div>
  )
}

export default NoChatSelected
