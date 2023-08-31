import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutEnglish from './Pages/AboutEnglish/AboutEnglish';
import AboutRussian from './Pages/AboutRussian/AboutRussian';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop /> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-english" element={<AboutEnglish />} />
          <Route path="/about-russian" element={<AboutRussian />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

