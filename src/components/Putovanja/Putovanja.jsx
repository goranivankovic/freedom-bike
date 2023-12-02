import React from 'react'
import { useSelector } from 'react-redux'

import putujStyles from '../../styles/Putuj/Putuj.module.css'


//First row 
import image1 from '../../img/b11.jpg'
import video1 from '../../video/bike.mp4'
import image2 from '../../img/b15.jpg'


//Second row 
import video2 from '../../video/bikeDown.mp4'
import image3 from '../../img/b7.jpg'

function Putovanja() {

    
   const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)


  return (
    <div id='putuj'>



        <div className={putujStyles.main}>


         {/* Image 1  Row1*/}

          <img className={putujStyles.itemsFirstRow} src={image1} alt="" />

         {/* Video 1  Row1*/}
        <div  className={putujStyles.itemsFirstRow}>
           <video    src={video1}  type="video/mp4" autoPlay={true} muted={true} loop={true} > </video>

       </div>
         
       
             {/* Image2  Row1*/}
            
           <img className={putujStyles.itemsFirstRow} src={image2} alt="" />






            {/* Row 2 */}



                {/* Video 2  Row2*/}
        <div  className={putujStyles.itemsSecondRow}>
           <video    src={video2}  type="video/mp4" autoPlay={true} muted={true} loop={true} > </video>

       </div>
         
       
             {/* Image3  Row2*/}
            
           <img className={putujStyles.itemsSecondRow} src={image3} alt="" />






        </div>


    </div>
  )
}

export default Putovanja;