import { createSlice } from '@reduxjs/toolkit'






export const counterSlice = createSlice({
name: 'color',
initialState: {
txt:'#393737',
back:'#ffffff',
grey:'#cccccc',




  },
  reducers: {
   
       darkMode: (state) => {

        state.txt='#ffffff'
        state.back='#393737'
        state.grey='#cccccc'

      
    },

       lightMode: (state) => {

        state.txt='#393737'
        state.back='#ffffff'
        state.grey='#cccccc'

      
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {

  darkMode, lightMode


   } = counterSlice.actions

export default counterSlice.reducer