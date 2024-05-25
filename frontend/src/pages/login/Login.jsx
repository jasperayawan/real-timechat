import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
    <div className="mx-auto max-w-lg w-full">
        <form className='w-full'>
            <div className="w-full flex flex-col">
                <h1 className='text-2xl'>Login</h1>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
                <div className="flex flex-col justify-center items-start w-full mb-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
                <button className='bg-slate-950 text-white py-3 rounded-md'>Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
