import React from 'react'
import { UseFormVisibilityContext } from '../context'

function NewTaskBtn() {
    const {toggleInputForm} = UseFormVisibilityContext()
  return (
    <button onClick={toggleInputForm} className='fixed bottom-1/12 right-1/12 border-amber-600 border-4 rounded-xl p-1'>➕</button>
  )
}

export default NewTaskBtn