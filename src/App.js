


import logo from './logo.svg';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import Navic from './components/Nav/Navic.jsx';
import Pocetna from './components/Pocetna/Pocetna.jsx';
import KakoUraditi from './components/KakoUraditi/KakoUraditi';
import Putovanja from './components/Putovanja/Putovanja.jsx';

import Galerija from './components/Galerija/Galerija.jsx';





import { useSelector, useDispatch } from 'react-redux'
import Onama from './components/Onama/Onama.jsx';
import Komentar from './components/Komentar/Komentar.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';







function App() {
   const laz = useSelector((state) => state.picture.laz)

  AOS.init()
  return (


    <div>
      {laz ?

       <div >
        
 
      <Navic />
      <Pocetna />
      <KakoUraditi />
      <Putovanja />
       <Onama />
      <Galerija />
      <Komentar />
    
    <Contact /> 
      <Footer />  



   
      




      </div>

      : 
     
      ''
      
      

      }


    </div>
  )
}

export default App