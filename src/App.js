import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Resume from './sections/Resume';
import Transcript from './sections/Transcript';
import CoverLetter from './sections/CoverLetter';
import DevelopmentPage from './sections/DevelopmentPage'; // Import the DevelopmentPage component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home/><Resume/><Transcript/><CoverLetter/></> } /> {/* Render Home component when URL is '/' */}
        <Route path="/development/:projectId" element={<DevelopmentPage />} /> {/* Render DevelopmentPage component for dynamic URLs */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
