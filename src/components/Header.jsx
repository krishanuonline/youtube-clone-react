import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../../utils/constants';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery)

  useEffect(()=>{

    const timer = setTimeout(()=>{getSearchSuggestion()},2000) //call after 2sec

    //before 2sec if user type again then clear the previous timer
    return ()=>{
      clearTimeout(timer)
    }
    
  },[searchQuery])

  const getSearchSuggestion = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    console.log(json);
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

      <div className='flex col-span-1'>
        <img className='h-8 mx-2 cursor-pointer' src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg" alt="" onClick={toggleMenuHandler}/>
        <img className='h-8' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="" />
      </div>

      <div className='col-span-10 text-center'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-400 px-5 py-2 cursor-pointer font-bold text-white'>Search</button>
      </div>

      <div className='col-span-1'>
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&s" alt="" />
      </div>



    </div>
  )
}

export default Header