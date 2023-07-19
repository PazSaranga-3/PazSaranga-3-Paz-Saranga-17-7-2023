import store from "./store"


export default function reducerCitysArry(state = [], action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'addFavorit' :
      return [...state, action.payload]

      
      default : 
      return state
      
    }
  }
  // case 'removAupdate' :
  //   let newState = [...state]
  //   let i = newState.findIndex(obj => obj.carNum == action.payload.carNum)
  //   newState.splice(i,1)
  //   newState.push(action.payload)
  //   return newState