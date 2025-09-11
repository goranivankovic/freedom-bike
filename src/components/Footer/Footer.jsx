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
    <div id='info'>
        
             <div className={footerStyles.main} style={{background:back,color:txt}}>

              <div className={footerStyles.firstDiv}> freedomBike 
                   <div >
                    <a style={{background:back,color:txt}} href="https://www.facebook.com/" target="_blank"><FaFacebookF /> </a> 
                    <a style={{background:back,color:txt}} href="https://www.instagram.com/freedombikeshop/" target="_blank"><FaInstagram /> </a>
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
                          <div>Renta</div>
                          <div>Ski Servis</div>
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
                          <div>+381 60 373 33 64</div>
                          <div>freedombike2020@gmail</div>
                          <div>Ćirpanova 8</div>
                          <div>Novi Sad</div>
                          <div>Bike Shop</div>
                    </div> 




              </div>



            </div>

    </div>
  )
}

export default Footer