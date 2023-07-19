import store from "./store"


export default function reducerCitysArry(state = [], action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'addFavorit' :
      return [...state, action.payload]

      
      default : 
      return state
      
    }
  }
  