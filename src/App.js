import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import axios from 'axios'
import WeatherMain from './components/WeatherMain';
import WeatherFavo from './components/WeatherFavo';
import HeadersTab from './components/HeadersTab';
import SmallDay from './components/SmallDay';


function App() {
  const [tlvD, setTlvD] = useState([]);
  const [tlvWether, setTlvW] = useState('');

  useEffect(() => {
    defoulTLV();
  }, []);


  
  const defoulTLV = async() => {
    try {
    let url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&metric=true`
    let daysResponse = await axios.get(url)
    showDays(daysResponse.data.DailyForecasts)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const showDays = (days) => {

    const daysList = days.map((val) => {
      let date = new Date(val.Date);
      let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
      return <SmallDay day={dayOfWeek} temp={val.Temperature.Maximum.Value} />;
    });
    setTlvW ({c : days[0].Temperature.Maximum.Value, w : days[0].Day.IconPhrase});
    setTlvD(daysList);
  };

  

  return (
    <div className="App">
      <BrowserRouter>
      <HeadersTab/>
         
        <Routes>
          <Route path='' element={<WeatherMain tlv = {tlvD} tlvW = {tlvWether} />}/>
          <Route path='/favoriets' element={<WeatherFavo/>}/>
        </Routes>
      
      
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
