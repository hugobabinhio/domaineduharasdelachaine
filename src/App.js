import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import EcurieSiteScreen from './pages/EcurieSiteScreen';
import HippodromeSiteScreen from './pages/HippodromeSiteScreen';
import PricesScreen from './pages/PricesScreen';
import AccessScreen from './pages/AccessScreen';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact element={<HomeScreen />}></Route>
        <Route path='/ecurie' exact element={<EcurieSiteScreen />}></Route>
        <Route path='/hippodrome' exact element={<HippodromeSiteScreen />}></Route>
        <Route path='/prices' exact element={<PricesScreen />}></Route>
        <Route path='/access' exact element={<AccessScreen />}></Route>
        <Route path='*' element={<HomeScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
