import React, { useState } from 'react'
import { UseFormVisibilityContext } from '../context'

function Inputform() {
    const {isFormVisible,toggleInputForm} = UseFormVisibilityContext()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [deadline,setDeadline] = useState("")
    const [subtaskData,setSubTaskData] = useState("")
    const [subtasks,setSubTasks] = useState([])

    function addSubTask(){
        if(subtaskData)
        setSubTasks(prev=>[subtaskData,...prev])
        setSubTaskData("")
    }

    function handleSubmit(e){
        e.preventDefault()
        // call the create task api
        toggleInputForm()
    }

  return (
    <div className={isFormVisible?"":"invisible"}>
        <label htmlFor="title">title</label><br />
        <input 
            type="text" 
            name="title" 
            id="title" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
        /><br />
        <label htmlFor="description">description</label><br />
        <textarea 
            name="description" 
            id="description" 
            value={description} 
            onChange={(e)=>setDescription(e.target.value)}>
        </textarea><br />
        <label htmlFor="deadline">Select Deadline</label><br />
        <input 
            type="date" 
            name="deadline" 
            id="deadline" 
            value={deadline} 
            onChange={(e)=>setDeadline(e.target.value)}
        />
        <div>
            <input 
                type="text" 
                name="subtask" 
                id="subtask" 
                placeholder='subtask' 
                value={subtaskData} 
                onChange={(e)=>{setSubTaskData(e.target.value)}}
            />
            <button onClick={()=>addSubTask()}>➕</button>
        </div>
        {
            subtasks.map((subtask,index)=>(
                <div key={index}>{subtask}</div>
            ))
        }
        <button type='submit' onClick={handleSubmit}>save</button>
    </div>
  )
}

export default Inputform