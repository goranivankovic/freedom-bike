

import contactStyles from '../../styles/Kontakt/Kontakt.module.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'








function Kontakt() {
  return (
     <div className={contactStyles.main} id='kontakt'>

    <div className={contactStyles.firstDiv}>
        Kontakt
    
    </div>
    
               <div className={contactStyles.secondDiv}>

                   <iframe 
      
               className={contactStyles.secondDivitems1}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7466160786526!2d19.8324705154579!3d45.252916355537735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b119549ec7175%3A0xf061dc7755f86c90!2sFreedom%20Bike!5e0!3m2!1sen!2srs!4v1624907459579!5m2!1sen!2srs" 
                 width="100%" height="100%" 
            
                loading="lazy"
                >

            </iframe>

            <div  className={contactStyles.secondDivitems2}>
                    <input type="text" placeholder='Ime I Prezime ...' />
                    <input type="email" placeholder='Email ...' />
                    <textarea  id="" cols="30" rows="6"></textarea>
                    <button className={contactStyles.button}>Send</button>
           </div>


                  </div>





                  <div className={contactStyles.threedDiv}>

                    <div className={contactStyles.threedDivItems}>Ćirpanova 8, Novi Sad</div>

                    <a href="https://www.instagram.com/freedombikeshop/?hl=en" target='_blank' className={contactStyles.threedDivItems} ><FaFacebook /> </a>


                     <a href="https://www.instagram.com/freedombikeshop/?hl=en" target='_blank' className={contactStyles.threedDivItems} ><FaInstagram /> </a>



                     <div className={contactStyles.threedDivItems}>+381/060-373-33-64</div>

                   

                   


                  </div>
               
         
         
           
    
    
    
    </div>
  
    
  )
}

export default Kontakt;



