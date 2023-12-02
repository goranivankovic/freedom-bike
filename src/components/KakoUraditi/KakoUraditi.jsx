import React, { useState } from 'react'

import {RiStarSFill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import kupiStyles from '../../styles/KupiProdaj/KupiProdaj.module.css'
import { useSelector } from 'react-redux';


function KakoUraditi() {

  const[laz1,setLaz1]=useState(true)
  const[laz2,setLaz2]=useState(true)
  const[laz3,setLaz3]=useState(true)
  const[laz4,setLaz4]=useState(true)  
  const[laz5,setLaz5]=useState(true)  


   const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)











  function item1() {
    setLaz1(!laz1)
    setLaz2(true)
    setLaz3(true)
    setLaz4(true) 
    
  }

    function item2() {
    setLaz2(!laz2)
    setLaz1(true)
    setLaz3(true)
    setLaz4(true) 
    
  }


    function item3() {
    setLaz3(!laz3)
    setLaz1(true)
    setLaz2(true)
    setLaz4(true) 
    
  }

    function item4() {
    setLaz4(!laz4)
     setLaz1(true)
    setLaz2(true)
    setLaz3(true) 
    
  }



  function kupiServisFalse(a){

    

    setLaz5(true)
  }

    function kupiServisTrue(b) {
    setLaz5(false)
  }




  return (
    <div id='kupi'>

      <div className={kupiStyles.main} style={{background:back,color:txt}}>
        

      {/* First Div */}

        <div className={kupiStyles.firstDiv}>Kako Uraditi Po Koracima</div>


    {/* Second Div */}
           <div className={kupiStyles.secondDiv}>

              <div style={{border:`.1em solid`}} onClick={kupiServisFalse}>Kupi </div>
               <div style={{border:`.1em solid`}} onClick={kupiServisTrue}>Servis</div>
               

            </div>

   {/* Threeed Div */}



   {laz5 ?


    <div className={kupiStyles.thrredDiv}>

      {/* Item 1 */}
       <div className={kupiStyles.thrredDivItems}>

        <div> 1 </div>

        <div>Izaberite bicikl koji najbolje odgovara vama i vašim potrebama.</div>
      </div>




         {/* Item 2 */}
       <div className={kupiStyles.thrredDivItems}>

        <div>2</div>

        <div>Odaberite željeni način plaćanja. Možete lako pratiti proces isporuke na mreži.</div>
      </div>




         {/* Item 3 */}
       <div className={kupiStyles.thrredDivItems}>

        <div>3</div>

        <div>Kada dobijete svoj bicikl, ništa ne stoji na putu vašoj sledećoj biciklističkoj avanturi.</div>
      </div>



    </div>



            :
            

            //Servis items
        
    <div className={kupiStyles.thrredDiv}>

      {/* Item 1 */}
       <div className={kupiStyles.thrredDivItems}>

        <div> 1 </div>

        <div>Donesite Vaš bicikl na servis kod nas, i uverite se u naš rad i uslugu.</div>
      </div>




         {/* Item 2 */}
       <div className={kupiStyles.thrredDivItems}>

        <div>2</div>

        <div>Sezonski servis podešavanje polovnog bicikla  štelovanje kočnica i menjača.</div>
      </div>




         {/* Item 3 */}
       <div className={kupiStyles.thrredDivItems}>

        <div>3</div>

        <div>Kompletan  generalni servis demontaža svih komponenti sa rama, podmazivanje svih ležajeva.</div>
      </div>



    </div>    

            
            
            }





      {/* Four Div */}

        <div className={kupiStyles.fourDiv}>Ima li još pitanja?</div>



    {/* Five Div */}

        <div className={kupiStyles.fiveDiv}>


          {/* Item 1 */}

          <div className={kupiStyles.fiveDivItems} style={{color:back,background:txt}}>
           <div>Zasto je biciklizam dobar marketinski biznis?</div> {laz1 ? <div onClick={item1}>+</div> : <div onClick={item1}>-</div> }
 
             {!laz1  ? <div>U ciklusu kupovine korišćena kupovina se odvija kao u bilo kojoj normalnoj prodavnici na mreži. Mi brinemo o isporuci i kompletnoj obradi plaćanja. Ako nešto nije u redu sa biciklom, mi ćemo se pobrinuti za proces vraćanja za vas. Jednostavno nam vratite svoj bicikl i vratite novac.</div>
             :""}

          </div>




          {/* Item 2 */}
            <div className={kupiStyles.fiveDivItems} style={{color:back,background:txt}}>
           <div>Dali je cena Fiksna?</div>  {laz2 ? <div onClick={item2}>+</div> : <div onClick={item2}>-</div> }

          {!laz2  ? <div>Prodavci mogu da odluče da li da ponude svoj bicikl po fiksnoj ceni ili po ceni po dogovoru. Ako se o ceni prodavca može pregovarati, vi kao kupac takođe možete napraviti kontraponudu ispod odgovarajućeg bicikla. Samo kliknite na pregovaraj o ceni i unesite svoju ponudu. Nakon toga, prodavac može prihvatiti vašu ponudu, odbiti je ili vam poslati svoju protivponudu.</div>
             :""}
          
          </div>




       {/* Item 3 */}
            <div className={kupiStyles.fiveDivItems} style={{color:back,background:txt}}>
           <div>Kolika velicina rama mi je potrebna?</div>  {laz3 ? <div onClick={item3}>+</div> : <div onClick={item3}>-</div> }

          {!laz3  ? <div>Sa svojom visinom i dužinom koraka pronaći ćete odgovarajuću veličinu. Da biste odredili pravu veličinu okvira za vas, trebalo bi da izmerite svoju visinu i dužinu koraka. Izmerite dužinu od stopala do međunožja. Možete koristiti objekat koji simulira sedlo. U ovom slučaju, izmerite do vrha vašeg objekta. Imajte na umu da su vrednosti samo vodič i da se mogu razlikovati u zavisnosti od proizvođača.</div>
             :""}
          
          </div>



        
       {/* Item 4 */}
            <div className={kupiStyles.fiveDivItems} style={{color:back,background:txt}}>
           <div>Koje sve zemlje vrsite dostavu?</div>  {laz4 ? <div onClick={item4}>+</div> : <div onClick={item4}>-</div> }

          {!laz4  ? <div>Trenutno vrsimo dostavu samo u zemlje 
           balkana :Hrvatska, Crna Gora, Bosna Hercegovina.U vašoj korpi za kupovinu videćete troškove dostave specifične za zemlju.</div>
             :""}
          
          </div>




        </div>


      </div>
      

    </div>
  )
}

export default KakoUraditi