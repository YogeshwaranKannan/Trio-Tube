import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(closeMenu());
    },[]);
  return (
    <div className='m-4'>
      <iframe width="1600" height="800" 
      src={"https://www.youtube.com/embed/"+params.get("v")} 
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe> 
    </div>
  )
}

export default WatchPage
