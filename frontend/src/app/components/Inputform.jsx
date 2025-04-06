"use client"
import React, { useEffect, useState } from 'react'
import { UseFormVisibilityContext, UseTaskContext } from '../context'

function Inputform() {
    const {createTask,taskToEdit,updateTask,putTaskToEdit} = UseTaskContext()
    const {isFormVisible,toggleInputForm} = UseFormVisibilityContext()
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [deadline,setDeadline] = useState("")
    const [status,setStatus] = useState("NOT_COMPLETED")
    const [subtaskData,setSubTaskData] = useState({})
    const [subTasks,setSubTasks] = useState([])

    useEffect(()=>{
        if(taskToEdit){
            setTitle(taskToEdit.title || "")
            setDescription(taskToEdit.description || "")
            setDeadline(taskToEdit.deadline || "")
            setSubTasks(taskToEdit.subTasks || [])
            setStatus(taskToEdit.status || "NOT_COMPLETED")
        }
    },[taskToEdit])

    function addSubTask(e){
        e.preventDefault()
        if(subtaskData?.subtaskTitle?.trim().length>0){
            console.log(subtaskData)
            setSubTasks(prev=>[subtaskData,...prev])
            setSubTaskData({})
        }
    }

    function makeFormEmpty(){
        setTitle("")
        setDescription("")
        setDeadline("")
        setSubTaskData("")
        setSubTasks([])
        setStatus("NOT_COMPLETED")
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!taskToEdit){
            // let subtasksReqFormat = transformSubtasksToBackendFormat(subTasks)
            let taskReqFormat = {title,description,deadline,status,subTasks}
            console.log("Request Structure formed:"+JSON.stringify(taskReqFormat));
            createTask(taskReqFormat)
        }else{
            updateTask({taskId:taskToEdit.taskId,title,description,deadline,status,subTasks})
            putTaskToEdit(null)
        }
        makeFormEmpty()
        toggleInputForm()
    }

    function handleClick(index){
        setSubTasks(subTasks.map((elem,i)=>index==i?{...elem,status:elem.status=='COMPLETED'?'NOT_COMPLETED':'COMPLETED'}:elem))
    }

    function handleStatusClick(){
        setStatus(prev=>prev=='COMPLETED'?'NOT_COMPLETED':'COMPLETED')
    }

    function closeForm(e){
        e.preventDefault()
        makeFormEmpty()
        putTaskToEdit(null)
        toggleInputForm()
    }
  return (
    <form className={`fixed inset-0 z-50 flex flex-col justify-center items-center ${isFormVisible?"":"invisible"}`} onSubmit={(e)=>handleSubmit(e)}>
        <div className='bg-[var(--form-bg)] p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-100 w-full max-w-md md:max-w-lg lg:max-w-xl mx-4'>
            <div className='flex justify-end'>
                <button 
                    onClick={(e)=>closeForm(e)}
                    className='text-[var(--secondary-color)] hover:text-[var(--powerful-color)] transition-colors duration-300'>
                    X
                </button>
            </div>
            <div className="mb-4">
                <label 
                    className='text-[var(--secondary-color)] font-semibold'
                    htmlFor="title">
                    title
                </label><br />
                <input 
                    className="w-full p-2 mt-1 border border-[var(--form-text)] text-[var(--form-text)] rounded focus:outline-none focus:border-[var(--secondary-color)]"
                    required={isFormVisible}
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <label 
                    className="text-[var(--secondary-color)] font-semibold"
                    htmlFor="description">description</label><br />
                <textarea 
                    className="w-full p-2 mt-1 border border-[var(--form-text)] text-[var(--form-text)] rounded focus:outline-none focus:border-[var(--secondary-color)]"
                    name="description" 
                    id="description" 
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)}>
                </textarea>
            </div>
            <div className="mb-4">            
                <label
                    className="text-[var(--secondary-color)] font-semibold" 
                    htmlFor="deadline"
                >
                    Select Deadline
                </label><br />
                <input 
                    type="date" 
                    name="deadline" 
                    id="deadline" 
                    value={deadline} 
                    onChange={(e)=>setDeadline(e.target.value)}
                    className="w-full p-2 mt-1 border border-[var(--form-text)] text-[var(--form-text)] rounded focus:outline-none focus:border-[var(--secondary-color)]"
                />
            </div>
            <div className="mb-4 flex flex-row items-center">
                <input 
                    type="checkbox" 
                    name="status" 
                    id="status" 
                    checked={status=='COMPLETED'} 
                    onChange={(e)=>handleStatusClick(e)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") e.preventDefault();
                    }}                  
                    className="mr-2 accent-[var(--powerful-color)]"
                />
                <label 
                    htmlFor="status"
                    className="text-[var(--secondary-color)]"
                >
                    mark as completed?
                </label>
            </div>
            <div className='mb-4 flex items-center gap-2'>
                <input 
                    type="text" 
                    name="subtask" 
                    id="subtask" 
                    placeholder='subtask' 
                    value={subtaskData.subtaskTitle || ""} 
                    onChange={(e)=>{setSubTaskData({subtaskTitle:e.target.value,status:'NOT_COMPLETED'})}}
                    className='w-full p-2 border border-[var(--form-text)] text-[var(--form-text)] rounded focus:outline-none focus:border-[var(--secondary-color)]'
                />
                <button 
                    onClick={(e)=>addSubTask(e)} 
                    className="p-2 bg-[var(--secondary-color)] text-[var(--primary-color)] rounded hover:bg-[var(--powerful-color)] hover:text-[var(--secondary-color)] transition-colors duration-300 text-2xl font-bold"
                >
                    +
                </button>
            </div>
            {
                subTasks.map((subtask,index)=>(
                    <div 
                        key={index} 
                        onClick={()=>handleClick(index)}
                        className={`p-2 mb-2 rounded ${
                            subtask.status === "COMPLETED"
                            ? "line-through bg-[var(--powerful-color)] text-[var(--primary-color)]"
                            : "bg-[var(--primary-color)] text-[var(--secondary-color)]"
                        }`}
                    >
                        {subtask.subtaskTitle}
                    </div>
                ))
            }
            <button 
                type='submit'
                className="w-full p-2 bg-[var(--powerful-color)] text-[var(--primary-color)] font-semibold rounded hover:bg-[var(--secondary-color)] hover:text-[var(--powerful-color)] transition-colors duration-300"
            >
                save
            </button>
        </div>
    </form>
  )
}

export default Inputform