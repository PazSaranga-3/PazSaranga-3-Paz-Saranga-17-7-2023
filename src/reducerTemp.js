import store from "./store"


export default function reducerTemp(state = '', action){ //state = [], action = { type, payload }
  switch(action.type){
    case 'updateTemp' :
      return  action.payload

      
      default : 
      return state
      
    }
  }
  