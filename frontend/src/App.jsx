import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { NewTaskBtn, Tasklist, Header, Inputform } from './components/index'
import {FormVisibilityContextProvider, TasksContextProvider,AccessTokenProvider} from './context/index'
import UseGetTasks from './hooks/useGetTasks'
import UseCreateTask from './hooks/useCreateTask'
import UseModifyTask from './hooks/useModifyTask'
import UseDeleteTask from './hooks/useDeleteTask'

function App() {
  
  const [formVisible,setFormVisible] = useState(false)
  const [tasks,setTasks] = useState([])
  const [taskToEdit,setTaskToEdit] = useState(null)
  const [accessToken,setAccessToken] = useState(null)

  function toggleInputForm(){
    setFormVisible(prev=>!prev)
  }

  useEffect(()=>{
    async function fetchTasks(){
      setTasks(await UseGetTasks())
    }
    fetchTasks()
  },[])

  async function createTask(task){
      await UseCreateTask(task)
      setTasks(await UseGetTasks())
  }

  async function updateTask(updatedtask){
    await UseModifyTask(updatedtask)
    setTasks(await UseGetTasks())
  }

  async function deleteTask(id){
    await UseDeleteTask(id)
    setTasks(await UseGetTasks())
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

  const refreshAccessToken = ()=>{
    // generate accesstoken
    setAccessToken()
  }

  return (
    <AccessTokenProvider value={{accessToken,refreshAccessToken}}>
      <TasksContextProvider value={taskContextValue}>
        <FormVisibilityContextProvider value={{isFormVisible:formVisible,toggleInputForm}}>
          <Header/>
          <Inputform/>
          <Tasklist/>
          <NewTaskBtn/>
        </FormVisibilityContextProvider>
      </TasksContextProvider>
    </AccessTokenProvider>
  )
}

export default App
