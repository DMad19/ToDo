import React from 'react'
import Task from './Task'

function Tasklist() {
  return (
    <div>
        <Task 
          title="task 1" 
          description="write the code to make the drop down work for each task"
          deadline="16/03/2025"
          subtasks= {['a','b','c']}
        />
        <Task 
          title="task 2" 
          description="write the code to make the drop down work for each task"
          deadline="16/03/2025"
          subtasks= {['a','b','c']}
        />
    </div>
  )
}

export default Tasklist