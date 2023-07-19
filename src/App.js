import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import WeatherMain from './components/WeatherMain';
import WeatherFavo from './components/WeatherFavo';
import HeadersTab from './components/HeadersTab';
import SmallDay from './components/SmallDay';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <HeadersTab />

        <Routes>
          <Route path='' element={<WeatherMain />} />
          <Route path='/favoriets' element={<WeatherFavo />} />
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
