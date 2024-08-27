import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from './jobSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    jobs: jobsSlice,
    users:userSlice
  },
});