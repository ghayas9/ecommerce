import axios from 'axios';
import React, { useState } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {  toast } from 'react-toastify';

export default function SignUp() {

    const [password , setPassword] =useState('')
    const [email , setEmail] =useState('')
    const [confirmpassword , setConfirmpassword] =useState('')


    const formHandler = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:9000/user/signup",{email,password,confirmpassword}).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message)
            }else{
                toast.error(data.data.message)
            }
        }).catch((err)=>{
            toast.error(err.response.data.message)
            console.log(err)
        })
    }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="w-96 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                
                <button className="w-full bg-blue-500 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-600">
                    {/* <FaGoogle className="mr-2" />  */}
                    Sign up with Google
                </button>
                <button className="w-full bg-blue-800 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-900">
                    {/* <FaFacebook className="mr-2" />  */}
                    Sign up with Facebook
                </button>
                
                <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <div className="mx-2 text-gray-500">or</div>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} type="password" className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>

                    <button onClick={formHandler} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-600">
                    Already have an account? <Link to={"/signin"} className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
  )
}
