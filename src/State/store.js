import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer'; // Adjust the path

const store = configureStore({
  reducer: {
    auth: authReducer,
    // ... other reducers
  },
});

export default store;
