import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';

const LiveChat = () => {

    const [LiveMessage,setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const LiveChatMessages = useSelector((store)=>store.livechat.message);
    useEffect(()=>{
     const time = setInterval(()=>{
       dispatch(addMessage(
        {
         name:"yogi",
         message:"Hi!!...."
        }
       ))
     },2000);

     return ()=>{
        clearInterval(time);
     }
    },[]);

  return (
    <>
        <div className='w-full h-[500px] m-2 border border-gray-950 p-1 font-bold overflow-y-scroll flex-col-reverse '>
          <h1 >LiveChat</h1>
          {LiveChatMessages.map((e,index)=>  <ChatMessages  key={index} name={e.name} messages={e.message}/> )}
        </div>
        <form className='w-full p-2 ml-2 border border-black' 
          onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
               name:"YoGI",
               message:LiveMessage,
            }))
            setLiveMessage("");
          }}>
            <input className='w-96 px-2' type='text' value={LiveMessage} onChange={(e)=> setLiveMessage(e.target.value)}></input>
            <button className='bg-green-500 px-2 mx-2'>Send</button>

        </form>  
    </>
    
     

  )
}

export default LiveChat
