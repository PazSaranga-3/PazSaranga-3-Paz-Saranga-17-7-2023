import store from './store';
import axios from 'axios'


export const changeCity = (city = 'Tel Aviv') => {            // change current search city

  store.dispatch({
    type: 'changeCity', payload: city})
}


export const addFavorit = async(city) => {                // adding city to fav
  let arr = store.getState().reducerCitysArry
  if (arr.indexOf(city) == -1){
    try {
      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${city}`
      let cityResponse = await axios.get(url)
      let cityK = cityResponse.data[0].Key
      store.dispatch({
        type: 'addFavorit', payload: city})      
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}




export const checkArry = (city) => {            // Remove a city
  let arr = store.getState().reducerCitysArry
  let inde = arr.indexOf(city)
  if (inde == -1){
    return false
  }
  else{
    return true
  }
}


export const RemoveFromArr = (city) => {            // Remove a city
  store.dispatch({
    type: 'remove', payload: city})
  }
  
  
  
  
  // export const cityTemp = async(city) => {            //return the Temp of today
  //   try {
      
  //     let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&q=${city}`
  //     let cityResponse = await axios.get(url)
  //     let cityK = cityResponse.data[0].Key
      
  //     let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=RmuQRSmtJUJaipmQEdpFo1grsGt2abOF&metric=true`
  //     let daysResponse = await axios.get(url2)
  //     // console.log(daysResponse);
  //     let temperature = daysResponse.data[0].Temperature.Metric.Value;
  //     store.dispatch({ type: 'updateTemp', payload: temperature });
  //     return store.getState().reducerTemp
  //   }
  //   catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
    
  // }



