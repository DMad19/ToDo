import React, { useState } from 'react'
import { UseFormVisibilityContext, UseTaskContext } from '../context'
function Task({taskId,title,description,deadline,subTasks}) {
  const {putTaskToEdit,deleteTask} = UseTaskContext()
  const[moreDetailsRequired,setmoreDetailsRequired] = useState(false)
  const {toggleInputForm} = UseFormVisibilityContext()
  
  function toggleMoreDetails(){
    setmoreDetailsRequired(prev=>!prev)
  }

  function handleEdit(){
    putTaskToEdit({taskId,title,description,deadline,subTasks})
    toggleInputForm()
  }

  function handleDelete(){
    deleteTask(taskId)
  }

  return (
    <div>
      <div className='flex flex-row gap-1'>
        <button onClick={toggleMoreDetails}>{moreDetailsRequired?"🔽":"▶️"}</button>
        <h3>{title}</h3>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
      <div className={moreDetailsRequired?"":"invisible"}>        
        <h5>{description}</h5>
        <h5>{deadline}</h5>
        {
          subTasks && subTasks.map((subtask,index)=>(
            <div key={index} className={subtask.status=="COMPLETED"?"line-through":""}>{subtask.subtaskTitle}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Task