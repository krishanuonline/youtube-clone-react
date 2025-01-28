import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../../utils/constants';
import { cacheResults } from '../../utils/searchSlice';


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();

 
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestion()
      }
    },1000) //call after 1sec

    //before 2sec if user type again then clear the previous timer
    return ()=>{
      clearTimeout(timer)
    }

    
  },[searchQuery])

  const getSearchSuggestion = async ()=>{
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({[searchQuery]:json[1]}));
  }



  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu())
  }

  // console.log(showSuggestion)


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

      <div className='flex col-span-1'>
        <img className='h-8 mx-2 cursor-pointer' src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg" alt="" onClick={toggleMenuHandler}/>
        <img className='h-8' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="" />
      </div>

      <div className='col-span-10 mx-auto' >
        
        <div className=''>
          <input className='w-[37rem] border border-gray-400 py-2 px-5 rounded-l-full' type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}/>
          <button className='border border-gray-400 p-2 rounded-r-full bg-gray-400 px-5 py-2 cursor-pointer font-bold text-white'>Search</button>
        </div>

        {showSuggestion && 
        <div className='fixed  py-2 px-5 w-[37rem] bg-white border border-gray-100 shadow-lg rounded-lg '>
          <ul>
            {suggestions.map((item)=>{return(<li className='px-2 my-1 shadow-xs cursor-pointer hover:bg-gray-100' key={item}>{item}</li>)})}
          </ul>
        </div>
        }

      </div>

      <div className='col-span-1'>
        <img className='h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&s" alt="" />
      </div>



    </div>
  )
}

export default Header