import React from 'react'
import { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import logo from '../images/logo.svg'

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {login}=useLogin();

  const handleSubmit= async(e)=>{
   e.preventDefault();

  await  login(email,password);
}


  return (
<div className=' w-full lg:h-screen'>
  <div className='max-w-[850px] m-auto px-2 py-16 w-full'>

  <div className='col-span-3 h-auto w-full shadow-xl shadow-gray rounded-xl lg:p-4 bg-aliceBlue'>
  <img className='mx-auto' src={logo} alt=''/>
  <h1 className='mx-auto space-y-12 text-blue Inter font-normal text-4xl text-center py-3'>Log into your account</h1>
  <form onSubmit={handleSubmit} className='mx-auto'>

    <div className=' grid w-full py-2 '>
      <div className='flex flex-col py-2 px-16'>
        <label className='block Inter font-300 font-[25px] text-black mb-3'>Email Address</label>
        <input type='email' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className='flex flex-col py-2 px-16'>
        <label className='block Inter font-300 font-[25px] text-black mb-3'>Password</label>
        <input type='password' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel' 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </div>
    
    <div className='flex w-full justify-center items-center '>

    <button className=' p-4 w-full max-w-[300px] text-gray-100 mt-4 bg-[#6688FF] text-white Inter mx-auto'>LOGIN</button>
    </div>



  </form>
  </div>
  </div>
</div>

  )
}
