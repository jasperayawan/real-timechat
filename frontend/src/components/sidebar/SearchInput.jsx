import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='relative'>
        <input type="text" placeholder='Search...' className='search px-5 py-3 rounded-full border-slate-400 border-[1px] w-full'/>
        <CiSearch className='absolute top-3 right-3' fontSize={25}/>
    </div>
  )
}

export default SearchInput
