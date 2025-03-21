import React from 'react'
import { Link } from 'react-router'
import signup from '../../assets/Images/signup.png'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
  return (
    <div>
      <div className="flex w-[100vw] h-[100vh] justify-between items-center bg-[#F8F8F8]">
        <div className="w-[50vw] flex flex-col justify-center items-center h-[100vh] gap-6">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold w-full">GET STARTED NOW</h1>
          </div>
          <div className="bottom">
            <form action="">
              <div className="flex gap-3 w-[33vw]">
                <div className="flex flex-col w-full ">
                  <label htmlFor="" className="mb-1 font-medium">First Name</label>
                  <input type="text" name="firstName" id="name" placeholder="Enter your first name" className="border-1 border-gray-500 pl-2 py-1 h-[40px] w-full rounded-xl mb-3" required />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="mb-1 font-medium">Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder="Enter your last name" className="border-1 border-gray-500 pl-2 py-1 h-[40px] rounded-xl mb-3" required />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="mb-1 font-medium">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className="border-1 border-gray-500 pl-2 py-1 h-[40px] rounded-xl mb-3" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="mb-1 font-medium">Password</label>
                <input type="password" name="" id="" placeholder="**********" className="border-1 border-gray-500 pl-2 py-1 rounded-xl mb-3  h-[40px]" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="mb-1 font-medium"> Confirm Password</label>
                <input type="password" name="" id="" placeholder="**********" className="border-1 border-gray-500 pl-2 py-1 rounded-xl mb-3  h-[40px]" required />
              </div>
              <div className="flex justify-between items-center pb-3">
                <div className="flex items-center ">
                  <input type="checkbox" name="" id="" required />
                  <p className="pl-2 font-medium text-[14px] " >I agree to the terms and policy</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <button className="bg-[#EA454C] w-full py-2 rounded-xl text-white" type="submit"><Link to='/' className="">Sign up</Link></button>
              </div>
              <div className='flex flex-col gap-3 items-center mt-2'>
                <p>or</p>

                <button className="bg-white w-[33vw] py-2 rounded-xl text-black border-gray-500 border-1" type="submit"><Link to='/' className="flex items-center justify-center gap-3"><FcGoogle size={24} /> <span>Sign In with Google</span> </Link></button>
                <p>Have an account? <Link to='/' className="text-[#EA454C]
              ">Sign in</Link></p>
              </div>
            </form>
          </div>
        </div>
        <div className=''>
          <img src={signup} alt="Login Photo" className="h-[100vh] w-fit " />
        </div>

      </div>
    </div>
  )
}

export default Signup