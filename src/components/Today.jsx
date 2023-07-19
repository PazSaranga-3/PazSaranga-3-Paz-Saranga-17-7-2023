import React from 'react'

export default function Today(props) {
  return (
    <div>
      {props.data.city}
      <br/>
      {props.data.temp}C
    </div>
  )
}


