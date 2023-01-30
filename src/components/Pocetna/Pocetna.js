


import{MdDirectionsBike} from 'react-icons/md'
import pocetnaStyles from '../../styles/Pocetna/Pocetna.module.css'
import b11 from '../../img/b11.jpg'
import b15 from '../../img/b15.jpg'
import b4 from '../../img/b4.jpg'
import bikeVideo from '../../video/bike.mp4'
import bikeDown from '../../video/bikeDown.mp4'
import Anime from 'react-anime'
import AOS from 'aos';



import React from 'react'

function Pocetna() {


  function umanjiItem(a) {
    a.target.style.transition='750ms'
    a.target.style.transform='scale(.96)'
    a.target.style.transform='rotate(3deg)'
    
  }




    function uvecajItem(b) {
    b.target.style.transition='750ms'
    b.target.style.transform='scale(1)'
    b.target.style.transform='rotate(0deg)'
    
  }

 
 

   AOS.init()
  return (
    
    <div className={pocetnaStyles.main} id="pocetna">


         <div className={pocetnaStyles.firstDiv}>  Freedom Bike  <MdDirectionsBike className={pocetnaStyles.icon} /></div>
        

          
          <div className={pocetnaStyles.secondDiv}>
             <Anime translateX={[-1500,0]} duration={3000}  delay={1000}>  
              SERVIS ZA BICIKLE, SKI SERVIS, RENT-A BIKE
             </Anime>
          </div>


          <div className={pocetnaStyles.threedDiv}>

           


               <img src={b11} alt="freedomBike" className={pocetnaStyles.threedDivItems1} onMouseOver={umanjiItem} onMouseOut={uvecajItem} /> 

               <div className={pocetnaStyles.threedDivItems1}>

               <video  onMouseOver={umanjiItem} onMouseOut={uvecajItem}  src={bikeVideo}  type="video/mp4" autoPlay={true} muted={true} loop={true} > </video>

                </div>

   
               <img src={b15} alt="freedomBike"  className={pocetnaStyles.threedDivItems1} onMouseOver={umanjiItem} onMouseOut={uvecajItem} /> 






                <div className={pocetnaStyles.threedDivItems2}>

               <video onMouseOver={umanjiItem} onMouseOut={uvecajItem}   src={bikeDown}  type="video/mp4" autoPlay={true} muted={true} loop={true} > </video>

                </div>

   
               <img src={b4} alt="freedomBike" className={pocetnaStyles.threedDivItems2}  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/> 

           

            


          </div>
         

          <div className={pocetnaStyles.emptyDiv}>

          </div>

    </div>
  )
}

export default Pocetna


