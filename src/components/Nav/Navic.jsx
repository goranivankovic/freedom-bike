

import navicStyles from '../../styles/Nav/Navic.module.css'
import {GoThreeBars} from 'react-icons/go'

import{ImCross} from 'react-icons/im'




import React from 'react'
import { useState,useEffect ,useRef} from 'react'
import { useSelector } from 'react-redux'

function Navic() {
 const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)


  let ref=useRef()

  const[ar,setAr]=useState({})
   const[laz,setlaz]=useState(true)
  
  useEffect(() => {
    
  
    return () => {
      setAr({})
    }
  }, [])

  function da() {


    
    setlaz(!laz)

    


    
  }




  
  return (
    <div>



<div>


<svg width="132" onClick={da} className={navicStyles.navbar} id='bars'  height="50" viewBox="0 0 132 50" fill="none"  xmlns="http://www.w3.org/2000/svg">
       <g id="navbar" >
        <line  className={laz ?  "line1" : "Line1"}  x1="37" y1="11.5" x2="87" y2="11.5" stroke={grey} strokeWidth="5"/>
       <line className={laz ?  "line3" : "Line3"}  x1="37" y1="33.5" x2="87" y2="33.5" stroke={grey} strokeWidth="5"/>
       <line className={laz ?  "line2" : "Line2"}  x1="66" y1="22.5" x2="116" y2="22.5" stroke={grey} strokeWidth="5"/>
       </g>
</svg>





{/* Right navbar small button */}



<svg className={navicStyles.circles} width="76" height="1080" viewBox="0 0 76 1080" fill='none' xmlns="http://www.w3.org/2000/svg">
<g id="Frame 19">
<line id="Line 4" x1="54.5" y1="1080" x2="54.5"  fill='#a6a6a6' stroke={grey} strokeWidth="5"/>



 <a href="#pocetna"><circle id="Ellipse 2" cx="54" cy="354" r="10" fill={grey}/></a> 
<a href="#kupi"><circle id="Ellipse 3" cx="54" cy="398" r="10" fill={grey}/></a> 
<a href="#putuj"><circle id="Ellipse 4" cx="54" cy="442" r="10" fill={grey}/></a>
<a href="#onama"><circle id="Ellipse 5"  cx="54" cy="486" r="10" fill={grey}/></a>
<a href="#galerija"><circle id="Ellipse 6" cx="54" cy="530" r="10" fill={grey}/></a>
<a href="#komentari"> <circle id="Ellipse 7" cx="54" cy="578" r="10" fill={grey}/></a>
<a href="#contact"><circle id="Ellipse 8" cx="54" cy="622" r="10" fill={grey}/></a>
<a href="#footer"><circle id="Ellipse 9" cx="54" cy="666" r="10" fill={grey}/></a>
</g>
</svg>




  

 </div>



    </div>
  )
}

export default Navic;