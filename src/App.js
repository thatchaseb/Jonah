import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Resume from './components/Pages/Resume';
import Landing from './components/Pages/Landing';
import Videos from './components/Pages/Videos';
import Media from './components/Pages/Media';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <div class="text-kack-900">
      <Header />
      
      <Landing />
      <Resume />
      <Media />
      <Videos />
      
      <Contact /> 
      <Footer />

      
    </div>
    

  );
}

export default App;
