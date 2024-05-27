import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import useLogout from '../../hooks/useLogout';
import { setLogout } from '../../state/reducers/Auth.slice';


const Logout = () => {
    const user = useSelector((state) => state.Auth.userData)
    const dispatch = useDispatch();
    const { loading, logout } = useLogout();
    
    const handleLogout = async () => {
        await logout(setLogout, dispatch)
    }

  return (
    <div className='text-white mt-10'>
      <CiLogout onClick={handleLogout} fontSize={25} className='cursor-pointer'/>
    </div>
  )
}

export default Logout
