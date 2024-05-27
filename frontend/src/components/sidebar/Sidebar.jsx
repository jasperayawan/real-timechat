import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'


const Sidebar = () => {
  return (
    <div className='w-[300px] flex flex-col border-r-[1px] pr-5'>
      <SearchInput />
      <Conversations />
      <Logout />
    </div>
  )
}

export default Sidebar
