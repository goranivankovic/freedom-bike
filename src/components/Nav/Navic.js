

import navicStyles from '../../styles/Nav/Navic.module.css'
import {GoThreeBars} from 'react-icons/go'

import{ImCross} from 'react-icons/im'


import React from 'react'
import { useState,useEffect } from 'react'

function Navic() {
  const[laz,setLaz]=useState('')
  const[ar,setAr]=useState({})
  
  useEffect(() => {
    
  
    return () => {
      setAr({})
    }
  }, [])
  

 function closeOpenNav() {
  const icon =document.getElementById('icon')
  icon.style.transition='800ms'
  icon.style.transform='rotate(360deg)'

  setTimeout(() => {
      setLaz(!laz)
  }, 1000);

  
    
    

  
 }

  return (
    <div>

     

      
        {laz ?

         <div className={navicStyles.main}>  

              <div className={navicStyles.iconItem}>
                <ImCross id='icon'  className={navicStyles.icon} onClick ={closeOpenNav} />

              </div>

          
                 <div className={navicStyles.navitems}>

                     <a href='#pocetna' onClick ={closeOpenNav}>Početna </a>

                     <a href='#oNama' onClick ={closeOpenNav}>O nama </a>

                     <a href='#galerija' onClick ={closeOpenNav}>Galerija </a>

                     <a href='#oprema' onClick ={closeOpenNav}>Oprema </a>

                     <a href='#kontakt' onClick ={closeOpenNav}>Kontakt </a>  

                </div>

           </div> 

           :
            <div className={navicStyles.mainBar}>  

            <GoThreeBars id='icon' className={navicStyles.icon} onClick ={closeOpenNav} />

            </div>


           
           }





    </div>
  )
}

export default Navic;