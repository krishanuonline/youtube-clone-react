import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {videos.length > 0 ? <>
      {videos.map((e)=>{
        return (
          <Link to={"/watch?v="+e.id} key={e.id}> <VideoCard key={e.id} info={e} /> </Link>
        );
        }
      )}
      
      </> : <div className='font-bold text-3xl'>Loading...</div>}
    
    </div>
  );
}

export default VideoContainer