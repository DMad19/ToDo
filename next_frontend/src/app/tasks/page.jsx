"use client"
import {useState,useEffect,useMemo} from 'react'
import { NewTaskBtn, Tasklist, Header, Inputform } from '../components/index.js'
import {FormVisibilityContextProvider, TasksContextProvider} from '../context/index.js'
import UseGetTasks from '../hooks/useGetTasks.js'
import UseCreateTask from '../hooks/useCreateTask.js'
import UseModifyTask from '../hooks/useModifyTask.js'
import UseDeleteTask from '../hooks/useDeleteTask.js'

function TasksPage() {
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

export default TasksPage