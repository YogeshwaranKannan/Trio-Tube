import React from 'react'

const commentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <div>
          <comment key={index} data = {comment}/>
            <div>
                <commentsList comment={"repliespassing"}/>
            </div>
        </div>
        
    ));
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments :</h1>
      <commentsList comments={"n"}/>
    </div>
  )
}

export default CommentsContainer
