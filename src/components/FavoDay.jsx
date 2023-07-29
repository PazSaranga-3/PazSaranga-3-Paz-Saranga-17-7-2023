import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { cityTemp,changeCity } from '../actionCreator';
import '../client/weatherMain.css'; 
import axios from 'axios';

export default function FavoDay(props) {
  const [temperature, setTemperature] = useState(null);
  let nav = useNavigate();
  let temp1 = ''

   const cityTemp2 = async(city) => {            //return the Temp of today
    try {
      
      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=XUQVkH2UwzGG93Qp68cm8xPvD8ISqCYe&q=${city}`
      let cityResponse = await axios.get(url)
      let cityK = cityResponse.data[0].Key
      
      let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=XUQVkH2UwzGG93Qp68cm8xPvD8ISqCYe&metric=true`
      let daysResponse = await axios.get(url2)
      temp1 = daysResponse.data[0].Temperature.Metric.Value;
      console.log(temp1);
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
    
  }

  useEffect(() => {
    debugger
    cityTemp2(props.city)
    async function fetchCityTemperature() {
      try {
        const temp = await cityTemp(props.city);
        setTemperature(temp);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCityTemperature();
  }, [props.city]);



  const linkTo = () => {
    changeCity(props.city)      //
    nav('/')
  }


  return (
      <div onClick={linkTo} className='small-day'>
        {props.city}
        {temperature !== null ? <div>{temperature}°C</div> : <div>Loading...</div>}     
      </div>
  )
}
