import React from 'react'
import Task from './Task'
import { UseTaskContext } from '../context'

function Tasklist() {
  const {tasks} = UseTaskContext()
  return (
    <div>
        {
          tasks && tasks.map(task=>(
            <Task
              key={task.id}
              id={task.id}
              title={task.title} 
              description={task.description}
              deadline= {task.deadline}
              subtasks= {task.subtasks}
            />
          ))
        }
    </div>
  )
}

export default Tasklist