import { useState } from 'react'
import './App.css'
import { NewTaskBtn, Tasklist } from './components/index'
import {Inputform} from './components/index' 
import {FormVisibilityContextProvider} from './context/index'

function App() {
  const [formVisible,setFormVisible] = useState(false)
  function toggleInputForm(){
    setFormVisible(prev=>!prev)
  }
  return (
    <FormVisibilityContextProvider value={{isFormVisible:formVisible,toggleInputForm}}>
      <Inputform/>
      <Tasklist/>
      <NewTaskBtn/>
    </FormVisibilityContextProvider>
  )
}

export default App
