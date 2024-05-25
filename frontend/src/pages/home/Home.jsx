import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="mx-auto flex flex-row max-w-5xl w-full bg-slate-900 rounded-2xl p-5">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
