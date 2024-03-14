import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-48 shadow-xl'>
      <ul className='pb-3'>
        < Link to="/"> <li>Home</li> </Link> 
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold'>Subcriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
     
    </div>
  )
}

export default Sidebar;
