import React, { useState } from 'react'
import { UseFormVisibilityContext, UseTaskContext } from '../context'
function Task({id,title,description,deadline,subtasks}) {
  const {putTaskToEdit,deleteTask} = UseTaskContext()
  const[moreDetailsRequired,setmoreDetailsRequired] = useState(false)
  const {toggleInputForm} = UseFormVisibilityContext()
  
  function toggleMoreDetails(){
    setmoreDetailsRequired(prev=>!prev)
  }

  function handleEdit(){
    putTaskToEdit({id,title,description,deadline,subtasks})
    toggleInputForm()
  }

  function handleDelete(){
    deleteTask(id)
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
          subtasks && subtasks.map((subtask,index)=>(
            <div key={index}>{subtask.value}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Task