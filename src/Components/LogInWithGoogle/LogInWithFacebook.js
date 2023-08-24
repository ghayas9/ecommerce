import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setLoggedIn(true);
      setUserInfo(response);

      console.log(response)
      // Here, you can handle the successful login and proceed with your app's logic
    }
  };

  return (
    <div>
      <h2>Login with Facebook</h2>
      {loggedIn ? (
        <div>
          <p>Welcome, {userInfo.name}!</p>
          <p>Email: {userInfo.email}</p>
          {/* Include other user information you need */}
        </div>
      ) : (
        <FacebookLogin
          appId="1032377747940967"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default FacebookLoginButton;
