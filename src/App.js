import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WeatherMain from './components/WeatherMain';
import WeatherFavo from './components/WeatherFavo';
import HeadersTab from './components/HeadersTab';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <HeadersTab />

        <Routes>
          <Route path='/PazSaranga-3-Paz-Saranga-17-7-2023' element={<WeatherMain />} />
          <Route path='' element={<WeatherMain />} />
          <Route path='/favoriets' element={<WeatherFavo />} />
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
