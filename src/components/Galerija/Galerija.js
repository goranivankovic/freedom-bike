
import galerijaStyles from '../../styles/Galerija/Galerija.module.css'



import b2 from '../../img/b2.jpg'
import b3 from '../../img/b3.jpg'
import b4 from '../../img/b4.jpg'
import b5 from '../../img/b5.jpg'


import b6 from '../../img/b6.jpg'
import b7 from '../../img/b7.jpg'
import b8 from '../../img/b8.jpg'
import b9 from '../../img/b9.jpg'
import b10 from '../../img/b10.jpg'


import b11 from '../../img/b11.jpg'
import b12 from '../../img/b12.jpg'

import b17 from '../../img/b17.jpg'








import { useState,useEffect } from 'react'



import {  useDispatch ,useSelector } from 'react-redux'
import { setlazFun , b2Fun,b3Fun,b4Fun,b5Fun,b6Fun,b7Fun, b8Fun,b9Fun,b10Fun,b11Fun,b12Fun,b17Fun} from '../../Redux/imageReducer'






function Galerija() {
    const dispatch = useDispatch()

  const[ar,setAr]=useState({})




  useEffect(() => {
    
  
    return () => {
      setAr({})
    
    }
  }, [])
  


    
  function umanjiItem(a) {
    a.target.style.transition='750ms'
    a.target.style.transform='scale(.96)'
  
    
  }



    function uvecajItem(b) {
    b.target.style.transition='750ms'
    b.target.style.transform='scale(1)'

    
  }



  //Image 2

  function i2() {
    dispatch(setlazFun())
     dispatch(b2Fun())

  }



   //Image 3
    function i3() {

       dispatch(setlazFun())
     dispatch(b3Fun())
  


  }


   //Image 4
    function i4() {

       dispatch(setlazFun())
     dispatch(b4Fun())


  }



   //Image 5
    function i5() {
       dispatch(setlazFun())
     dispatch(b5Fun())


  }



   //Image 6
    function i6() {

       dispatch(setlazFun())
     dispatch(b6Fun())

  }


   //Image 7
    function i7() {
       dispatch(setlazFun())
     dispatch(b7Fun())
  
  }



   //Image 8
    function i8() {

       dispatch(setlazFun())
     dispatch(b8Fun())
  
  }


   //Image 9
    function i9() {

       dispatch(setlazFun())
     dispatch(b9Fun())
  
  }

     //Image 10
    function i10() {
       dispatch(setlazFun())
     dispatch(b10Fun())
   
  }

     //Image 11
    function i11() {
       dispatch(setlazFun())
     dispatch(b11Fun())
   
  }

     //Image 12
    function i12() {

       dispatch(setlazFun())
     dispatch(b12Fun())
 
  }

     //Image 17
    function i17() {
       dispatch(setlazFun())
     dispatch(b17Fun())
  
  }

 















  return (
   <div>



    <div className={galerijaStyles.main} id="galerija">

       <div className={galerijaStyles.firstDiv}>Galerija</div>


       <div className={galerijaStyles.secondDiv}>

            <img src={b17} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i17} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b2} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i2} onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b3} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i3} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b4} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i4} onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>


             <img src={b5} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i5} onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b6} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i6} onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b7} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i7} onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b8} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i8} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />



             <img src={b9} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i9} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b10} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i10} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b11} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i11} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b12} className={galerijaStyles.secondDivItems} alt="freeDom Bike" onClick={i12} onMouseOver={umanjiItem} onMouseOut={uvecajItem} />


       </div>


        <div className={galerijaStyles.emptyDiv}></div>


        </div>



    </div>
  )
}

export default Galerija;



