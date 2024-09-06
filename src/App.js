import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Resume from './sections/Resume';
import Transcript from './sections/Transcript';
import CoverLetter from './sections/CoverLetter';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Resume />
      <Transcript />
      <CoverLetter />
      <Footer />
    </>
  );
};

export default App;
