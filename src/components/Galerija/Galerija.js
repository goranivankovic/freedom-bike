
import galerijaStyles from '../../styles/Galerija/Galerija.module.css'



import b17 from '../../img/b17.jpg'


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

import { useState,useEffect } from 'react'




import{ImCross} from 'react-icons/im'



function Galerija() {

  const[ar,setAr]=useState({})

  const[laz,setLaz]=useState(false)
  const[slika,setSlika]=useState('')


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

  function closeImage() {

    setLaz(!laz)
    
  }

  //Image 2

  function i2() {
    setSlika(b2)
    setLaz(!laz)
  }

   //Image 3
    function i3() {
    setSlika(b3)
    setLaz(!laz)
  }


   //Image 4
    function i4() {
    setSlika(b4)
    setLaz(!laz)
  }



   //Image 5
    function i5() {
    setSlika(b5)
    setLaz(!laz)
  }



   //Image 6
    function i6() {
    setSlika(b6)
    setLaz(!laz)
  }


   //Image 7
    function i7() {
    setSlika(b7)
    setLaz(!laz)
  }



   //Image 8
    function i8() {
    setSlika(b8)
    setLaz(!laz)
  }


   //Image 9
    function i9() {
    setSlika(b9)
    setLaz(!laz)
  }

     //Image 10
    function i10() {
    setSlika(b10)
    setLaz(!laz)
  }

     //Image 11
    function i11() {
    setSlika(b11)
    setLaz(!laz)
  }

     //Image 12
    function i12() {
    setSlika(b12)
    setLaz(!laz)
  }

     //Image 17
    function i17() {
    setSlika(b17)
    setLaz(!laz)
  }
















  return (
   <div>

    { !laz ?

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

        :


        <div className={galerijaStyles.images} id="galerija">

         <div className={galerijaStyles.cross}><ImCross  onClick={closeImage} /> </div> 

          <img src={slika} className={galerijaStyles.imagesFirstDiv}   alt="freedomBike"/>


         


        </div>
        
        
        }







    

    </div>
  )
}

export default Galerija;



