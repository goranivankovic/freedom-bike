
import onamaStyles from '../../styles/Onama/Onama.module.css'
import b8 from '../../img/b8.jpg'
import {RiStarSFill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Onama() {


  
  function umanjiItem(a) {
    a.target.style.transition='750ms'
    a.target.style.transform='scale(.96)'
  
    
  }




    function uvecajItem(b) {
    b.target.style.transition='750ms'
    b.target.style.transform='scale(1)'

    
  }






    AOS.init();
  return (
    <div className={onamaStyles.main} id="oNama">

         <div className={onamaStyles.firstDiv}>  O nama </div>

         <div className={onamaStyles.secondDiv}>

          <img src={b8} className={onamaStyles.secondDivItems1} alt="freedomBike" 

             onMouseOver={umanjiItem} onMouseOut={uvecajItem}

                   data-aos="fade-up"
                   data-aos-offset="300"
                   data-aos-delay="50"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-once="false"
          />


           <div className={onamaStyles.secondDivItems2}

           onMouseOver={umanjiItem} onMouseOut={uvecajItem}
              

                   data-aos="fade-up"
                   data-aos-offset="200"
                   data-aos-delay="600"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-once="false">


                     Prepoznatljivi smo u gradu zbog našeg kvaliteta  marljivog rada i profesionalnog tima koji već godinama Novosađanima  pruža vrhunske usluge, fantastičnu ponudu i svakako kvalitetne savete.

                     Freedom Bike Shop je nastao 2020. godine kao rezultat višegodišnjeg  i internacionalnog iskustva građenog u segmentu prodaje i održavanja, tako i u takmičarskom segmentu na internacionalnom nivou.

                     Mi smo savršen spoj mladosti i iskustva. Naša pozitivna energija i sportski duh su kombinacija koja vam može pomoći.

           </div>

         </div>



         <div className={onamaStyles.threedDiv}>

          <div className={onamaStyles.threedDivItems1}
          onMouseOver={umanjiItem} onMouseOut={uvecajItem}
          >
            <div><RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> Pre Mesec Dana</div>
             Servis za bicikle, ujedno i prodajno mesto, u širem centru grada. Rad je kvalitetan, cene prihvatljive, a pri tome nema prevelikog čekanja.

               <span>Nikola M.</span>   

          </div>



            <div className={onamaStyles.threedDivItems2}
            onMouseOver={umanjiItem} onMouseOut={uvecajItem}
            >
            <div><RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> <RiStarSFill className="text-warning" /> Pre Mesec Dana</div>

             Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!
                   <span>Sofija T.</span>   
           

          </div>




         </div>




         <div className={onamaStyles.emptyDiv}></div>




       
          


    </div>
  )
}

export default Onama;




