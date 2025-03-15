import React, { useState } from 'react'

function Task({title,description,deadline,subtasks}) {
  const[moreDetailsRequired,setmoreDetailsRequired] = useState(false)

  function toggleMoreDetails(){
    setmoreDetailsRequired(prev=>!prev)
  }
  return (
    <div>
      <div className='flex flex-row gap-1'>
        <button onClick={toggleMoreDetails}>{moreDetailsRequired?"🔽":"▶️"}</button>
        <h3>{title}</h3>
        <button>edit</button>
        <button>delete</button>
      </div>
      <div className={moreDetailsRequired?"":"invisible"}>        
        <h5>{description}</h5>
        <h5>{deadline}</h5>
        {
          subtasks && subtasks.map((subtask,index)=>(
            <div key={index}>{subtask}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Task