import React, { useEffect, useState } from 'react'
import { UseFormVisibilityContext, UseTaskContext } from '../context'

function Inputform() {
    const {createTask,taskToEdit,updateTask,putTaskToEdit} = UseTaskContext()
    const {isFormVisible,toggleInputForm} = UseFormVisibilityContext()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [deadline,setDeadline] = useState("")
    const [subtaskData,setSubTaskData] = useState({})
    const [subTasks,setSubTasks] = useState([])

    useEffect(()=>{
        if(taskToEdit){
            setTitle(taskToEdit.title || "")
            setDescription(taskToEdit.description || "")
            setDeadline(taskToEdit.deadline || "")
            setSubTasks(taskToEdit.subTasks || [])
        }
    },[taskToEdit])

    function addSubTask(){
        if(subtaskData)
        setSubTasks(prev=>[subtaskData,...prev])
        setSubTaskData({})
    }

    function makeFormEmpty(){
        setTitle("")
        setDescription("")
        setDeadline("")
        setSubTaskData("")
        setSubTasks([])
    }

    function handleSubmit(e){
        e.preventDefault()
        // call the create task api
        if(!taskToEdit){
            // let subtasksReqFormat = transformSubtasksToBackendFormat(subTasks)
            let taskReqFormat = {title,description,deadline,subTasks,status:"NOT_COMPLETED"}
            console.log("Request Structure formed:"+JSON.stringify(taskReqFormat));
            createTask(taskReqFormat)
        }else{
            updateTask({taskId:taskToEdit.taskId,title,description,deadline,subTasks})
            putTaskToEdit(null)
        }
        makeFormEmpty()
        toggleInputForm()
    }

    function handleClick(index){
        setSubTasks(subTasks.map((elem,i)=>index==i?{...elem,status:elem.status=='COMPLETED'?'NOT_COMPLETED':'COMPLETED'}:elem))
    }

  return (
    <div className={`h-screen flex flex-col justify-center align-center ${isFormVisible?"":"invisible"}`}>
        <div>
            <label htmlFor="title">title</label><br />
            <input 
                type="text" 
                name="title" 
                id="title" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">description</label><br />
            <textarea 
                name="description" 
                id="description" 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}>
            </textarea>
        </div>
        <div>            
            <label htmlFor="deadline">Select Deadline</label><br />
            <input 
                type="date" 
                name="deadline" 
                id="deadline" 
                value={deadline} 
                onChange={(e)=>setDeadline(e.target.value)}
            />
        </div>
        <div>
            <input 
                type="text" 
                name="subtask" 
                id="subtask" 
                placeholder='subtask' 
                value={subtaskData.subtaskTitle || ""} 
                onChange={(e)=>{setSubTaskData({subtaskTitle:e.target.value,status:'NOT_COMPLETED'})}}
            />
            <button onClick={()=>addSubTask()} className='border-amber-600 border-2 rounded-xl p-0.5'>➕</button>
        </div>
        {
            subTasks.map((subtask,index)=>(
                <div key={index} onClick={()=>handleClick(index)} className={subtask.status=='COMPLETED'?"line-through":""}>{subtask.subtaskTitle}</div>
            ))
        }
        <button type='submit' onClick={handleSubmit}>save</button>
    </div>
  )
}

export default Inputform