import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageReducer'
import colorReducer from './colorReducer'



export default configureStore({
  reducer: {
    picture : imageReducer,
    color : colorReducer
  
  },
})