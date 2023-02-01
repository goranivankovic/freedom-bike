import { createSlice } from '@reduxjs/toolkit'

import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import b4 from '../img/b4.jpg'
import b5 from '../img/b5.jpg'


import b6 from '../img/b6.jpg'
import b7 from '../img/b7.jpg'
import b8 from '../img/b8.jpg'
import b9 from '../img/b9.jpg'
import b10 from '../img/b10.jpg'


import b11 from '../img/b11.jpg'
import b12 from '../img/b12.jpg'

import b17 from '../img/b17.jpg'




export const counterSlice = createSlice({
  name: 'picture',
  initialState: {
    pictureLink: b2,
    laz : true,

  },
  reducers: {
    setlazFun: (state) => {

        state.laz =!state.laz

      
    },

     b2Fun: (state) => {

        state.pictureLink = b2

      
    },

       b3Fun: (state) => {

        state.pictureLink =b3

      
    },

       b4Fun: (state) => {

        state.pictureLink =b4

      
    },
       b5Fun: (state) => {

        state.pictureLink = b5

      
    },
       b6Fun: (state) => {

        state.pictureLink = b6

      
    },

       b7Fun: (state) => {

        state.pictureLink = b7

      
    },

       b8Fun: (state) => {

        state.pictureLink = b8

      
    },
       b9Fun: (state) => {

        state.pictureLink = b9

      
    },
       b10Fun: (state) => {

        state.pictureLink =b10

      
    },
       b11Fun: (state) => {

        state.pictureLink = b11

      
    },
       b12Fun: (state) => {

        state.pictureLink = b12

      
    },
       b17Fun: (state) => {

        state.pictureLink = b17

      
    },
    
   
  },
})

// Action creators are generated for each case reducer function
export const {
   setlazFun,
   b2Fun , b3Fun, b4Fun , b5Fun , b6Fun ,b7Fun, b8Fun ,

   b9Fun , b10Fun, b11Fun , b12Fun , b17Fun 


   } = counterSlice.actions

export default counterSlice.reducer