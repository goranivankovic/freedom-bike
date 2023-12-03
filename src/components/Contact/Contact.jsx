import React from 'react'

import 'aos/dist/aos.css';
import contactStyles from '../../styles/Contact/Contact.module.css'
import { useSelector } from 'react-redux';
function Contact() {
 const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)

  return (
    <div id='contact'>
        <div className={contactStyles.main} style={{background:back,color:txt}}>

            <div className={contactStyles.imageDiv}></div>

            <div className={contactStyles.formDiv} style={{background:txt,color:back}}>
                  <div className={contactStyles.formDivHeadline}>
                    <div>Postanite deo bicikal</div>
                    <div>Zajednice</div>
                  </div>
                 <div>Budite u toku sa uzbudljivim savetima, korisnim</div>
                 <div>uputstvima i vestima!</div>

                

                 


                  <div className={contactStyles.formInput}> <input type="email" placeholder='Email' style={{border:`.1em solid ${back}`}}/> <span style={{background:txt,color:back,border:`.1em solid ${back}`}}>Subscribe</span> </div>
             
            </div>


        </div>

    </div>
  )
}

export default Contact