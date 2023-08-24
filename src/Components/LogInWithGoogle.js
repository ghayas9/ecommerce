// import axios from 'axios';
// import React from 'react';
// import GoogleLogin from 'react-google-login';

// export default function LogInWithGoogle() {
//     const responseGoogle = (response) => {
//         if (response.accessToken) {
//             const token = response.accessToken;
            
//             // Send the token to your backend for verification and user data retrieval
//             axios('http://localhost:9000/auth/google', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ token })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 // Handle user data from the backend
//                 console.log(data)
//             })
//             .catch(error => {
//                 // Handle error
//                 console.log(error)
//             });
//         }
//     };
//   return (
//     <GoogleLogin
//         clientId="163231431387-3e92cieou6mid2lgkm1iaa2k8561l0cf.apps.googleusercontent.com"
//         buttonText="Log in with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//     />
//   )
// }

// import React from 'react';
// import GoogleLogin from 'react-google-login';

// const GoogleLoginButton = () => {
//   const responseGoogle = (response) => {
//     console.log(response);
    
//   };

//   return (
//     <div>
//       <h2>Login with Google</h2>
//       <GoogleLogin
//         clientId="163231431387-3e92cieou6mid2lgkm1iaa2k8561l0cf.apps.googleusercontent.com"
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// };

// export default GoogleLoginButton;

import React, { useState } from 'react';
import {GoogleLogin} from 'react-google-login';

const GoogleLoginButton = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const responseGoogle = (response) => {
    if (response.error === 'popup_closed_by_user') {
      setErrorMessage('Login was canceled or closed.');
    } else {
      console.log(response);
    //   Here, you can send the Google ID token to your server for authentication
    }
  };



  return (
    <div>
      <h2>Login with Google</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <GoogleLogin
        clientId="936735488443-d5p6f943lt3qunt6b6t0b5e8274e7k7m.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleLoginButton;




