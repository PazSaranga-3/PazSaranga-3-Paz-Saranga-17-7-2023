import store from './store';


export const changeCity = (city = 'Tel Aviv') => {            

  store.dispatch({
    type: 'changeCity', payload: city})
}


export const addFavorit = (city) => {            

  store.dispatch({
    type: 'addFavorit', payload: city})
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