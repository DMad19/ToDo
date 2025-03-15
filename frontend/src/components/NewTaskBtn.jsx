import React from 'react'
import { UseFormVisibilityContext } from '../context'

function NewTaskBtn() {
    const {toggleInputForm} = UseFormVisibilityContext()
  return (
    <button onClick={toggleInputForm}>➕</button>
  )
}

export default NewTaskBtn