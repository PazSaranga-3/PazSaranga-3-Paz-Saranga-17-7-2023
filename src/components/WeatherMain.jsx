import React, { useEffect, useState } from 'react'
import '../client/weatherMain.css'; // Import the CSS file
import axios from 'axios'
import SmallDay from './SmallDay'
import Today from './Today'
import { changeCity, addFavorit } from '../actionCreator'
import store from '../store'
import InFavorit from './InFavorit';

export default function WeatherMain() {
  const [search, searchH] = useState(store.getState().reducerCity)
  const [dA, changeDA] = useState([])
  const [cW, changecW] = useState({})

  useEffect(() => {
    changeCity('Tel Aviv')
    doSearch();
  }, []);

    const isEnglish= (inputText) => {
      let inputTextArr = inputText.split('')
      for(let i = 0 ; i < inputTextArr.length ; i ++){
        let tempLetter = inputTextArr[i].charCodeAt()
        if((tempLetter < 65 || tempLetter > 90) && (tempLetter < 97 || tempLetter >122)&& tempLetter !== 32){
          return false
        }
    }
    return true
    
  }
  

  const doSearch = async () => {
    if (isEnglish(search)){
    try {

      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${search}`   //locationKey api
      let cityResponse = await axios.get(url)
      let cityK = cityResponse.data[0].Key

      let url2 = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true` // 5 days forcast api

      let url3= `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true`//current day api

    let dayResponse = await axios.get(url3)
    let temperature = dayResponse.data[0].Temperature.Metric.Value;
    store.dispatch({ type: 'updateTemp', payload: temperature });

      let daysResponse = await axios.get(url2)
      console.log(daysResponse);
      showDays(daysResponse.data.DailyForecasts,temperature)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  else{
    alert('Only in English Please')
  }

  }

  const showDays = async (days,t) => {
    // let t = await cityTemp(search)   // city temp funcation is include current weather api
    changecW({
      city: search,
      weather: days[0].Day.IconPhrase,
      temp: t
    })
    changeDA(days.map((val) => {
      let date = new Date(val.Date);
      let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
      return <SmallDay day={dayOfWeek} temp={val.Temperature.Maximum.Value} />
    }))

  }

  const addToFavL = () => {
    addFavorit(search)
    console.log(store.getState().reducerCitysArry);
  }

  


  return (
    <div className='weather-main-container'>
      <input type="text" onChange={(e) => { searchH(e.target.value) }} placeholder={search} />
      <InFavorit city ={search}/>
      <div className='middle'>
      <Today data={cW} />
      <button onClick={() => { doSearch() }}>Search</button>
      <button onClick={addToFavL}>Add to Favorites</button>
      </div>
      <h3>{cW.weather}</h3>
      <div className='days-container'>
      {dA}
      </div>
    </div>
  )
}
