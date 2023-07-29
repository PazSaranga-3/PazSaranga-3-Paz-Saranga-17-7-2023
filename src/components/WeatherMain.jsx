import React, { useEffect, useState } from 'react'
import '../client/weatherMain.css'; // Import the CSS file
import axios from 'axios'
import SmallDay from './SmallDay'
import Today from './Today'
import { changeCity, addFavorit, cityTemp } from '../actionCreator'
import store from '../store'
import InFavorit from './InFavorit';

export default function WeatherMain() {
  const [search, searchH] = useState(store.getState().reducerCity)      // hook for the input -  get the state from the redueCity
  const [dA, changeDA] = useState([])            // hook for the                         
  const [cW, changecW] = useState({})            // hook for the 

  useEffect(() => {                    // reload the Tel-Aviv as defult value
    changeCity('Tel Aviv')
    doSearch();
  }, []);

  const isEnglish = (inputText) => {                        // validate the search will be in English only
    let inputTextArr = inputText.split('')
    for (let i = 0; i < inputTextArr.length; i++) {
      let tempLetter = inputTextArr[i].charCodeAt()
      if ((tempLetter < 65 || tempLetter > 90) && (tempLetter < 97 || tempLetter > 122) && tempLetter !== 32) {
        return false
      }
    }
    return true

  }


  const doSearch = async () => {          // call the accuweather api and send the data to showDays
    if (isEnglish(search)) {
      try {

        let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=XUQVkH2UwzGG93Qp68cm8xPvD8ISqCYe&q=${search}`   //locationKey api
        let cityResponse = await axios.get(url)
        let cityK = cityResponse.data[0].Key

        let url2 = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityK}?apikey=XUQVkH2UwzGG93Qp68cm8xPvD8ISqCYe&metric=true` // 5 days forcast api
        let daysResponse = await axios.get(url2)
        console.log(daysResponse);
        showDays(daysResponse.data.DailyForecasts)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    else {
      alert('Only in English Please')
    }

  }

  const showDays = async (days) => {     // return arry of components with the days and weather
    let t = await cityTemp(search)   // city temp funcation is include current weather api
    changecW({                              // for the current day
      city: search,
      weather: days[0].Day.IconPhrase,
      temp: t
    })
    changeDA(days.map((val) => {
      let date = new Date(val.Date); // creat a Date object
      let dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' }); // JS date methode that allows us to extrat the name of the day
      return <SmallDay day={dayOfWeek} temp={val.Temperature.Maximum.Value} />
    }))

  }

  const addToFavL = () => {                 // add to Store arry the favorite
    addFavorit(search)
    console.log(store.getState().reducerCitysArry);
  }

  return (
    <div className='weather-main-container'>

      <input type="text" onChange={(e) => { searchH(e.target.value) }} placeholder={search} />
      <InFavorit city={search} />           {/* return component the conatin the Remove from Fav button */}

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
