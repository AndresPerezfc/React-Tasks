import Tasklist from './Tasklist'
import TaskForm from './TaskForm'
import { tasks as data} from './task'
import {useState, useEffect} from 'react'
function App(){

  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, []);

    function createTask(taskTitle){
      setTasks([...tasks, {
        title: taskTitle,
        id: tasks.length,
        description: 'Tarea agregada',
      }])
    }

   return (
     <>

    <TaskForm createTask={createTask}/>
    <Tasklist tasks={tasks}/>
     </>
   )
}

export default App