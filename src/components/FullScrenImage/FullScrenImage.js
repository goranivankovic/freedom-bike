

import galerijaStyles from '../../styles/FullScreenImage/FullScreenImage.module.css'
import{ImCross} from 'react-icons/im'




import {  useDispatch ,useSelector } from 'react-redux'
import { setlazFun } from '../../Redux/imageReducer'

function FullScrenImage() {
     const pictureLink = useSelector((state) => state.picture.pictureLink)
   const dispatch = useDispatch()
  return (
    
        <div className={galerijaStyles.images} id="galerija">

         <div className={galerijaStyles.cross}>
          <ImCross   onClick={() => dispatch(setlazFun())} />
           </div> 

          <img src={pictureLink} className={galerijaStyles.imagesFirstDiv}   alt="freedomBike"/>


         


        </div>
  )
}

export default FullScrenImage