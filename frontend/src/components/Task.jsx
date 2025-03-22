import React, { useState } from 'react'
import { UseFormVisibilityContext, UseTaskContext } from '../context'
function Task({taskId,title,description,deadline,status,subTasks}) {
  const {putTaskToEdit,deleteTask, updateTask} = UseTaskContext()
  const[moreDetailsRequired,setmoreDetailsRequired] = useState(false)
  const {toggleInputForm} = UseFormVisibilityContext()
  
  function toggleMoreDetails(){
    setmoreDetailsRequired(prev=>!prev)
  }

  function handleEdit(){
    putTaskToEdit({taskId,title,description,deadline,status,subTasks})
    toggleInputForm()
  }

  function handleDelete(){
    deleteTask(taskId)
  }

  function handleTaskClick(){
    updateTask({taskId,title,description,deadline,status:status=='COMPLETED'?'NOT_COMPLETED':'COMPLETED',subTasks})
  }

  return (
    <div className="p-4 bg-[var(--primary-dark)] rounded-lg shadow-md">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <button 
            onClick={toggleMoreDetails}
            className="p-1 bg-[var(--powerful-color)] text-[var(--primary-color)] rounded hover:bg-[var(--secondary-color)] hover:text-[var(--powerful-color)] transition-colors duration-300"
          >
            {moreDetailsRequired?"🔽":"▶️"}
          </button>
          <h3 
            onClick={handleTaskClick} 
            className="text-[var(--secondary-color)] font-semibold cursor-pointer hover:text-[var(--powerful-color)] transition-colors duration-300 truncate flex-1"
          >
            {title}
          </h3>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleEdit}
            className="p-1.5 bg-[var(--powerful-color)] text-[var(--primary-color)] rounded hover:bg-[var(--secondary-color)] hover:text-[var(--powerful-color)] transition-colors duration-300 flex items-center justify-center w-8 h-8"
          >
            <span className="material-icons text-lg">edit</span>
          </button>
          <button
            className="p-1.5 bg-red-500 text-[var(--primary-color)] rounded hover:bg-[var(--secondary-color)] hover:text-red-500 transition-colors duration-300 flex items-center justify-center w-8 h-8"
            onClick={handleDelete}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
      <div className={`mt-2 ${moreDetailsRequired ? "" : "invisible"}`}>        
        <div className="text-[var(--secondary-color)] text-sm text-center font-light opacity-75 leading-relaxed mb-2 font-sans">
            {description}
        </div>
        {deadline && <div className="text-[var(--secondary-color)] text-base font-normal italic">
            Deadline: <span className="font-semibold not-italic">{deadline}</span>
        </div>}
        {
          subTasks && subTasks.map((subtask,index)=>(
            <div 
              key={index} 
              className={`p-2 mt-1 rounded ${
                subtask.status === "COMPLETED"
                  ? "line-through bg-[var(--primary-color-dark)] text-[var(--secondary-color)] opacity-75"
                  : "bg-[var(--primary-color-light)] text-[var(--secondary-color)] hover:bg-[var(--primary-color-dark)] transition-colors duration-300"
              }`}
            >
              {subtask.status === "COMPLETED" ? (
                <span>✔️</span> 
              ) : ""}
              {subtask.subtaskTitle}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Task