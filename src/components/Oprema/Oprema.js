
import opremaStyles from '../../styles/Oprema/Oprema.module.css'

import b14 from '../../img/b14.jpg'
import b3 from '../../img/b3.jpg'
import b7 from '../../img/b7.jpg'






function Oprema() {

     
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

  return (
    <div className={opremaStyles.main} id="oprema">

        <div className={opremaStyles.firstDiv}> Opreama</div>

        <div className={opremaStyles.secondDiv}>

           <img src={b3}  alt='freedomBike' className={opremaStyles.secondDivItems}  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
           <img src={b14}  alt='freedomBike' className={opremaStyles.secondDivItems}  onMouseOver={umanjiItem} onMouseOut={uvecajItem}/>
           <img src={b7}  alt='freedomBike' className={opremaStyles.secondDivItems}  onMouseOver={umanjiItem} onMouseOut={uvecajItem} />

        </div>
        <div className={opremaStyles.threedDiv}> Naši Partneri</div>

        <div className={opremaStyles.fourDiv}>
          <div>Suntour       Continental Shimano Bosch Garmin Magura Schwalbe Favero</div>
          <div>Favero Schwalbe Magura Garmin Bosch Shimano Continental Suntour </div>
        </div>

    </div>
  )
}

export default Oprema;




