import React from 'react'


import {RiStarSFill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import onamaStyles from '../../styles/Onama/Onama.module.css'
import { useSelector } from 'react-redux';


import b7 from '../../img/b7.jpg'

function Onama() {

  
   const back = useSelector((state) => state.color.back)
  const txt = useSelector((state) => state.color.txt)
  const grey = useSelector((state) => state.color.grey)
  
  return (
    <div id='onama'>

       <div className={onamaStyles.main} style={{background:back,color:txt}}>

          <div className={onamaStyles.prazanDiv}></div>

        <div className={onamaStyles.headline}>Više O nama</div>

        <div className={onamaStyles.secondDiv}>
          <div className={onamaStyles.secondDivItem1}>

                 <div>   Prepoznatljivi smo u gradu zbog našeg kvaliteta marljivog rada i profesionalnog tima koji već godinama Novosađanima pruža vrhunske usluge, fantastičnu ponudu i svakako kvalitetne savete.</div>
                  <div>  Freedom Bike Shop je nastao 2020. godine kao rezultat višegodišnjeg i internacionalnog iskustva građenog u segmentu prodaje i održavanja, tako i u takmičarskom segmentu na internacionalnom nivou.</div>
                  <div> Mi smo savršen spoj mladosti i iskustva zajedno možemo do uspeha.</div>   
                 <div>Naša pozitivna energija i sportski duh su kombinacija koja vam može pomoći.</div>
          </div>
           <div className={onamaStyles.secondDivItem2}></div>
        </div>


        <div className={onamaStyles.headline}>Tipovi & Trikovi</div>


           <div className={onamaStyles.threedDiv}>
                     
                            {/* Item1 */}
                        <div className={onamaStyles.threedDivItems}>
                                <div className={onamaStyles.threedDivItemsImage1}> </div>
                                <div>Prodaja vašeg polovnih bicikla nikada nije bila tako brza,</div>
                             <div> bezbedna i jednostavna kao kod bucicile-a. </div>
                             <div>    Sada još više, jer je naš tim zaista dao sve od sebe
                              da vaša prodaja bicikala bude što optimalnija.</div> 

                      </div>


                       {/* Item2 */}
                  <div className={onamaStyles.threedDivItems2}>
                                <div className={onamaStyles.threedDivItemsImage2}> </div>
                                <div>Kako se ponašate na grupnoj vožnji?</div>
                             <div>  Ne pričamo punih usta, držimo vrata jedni za druge. </div>
                              <div> Ne prekidamo nikoga dok pričaju, ko prvi pozove sačmaricu, sedi u prednjem delu auta. </div>
                            
                      </div>


              
                    {/* Item3 */}
                  <div className={onamaStyles.threedDivItems3}>
                                <div className={onamaStyles.threedDivItemsImage3}> </div>
                                 <div>Sve žene na biciklu - Ali kako? </div>
                                  <div> 12,7% - toliko žena u Evropi zarađuje manje od svog muškog kolege na istoj poziciji.</div>
                                <div>  Svi treba da budemo svesni ovog rodnog jaza u platama i njegove hitnosti.</div>
                              
                            
                      </div>





                     
                    {/* Item4 */}
                  <div className={onamaStyles.threedDivItems4}>
                                <div className={onamaStyles.threedDivItemsImage4}> </div>
                                 
                                 <div>Konačno je proleće, biciklistička sezona je u toku, skretnice i staze su već pune. </div>
                                   <div>To sada počinje za ljubitelje bicikala: u najlepšem i najintenzivnijem periodu godine.</div>
                                   <div>Jedva čekaju da vreme i staye budu suve.</div>

                              
                            
                      </div>



                    


           </div>


             <div className={onamaStyles.prazanDiv}></div>


        </div>

    </div>
  )
}

export default Onama