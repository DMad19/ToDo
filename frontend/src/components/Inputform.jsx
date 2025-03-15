import React from 'react'
import { UseFormVisibilityContext } from '../context'

function Inputform() {
    const {isFormVisible,toggleInputForm} = UseFormVisibilityContext()
    function handleSubmit(e){
        e.preventDefault()
        toggleInputForm()
    }
  return (
    <div className={isFormVisible?"":"invisible"}>
        <label htmlFor="title">title</label><br />
        <input type="text" name="title" id="title" /><br />
        <label htmlFor="description">description</label><br />
        <textarea name="description" id="description"></textarea><br />
        <label htmlFor="deadline">Select Deadline</label><br />
        <input type="date" name="deadline" id="deadline" />
        <div>
            <input type="text" name="subtask" id="subtask" placeholder='subtask' />
            <button>+</button>
        </div>
        <div>

        </div>
        <button type='submit' onClick={handleSubmit}>save</button>
    </div>
  )
}

export default Inputform