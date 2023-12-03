
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


import { ImCross } from "react-icons/im";






function Galerija() {


   const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)


    const dispatch = useDispatch()

  const[ar,setAr]=useState({})

  const[img,setImg]=useState('')




  useEffect(() => {
    
  
    return () => {
      setAr({})
    
    }
  }, [])
  


    
  function umanjiItem(a) {
    a.target.style.transition='450ms'
    a.target.style.transform='scale(.96)'
  
    
  }



    function uvecajItem(b) {
    b.target.style.transition='450ms'
    b.target.style.transform='scale(1)'

    
  }


    function fun2() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b2)
   
  }

    function fun3() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b3)
   
  }



      function fun4() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b4)
   
  }


      function fun5() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b5)
   
  }


      function fun6() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b6)
   
  }


      function fun7() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b7)
   
  }


      function fun8() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b8)
   
  }


      function fun9() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b9)
   
  }


      function fun10() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b10)
   
  }


      function fun11() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b11)
   
  }


      function fun12() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b12)
   
  }



  function fun17() {
let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='flex'

   setImg(b17)
   
  }



 function closeCross(){
 let secondDiv =document.querySelector('#secondDiv')
secondDiv.style.display='none'

 }

  return (
   <div id='galerija'>



    <div className={galerijaStyles.main}>
 
     <div className={galerijaStyles.headline}>Galerija</div>
    
         <div className={galerijaStyles.firstDiv}>

            <img src={b17} onClick={fun17} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b2} onClick={fun2} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b3} onClick={fun3} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b4} onClick={fun4} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>


             <img src={b5} onClick={fun5} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b6} onClick={fun6} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b7} onClick={fun7} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
             <img src={b8} onClick={fun8} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />



             <img src={b9} onClick={fun9} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b10} onClick={fun10} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b11} onClick={fun11} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />
             <img src={b12} onClick={fun12} className={galerijaStyles.secondDivItems} alt="freeDom Bike"  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />

 </div>


 <div className={galerijaStyles.secondDiv} style={{background:back,color:txt}} id='secondDiv'>

       <a href="#galerija"><ImCross onClick={closeCross} style={{color:txt}}/></a> 

       <img src={img} alt="" />

 </div>



    


        </div>



    </div>
  )
}

export default Galerija;



