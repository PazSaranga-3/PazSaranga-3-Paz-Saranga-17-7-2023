import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { changeCity } from '../actionCreator';
import '../client/weatherMain.css'; 
import store from '../store';
import axios from 'axios';

export default function FavoDay(props) {
  const [temperature, setTemperature] = useState(null);
  let nav = useNavigate();

  
  useEffect(() => {
    async function fetchCityTemperature() {
      try {
        let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${props.city}`
        let cityResponse = await axios.get(url)
        let cityK = cityResponse.data[0].Key
        
        let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true`
        let daysResponse = await axios.get(url2)
        let temp = daysResponse.data[0].Temperature.Metric.Value;
        setTemperature(temp);
        console.log(temperature);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCityTemperature();
  }, [props.city]);



  const linkTo = () => {
    changeCity(props.city)
    nav('/')
  }


  return (
      <div onClick={linkTo} className='small-day'>
        {props.city}
        {temperature !== null ? <div>{temperature}°C</div> : <div>Loading...</div>}
      </div>
  )
}
