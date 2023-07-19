import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { cityTemp,changeCity } from '../actionCreator';
import '../client/weatherMain.css'; 

export default function FavoDay(props) {
  const [temperature, setTemperature] = useState(null);
  let nav = useNavigate();

  useEffect(() => {
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
