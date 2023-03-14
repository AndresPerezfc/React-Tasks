import React from 'react'

function TaskList({tasks}) {

    if(tasks.length === 0){
        return <h1>No hay tareas aun</h1>
    }

  return (
    <div>
        {tasks.map((task) => (
            <TaskCard key={task.id}></TaskCard>
        ))}
    </div>
  )
}

export default TaskList
