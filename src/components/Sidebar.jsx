import React from 'react'

import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isSidebar = useSelector((store)=> store.app.isMenuOpen)

  if(!isSidebar) return null;

  return (
    <div className='py-5 px-16 mr-10 shadow-lg w-48'>

      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className='pt-5 font-bold'>Subscriptions</h1>
      <ul >
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>

      <h1 className='pt-5 font-bold'>Subscriptions</h1>
      <ul >
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>


    </div>
  )
}

export default Sidebar