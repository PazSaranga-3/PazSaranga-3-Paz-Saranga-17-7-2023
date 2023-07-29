import React from 'react'

export default function SmallDay(props) {

  return (
    <div className='small-day'>
      {props.day}
      <br />
      {props.temp !== null ? <div>{props.temp}°C</div> : <div>Loading...</div>}
    </div>
  )
}
