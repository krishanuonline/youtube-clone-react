import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-300 rounded-lg cursor-pointer font-bold hover:bg-gray-500'>{name}</button>
    
    </div>
  )
}

export default Button