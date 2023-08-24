import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../../Config/axiosInstance';

function App() {
    const responseMessage = (response) => {
        axiosInstance.post('/auth/google',{response}).then((data)=>{
            console.log(data)
        })
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
    <GoogleLogin 
    onSuccess={responseMessage} 
    onError={errorMessage}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
     />
    )
}
export default App;