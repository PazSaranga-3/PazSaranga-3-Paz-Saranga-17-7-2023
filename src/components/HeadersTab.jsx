import React from 'react'
import { Link } from 'react-router-dom'


export default function HeadersTab() {
  return (
    <div className='headers-tab' >
      <Link to="PazSaranga-3-Paz-Saranga-17-7-2023"><button>Home</button></Link>
      <Link to="favoriets"><button>Favorites</button></Link>
    </div>
  )
}
