import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import EcurieSiteScreen from './pages/EcurieSiteScreen';
import HippodromeSiteScreen from './pages/HippodromeSiteScreen';
import PricesScreen from './pages/PricesScreen';
import AccessScreen from './pages/AccessScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={<HomeScreen />}></Route>
        <Route path='/ecurie' exact element={<EcurieSiteScreen />}></Route>
        <Route path='/hippodrome' exact element={<HippodromeSiteScreen />}></Route>
        <Route path='/prices' exact element={<PricesScreen />}></Route>
        <Route path='/access' exact element={<AccessScreen />}></Route>
        <Route path='*' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
