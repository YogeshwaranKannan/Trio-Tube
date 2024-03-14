import React, { useEffect, useState } from 'react'
import { utube_API } from '../utils/constants';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  console.log(video);
  useEffect(()=>{
    getVideos();
  },[]);

  const  getVideos = async ()=>{
    const data = await fetch(utube_API);
    const json = await data.json();
    setVideo(json.items);
  }
  return (
    <div className='flex flex-wrap '>
        {(video).map((vid) =>
          <Link  key={vid.id}  to={"/watch?v="+vid.id}>
          <VideoCart info ={vid} /> 
          </Link>)}
    </div>
  )
}

export default VideoContainer
