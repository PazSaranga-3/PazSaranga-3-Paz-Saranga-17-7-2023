import React from 'react'
import store from '../store'
import FavoDay from './FavoDay'
import '../client/weatherMain.css'; 


export default function WeatherFavo() {
    let arr = store.getState().reducerCitysArry

  const showAll = () => {
    return arr.map((val)=>{
      return <FavoDay city = {val}/>
    })
  }

  return (
    <div className='favoritDays'>
      {showAll()}
    </div>
  )
}
