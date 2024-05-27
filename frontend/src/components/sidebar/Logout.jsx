import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import useLogout from '../../hooks/useLogout';
import { setLogout } from '../../state/reducers/Auth.slice';
import { removeSelected } from '../../state/reducers/useConversation.slice';


const Logout = () => {
    const user = useSelector((state) => state.Auth.userData)
    const selectedConversation = useSelector((state) => state.UseConversation.selectedConversation);
    const dispatch = useDispatch();
    const { loading, logout } = useLogout();
    
    const handleLogout = async () => {
        await logout(setLogout, dispatch, removeSelected)
    }

  return (
    <div className='text-white mt-10'>
      <CiLogout onClick={handleLogout} fontSize={25} className='cursor-pointer'/>
    </div>
  )
}

export default Logout
