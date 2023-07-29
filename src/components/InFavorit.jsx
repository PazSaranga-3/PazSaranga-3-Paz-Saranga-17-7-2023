import React from 'react'
import { checkArry, RemoveFromArr } from '../actionCreator'

export default function InFavorit(props) {

  const isIn = () => {                // 
    if(checkArry(props.city)){
      return <div>
          <p style={{margin:'0 10px 0 0',display:'inline-block'}}>In Favorites </p>
          <button onClick={()=>{RemoveFromArr(props.city)}}>Remove from Favorites</button>
      </div>
    }
    

  }
  return (
    <div style={{marginBottom:'16px', display:'flex', alignItems:'center'}}>
      {isIn()}
    </div>
  )
}
