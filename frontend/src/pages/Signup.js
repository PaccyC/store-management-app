
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import logo from '../images/logo.svg'

export default function Signup() {
  const [username,setUsername]=useState('');
   const [firstName,setFirstname]=useState('');
   const [lastName,setLastname]=useState('');
      const [phoneNumber,setPhoneNumber]=useState('');
      const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstName,lastName,phoneNumber,username,email,password)
  }
 
  return (
    <div className=' w-full lg:h-screen'>
 
 <div className='max-w-[850px] m-auto px-2 py-16 w-full'>

 
<div className='col-span-3 h-auto w-full shadow-xl shadow-gray rounded-xl lg:p-4 bg-aliceBlue'>
  <img className='mx-auto text-center space-y-12' src={logo} alt=''/>
  <h1 className='mx-auto space-y-12 text-blue Inter font-normal text-4xl text-center mb-6'>
    Create Account
    </h1>

    <form onSubmit={handleSubmit}>

      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
      <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px]  text-black py-2'>First Name</label>
    <input type='text' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel'
        onChange={(e)=>setFirstname(e.target.value)}
    value={firstName}
    />
    
    </div>
      <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px]  text-black py-2'>Last Name</label>
    <input type='text' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel'
        onChange={(e)=>setLastname(e.target.value)}
    value={lastName}
    />
    
    </div>
  
   
      <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px]  text-black py-2'>Email Address</label>
    <input type='email' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel focus:border-nobel'
        onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    
    </div>
  
        <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px]  text-black py-2'>Phone Number</label>
    <input type='phone' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel focus:border-nobel'
     onChange={(e)=>setPhoneNumber(e.target.value)}
    value={phoneNumber}
    />
    </div>
    <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px]  text-black py-2'>Username</label>
    <input type='text' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel'
     onChange={(e)=>setUsername(e.target.value)}
    value={username}
    />
    </div>
    <div className='flex flex-col'>
    <label className='Inter font-300 font-[25px] py-2 text-black'>Password</label>
    <input type='password' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel'
     onChange={(e)=>setPassword(e.target.value)}
    value={password}
    />
    </div>
    
    </div>
    <div className=' flex w-full justify-center items-center'>

    <button  className=' bg-[rgb(102,136,255)] max-w-[300px] rounded-md text-white font-[30px] p-4 w-full mt-4' disabled={isLoading}>SIGN UP</button>
    </div>
  

    </form>

{error && <div className=' text-red-500'>{error}</div>}
</div>
</div>
</div>
  )
}
