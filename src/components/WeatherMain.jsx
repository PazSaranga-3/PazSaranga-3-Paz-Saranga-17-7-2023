import React, { useEffect, useState } from 'react'
import '../client/weatherMain.css'; // Import the CSS file
import axios from 'axios'
import SmallDay from './SmallDay'
import Today from './Today'
import { changeCity, addFavorit, cityTemp } from '../actionCreator'
import store from '../store'

export default function WeatherMain() {
  const [search, searchH] = useState(store.getState().reducerCity)
  const [dA, changeDA] = useState([])
  const [cW, changecW] = useState({})

  useEffect(() => {
    changeCity('Tel Aviv')
    doSearch();
  }, []);

  const doSearch = async () => {

    try {

      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&q=${search}`   //locationKey api
      let cityResponse = await axios.get(url)
      let cityK = cityResponse.data[0].Key

      let url2 = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityK}?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&metric=true` // 5 days forcast api
      let daysResponse = await axios.get(url2)
      console.log(daysResponse);
      showDays(daysResponse.data.DailyForecasts)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const showDays = async (days) => {
    let t = await cityTemp(search)   // city temp funcation is include current weather api
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
