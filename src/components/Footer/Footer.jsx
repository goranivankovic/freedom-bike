import React from 'react'


import footerStyles from '../../styles/Footer/Footer.module.css'
import { useSelector } from 'react-redux';

import { FaRegStar , FaStar ,FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { GoComment  } from "react-icons/go";

function Footer() {
     const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)  
  return (
    <div id='footer'>
        
             <div className={footerStyles.main} style={{background:back,color:txt}}>

              <div className={footerStyles.firstDiv}> freedomBike 
                   <div >
                    <a style={{background:back,color:txt}} href="https://www.facebook.com/" target="_blank"><FaFacebookF /> </a> 
                    <a style={{background:back,color:txt}} href="https://www.instagram.com/" target="_blank"><FaInstagram /> </a>
                     <a style={{background:back,color:txt}} href="https://www.google.com/" target="_blank"><FaGoogle /> </a>
                  </div>
              </div>


              <div className={footerStyles.secondDiv}>
                   
                       <div className={footerStyles.secondDivItems}>
                           <div>Kupi</div>
                          <div>Drumski bicikli</div>
                          <div>Planinski biciklizam</div>
                          <div>Svi brendov</div>
                          <div>Popularni modeli</div>
                          <div>Gravel BIKE</div>

                     </div> 

            
                <div className={footerStyles.secondDivItems}>
                          <div>Prodaj</div>
                          <div>Prodaj bicikli</div>
                          <div>FaQs</div>
                          <div>Postati A</div>
                          <div>Komercijalni prodavac</div>
                          <div>Gravel BIKE</div>

                  </div> 



                   <div className={footerStyles.secondDivItems}>
                         <div>O nama</div>
                          <div>Tim</div>
                          <div>Karijera</div>
                          <div>Blog</div>
                          <div>Pritisni Kit</div>
                    </div> 



                   <div className={footerStyles.secondDivItems}>
                         <div>Suport</div>
                          <div>+49 89 628 24 660</div>
                          <div>Šalter za informacije</div>
                          <div>Kontkt</div>
                          <div>Uslovi</div>
                          <div>Impresum</div>
                    </div> 




              </div>



            </div>

    </div>
  )
}

export default Footer