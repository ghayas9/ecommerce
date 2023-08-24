import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';


import React from 'react'

export default function Index() {
  return (
    <GoogleOAuthProvider clientId="936735488443-d5p6f943lt3qunt6b6t0b5e8274e7k7m.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
  )
}



