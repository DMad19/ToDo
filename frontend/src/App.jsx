import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { NewTaskBtn, Tasklist, Header, Inputform } from './components/index'
import {FormVisibilityContextProvider, TasksContextProvider} from './context/index'
import UseGetTasks from './hooks/useGetTasks'
import UseCreateTask from './hooks/useCreateTask'

function App() {
  
  const [formVisible,setFormVisible] = useState(false)

  function toggleInputForm(){
    setFormVisible(prev=>!prev)
  }
  
  const [tasks,setTasks] = useState([])
  const [taskToEdit,setTaskToEdit] = useState(null)

  useEffect(()=>{
    async function fetchTasks(){
      setTasks(await UseGetTasks())
    }
    fetchTasks()
  },[])

  function createTask(task){
    async function createTask(task) {
      await UseCreateTask(task)
      setTasks(await UseGetTasks())
    }
    createTask(task)
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
        <Header/>
        <Inputform/>
        <Tasklist/>
        <NewTaskBtn/>
      </FormVisibilityContextProvider>
    </TasksContextProvider>
  )
}

export default App
