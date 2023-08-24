import axios from 'axios';
import React, { useState } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import LogInWithGoogle from '../Components/LogInWithGoogle';

import { useDispatch } from 'react-redux';
import { login, logout } from '../State/authReducer'; 
import axiosInstance from '../Config/axiosInstance';
import Index from '../Components/LogInWithGoogle';
import FacebookLoginButton from '../Components/LogInWithGoogle/LogInWithFacebook';

export default function LogIn() {

    const dispatch = useDispatch();
    const nv = useNavigate()

    const [password , setPassword] =useState('')
    const [email , setEmail] =useState('')

    const formHandler = (e)=>{
        e.preventDefault()

        axiosInstance.post("/user/signin",{email,password}).then((data)=>{
            if(data.data.success){
                dispatch(login(data.data.token))
                toast.success(data.data.message)
                nv("/")
            }else{
                toast.error(data.data.message)
            }
            console.log(data)
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.message)
        })
    }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
            <div className="w-96 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Log In</h2>
                
                <Index/>
                {/* <button className="w-full bg-blue-500 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-600">
                    <FaGoogle className="mr-2" /> 
                    Log in with Google
                </button> */}
                {/* <LogInWithGoogle/> */}
                {/* <button className="w-full bg-blue-800 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-900">
                    <FaFacebook className="mr-2" />
                    Log in with Facebook
                </button> */}

                <FacebookLoginButton/>
                
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

                    <button onClick={formHandler} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Log In
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-600">
                    Don't have an account? <Link to={"/signup"} className="text-blue-500 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
  )
}




