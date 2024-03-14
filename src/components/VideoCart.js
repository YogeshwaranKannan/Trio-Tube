import React from 'react'

const videoCart = (props) => {
  return (
    <div className='w-[250px] m-2 shadow-xl shadow-gray-200'>
        <img className="p-3 rounded-2xl" src={props?.info?.snippet?.thumbnails?.medium?.url} alt='thumbnail'/>
           <ul className='px-4'>
             <li className='font-bold text-xl'>{props?.info?.snippet?.title}</li>
             <li>{props?.info?.snippet?.channelTitle}</li>
             <li>{props?.info?.statistics?.viewCount} views</li>
          </ul>
    </div>
  )
}

export default videoCart
