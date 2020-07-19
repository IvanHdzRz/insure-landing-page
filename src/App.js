import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import SectionReasons from './Components/SectionReason'
import MoreInfo from './Components/MoreInfo'
import Footer from './Components/Footer'
function App() {
  return (
    <div className='App'>
        <Navigation />
        <Hero />
        <SectionReasons />
        <MoreInfo />
        <Footer />
    </div>
  );
}

export default App;
