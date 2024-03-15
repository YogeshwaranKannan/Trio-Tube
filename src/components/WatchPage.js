import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(closeMenu());
    },[]);
  return (
    <div className='w-full'> 
      <div className='flex'>
        <div className='m-4 flex'>
          <iframe width="1000" height="500" 
          src={"https://www.youtube.com/embed/"+params.get("v")} 
          title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
          </iframe> 
            
        </div>
        <div className='w-full m-2 p-2'>
              <LiveChat/>
        </div>
    </div>
      
      
      <div>
        <CommentsContainer/>
      </div>
    </div>
  )
}

export default WatchPage
