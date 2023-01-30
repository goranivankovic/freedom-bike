


import logo from './logo.svg';
import './App.css';


import Navic from './components/Nav/Navic';
import Pocetna from './components/Pocetna/Pocetna';
import Onama from './components/Onama/Onama';
import Galerija from './components/Galerija/Galerija'
import Oprema from './components/Oprema/Oprema';
import Footer from './components/Footer/Footer'
import Kontakt from './components/Kontakt/Kontakt';


import AOS from 'aos';
import 'aos/dist/aos.css'; 












import React from 'react'


function App() {

  AOS.init()
  return (
    <div>
      <Navic />
      <Pocetna />
      <Onama />
      <Galerija />
      <Oprema />
      <Kontakt />

      <Footer />
     

    </div>
  )
}

export default App