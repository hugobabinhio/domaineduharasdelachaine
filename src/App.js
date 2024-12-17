import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import EcurieSiteScreen from './pages/EcurieSiteScreen';
import HippodromeSiteScreen from './pages/HippodromeSiteScreen';
import PricesScreen from './pages/PricesScreen';
import AccessScreen from './pages/AccessScreen';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<HomeScreen />} />
        <Route path='/ecurie' exact element={<EcurieSiteScreen />} />
        <Route path='/hippodrome' exact element={<HippodromeSiteScreen />} />
        <Route path='/prices' exact element={<PricesScreen />} />
        <Route path='/access' exact element={<AccessScreen />} />
        <Route path='*' exact element={<HomeScreen />} />
      </Routes>
    </BrowserRouter  >
  );
}

export default App;
