import React from 'react'

const VideoCard = ({info}) => { 
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    console.log("INFO ddddd",info)

  return (
    <div className='p-2 m-2 w-70 shadow'>
        <img className="rounded-ld" src={thumbnails.medium.url} alt="" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard 