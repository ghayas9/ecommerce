import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Provider } from 'react-redux';
import store from './State/store'; // Adjust the path


const root = ReactDOM.createRoot(document.getElementById('root'));
const stripePromise = loadStripe('pk_test_51NhwGgGSoxQhSb76G9cpDUopFCTfchm9hrflEbDFRT9OHpH0icq8COTCeW8hsuRc8jDUyL19BHFzh6T32IK3b2fH00JCzRiA2h');


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Provider>
  </React.StrictMode>
);
    
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
