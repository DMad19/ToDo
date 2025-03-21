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
              key={task.taskId}
              taskId={task.taskId}
              title={task.title} 
              description={task.description}
              deadline= {task.deadline}
              subTasks= {task.subTasks}
            />
          ))
        }
    </div>
  )
}

export default Tasklist