import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import SectionReasons from './Components/SectionReason'
function App() {
  return (
    <div className='App'>
        <Navigation />
        <Hero />
        <SectionReasons />
    </div>
  );
}

export default App;
