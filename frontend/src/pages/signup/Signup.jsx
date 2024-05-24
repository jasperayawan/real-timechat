import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
    <div className="mx-auto max-w-lg w-full">
        <form className='w-full'>
            <div className="w-full flex flex-col">
                <h1 className='text-2xl'>Sign Up</h1>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="" id="" className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
                <div className="flex flex-col justify-center items-start w-full">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="" id="" className='rounded-md px-4 py-2 w-full border-[1px] border-slate-600'/>
                </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Signup
