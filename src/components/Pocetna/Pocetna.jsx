



import pocetnaStyles from '../../styles/Pocetna/Pocetna.module.css'

import Anime from 'react-anime'
import AOS from 'aos';



import React from 'react'
import { useSelector } from 'react-redux';

function Pocetna() {

 const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)
 

   AOS.init()
  return (
    
    <div  id="pocetna" style={{color:txt}}>


      <div className={pocetnaStyles.main}>



             <div className={pocetnaStyles.firstDiv}>

              Lider u Kvalitetu

            </div>

            <div className={pocetnaStyles.secondDiv}>

              <h5>Po najboljim cenama</h5>
              <div style={{color:grey}}>Kupujte i Prodajte biciklove</div>

            </div>


            <div className={pocetnaStyles.threedDiv}>

              
               <a href='#kupi' style={{color:txt,background:back}}>Kupi Bicikal</a>
               <a href='#kupi' style={{color:back,background:txt,border:`.1em solid ${back}`}}>Servis Bicikla </a>

            </div>













      </div>

    </div>
  )
}

export default Pocetna


