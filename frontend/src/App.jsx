import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.Auth.userData);

  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to={'/login'} />}/>
      <Route path='/signup' element={user ? <Navigate to='/'/> : <Signup />}/>
      <Route path='/login' element={user ? <Navigate to='/'/> : <Login />}/>
    </Routes>
  )
}

export default App
