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
      let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&q=${city}`
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


export const cityTemp = async(city) => {            //return the Temp of today
  try {

    let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&q=${city}`
    let cityResponse = await axios.get(url)
    let cityK = cityResponse.data[0].Key

    let url2 = `http://dataservice.accuweather.com/currentconditions/v1/${cityK}?apikey=WOYWXNnFqzasEle1KVTxmiRNz8VGxd9S&metric=true`
    let daysResponse = await axios.get(url2)
    // console.log(daysResponse);
    return daysResponse.data[0].Temperature.Metric.Value
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }

}













//   store.dispatch({ type: 'logIn', payload: {
//     name,
//     pass,
//     carNum,
//     carType,
//     parkFlag: false,
//     currentParkingIndex : 0,
//     parkHistory: []

//   } })
// }



// export const loginMe = (user,pass) => {                                                     // login in
//   let arryTemp = store.getState().reducerUsersArry
//   let userTemp = arryTemp.findIndex((obj) => obj.name === user && obj.pass === pass)
//   if(userTemp == -1){
//     return alert('user not found')
//   }
//   else{
//     store.dispatch({type : 'logIn' , payload : arryTemp[userTemp]})
//     return true
//   }
// }

// export const startPark = (city) => {
//   console.log(store.getState().reducerUser);
//  let user = store.getState().reducerUser
//  if (Object.keys(user).length === 0) {
//   return alert('please Login first')
//  }
//  if (user.parkFlag){
//   return alert('you are already in a parking mode, please finish your parking first')
//  }
//  else{
//   if(city == 'TLV'){
//    store.dispatch({type : 'startPark', payload : TLV})
//   }
//   else if(city == 'NT'){
//    store.dispatch({type : 'startPark', payload : NT})
//   }
//   else if(city == 'RH'){
//    store.dispatch({type : 'startPark', payload : RH})
//   }
//   console.log(store.getState().reducerUser);
//   return true
//  }
// }

// export const pay = () => {
//   store.dispatch({type : 'pay', payload : false})
// }

// export const restorAction = (i) =>{
//   store.dispatch({type : 'restor', payload : i})
  
// }
// export const removAupdate = () =>{
//   let state = store.getState().reducerUser
//   store.dispatch({type : 'removAupdate', payload : state})
  
// }