import React from 'react'
import {RiStarSFill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import kupiStyles from '../../styles/Komentar/Komentar.module.css'
import { useSelector } from 'react-redux';

import { FaRegStar , FaStar } from "react-icons/fa";
import { GoComment  } from "react-icons/go";

function Komentar() {
 
   const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)   
  return (


   <div className={kupiStyles.main} style={{background:back,color:txt}} id='komentari'>


         <div className={kupiStyles.coomentDiv}>

               <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor}/>  Pre Mesec Dana</div>
                <div>Servis za bicikle, ujedno i prodajno mesto, u širem centru grada. Rad je kvalitetan, cene prihvatljive, a pri tome nema prevelikog čekanja.</div>
                <div>Nikola M.</div>
              </div>



            <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor}/> Pre 2 Dana</div>
                <div>Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!.</div>
                <div>Sofija T.</div>
              </div>



         <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor}/> Pre 10 Dana</div>
                <div>Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!.</div>
                <div>Sofija T.</div>
              </div>    


         <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor}/> Pre 15 Dana</div>
                <div>Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!.</div>
                <div>Sergej U.</div>
              </div>    


   
            <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor}/> Pre 11 Dana</div>
                <div>Sve pohvale za majstore. Baš su brzi i pedantni.</div>
                <div>Mare S.</div>
              </div>    
        
       <div className={kupiStyles.coomentDivItems}>
                <div><FaStar className={kupiStyles.iconsColor}/> <FaStar className={kupiStyles.iconsColor}/>  <FaStar className={kupiStyles.iconsColor} />  <FaStar className={kupiStyles.iconsColor} />  <FaRegStar className={kupiStyles.iconsColor}/> Pre 6 Dana</div>
                <div>Hvala puno na na pomoći brza i profesionalna usluga.</div>
                <div>Marija G.</div>
              </div>




          </div>


</div>



          

  )
}

export default Komentar