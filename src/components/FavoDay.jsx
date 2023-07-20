import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeCity } from '../actionCreator';
import '../client/weatherMain.css';
import store from '../store';
import axios from 'axios';

export default function FavoDay(props) {
  const [temp, setTemp] = useState(''); // Use state to store the temperature value
  const nav = useNavigate();

  const fetchTemperature = async () => {
    try {
      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${props.city}`;
      let cityResponse = await axios.get(url);
      let cityK = cityResponse.data[0].Key;

      let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true`;
      let daysResponse = await axios.get(url2);
      let temperature = daysResponse.data[0].Temperature.Metric.Value;
      setTemp(temperature); // Update the state with the temperature value
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTemperature(); // Call the async function inside the useEffect
  }, []);

  const linkTo = () => {
    changeCity(props.city);
    nav('/');
  };

  return (
    <div onClick={linkTo} className='small-day'>
      {props.city}
      {temp !== '' ? <div>{temp}°C</div> : <div>Loading...</div>}
    </div>
  );
}


// import React,{useEffect,useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { changeCity } from '../actionCreator';
// import '../client/weatherMain.css'; 
// import store from '../store';
// import axios from 'axios';

// export default function FavoDay(props) {

//   let temp = ''
//   let nav = useNavigate();


//   useEffect (async()=>{
  
//      try {
//        let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${props.city}`
//        let cityResponse = await axios.get(url)
//        let cityK = cityResponse.data[0].Key
       
//        let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true`
//        let daysResponse = await axios.get(url2)
//        temp = daysResponse.data[0].Temperature.Metric.Value;
//        console.log(temp);
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
   
    
//   }, []);
  



//   const linkTo = () => {
//     changeCity(props.city)
//     nav('/')
//   }


//   return (
//       <div onClick={linkTo} className='small-day'>
//         {props.city}
//         {temp !== '' ? <div>{temp}°C</div> : <div>Loading...</div>}
//       </div>
//   )
// }
