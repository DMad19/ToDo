import React from 'react'
import Task from './Task'
import { UseTaskContext } from '../context'

function Tasklist() {
  const {tasks} = UseTaskContext()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-start'>
        {
          tasks && tasks.map(task=>(
            <Task
              key={task.taskId}
              taskId={task.taskId}
              title={task.title} 
              description={task.description}
              status={task.status}
              deadline= {task.deadline}
              subTasks= {task.subTasks}
            />
          ))
        }
    </div>
  )
}

export default Tasklist