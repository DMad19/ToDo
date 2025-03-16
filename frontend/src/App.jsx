import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { NewTaskBtn, Tasklist } from './components/index'
import {Inputform} from './components/index' 
import {FormVisibilityContextProvider, TasksContextProvider} from './context/index'
import {v4 as uuidv4} from "uuid"

function App() {
  const [formVisible,setFormVisible] = useState(false)
  function toggleInputForm(){
    setFormVisible(prev=>!prev)
  }
  
  const [tasks,setTasks] = useState([])

  function createTask(task){
    setTasks(prev=>[...prev,{id:uuidv4(),...task}])
  }

  useEffect(()=>{
    console.log(tasks)
  },[tasks])

  function updateTask(updatedtask){
    setTasks(prev=>prev.map(task=>task.id==updatedtask.id?updatedtask:task))
  }

  function deleteTask(id){
    setTasks(prev=>prev.fliter(task=>task.id!=id))
  }

  const taskContextValue = useMemo(()=>({
    tasks,
    createTask,
    updateTask,
    deleteTask
  }),[tasks])
  return (
    <TasksContextProvider value={taskContextValue}>
      <FormVisibilityContextProvider value={{isFormVisible:formVisible,toggleInputForm}}>
        <Inputform/>
        <Tasklist/>
        <NewTaskBtn/>
      </FormVisibilityContextProvider>
    </TasksContextProvider>
  )
}

export default App
