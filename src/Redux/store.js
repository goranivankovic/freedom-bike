import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageReducer'

export default configureStore({
  reducer: {
    picture: imageReducer,
  },
})