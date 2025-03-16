import { useMemo, useState } from 'react'
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
  const [taskToEdit,setTaskToEdit] = useState(null)
  function createTask(task){
    setTasks(prev=>[...prev,{id:uuidv4(),...task}])
  }

  function updateTask(updatedtask){
    setTasks(prev=>prev.map(task=>task.id===updatedtask.id?updatedtask:task))
  }

  function deleteTask(id){
    setTasks(prev=>prev.filter(task=>task.id!=id))
  }

  function putTaskToEdit(task){
    setTaskToEdit(task)
  }

  const taskContextValue = useMemo(()=>({
    tasks,
    createTask,
    updateTask,
    deleteTask,
    taskToEdit,
    putTaskToEdit
  }),[tasks,taskToEdit])

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
