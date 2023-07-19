import React from 'react'

export default function SmallDay(props) {
  let day = ''

  const shortName = () => {
    switch (props.day) {
      case 'Sunday':
        day = 'Sun'
        break;
      case 'Monday':
        day = 'Mon'
        break;
      case 'Tuesday':
        day = 'Tue'
        break;
      case 'Wednesday':
        day = 'Wed'
        break;
      case 'Thursday':
        day = 'Thu'
        break;
      case 'Friday':
        day = 'Fri'
        break;
      case 'Saturday':
        day = 'Sat'
        break;
      default:
        day = 'error'
    }
  }

  shortName()

  return (
    <div>
      {day}
      <br />
      {props.temp}C
    </div>
  )
}
