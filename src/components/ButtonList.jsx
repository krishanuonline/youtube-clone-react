import React from 'react'
import Button from './Button'

const list = ["All","News","Music","Sports","Gamming","Socer","Socer","Cooking","Computer programming", "Podcasts", "Gadgets", "Weddings", "Thrilles"]

const ButtonList = () => {
  return (
    <div className='flex'>
     {list.map((item)=>{
      return(
        <Button name={item} key={item}/>
      )
     })}
     
    </div>
  )
}

export default ButtonList