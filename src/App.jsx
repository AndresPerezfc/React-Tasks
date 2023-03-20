import Tasklist from './Tasklist'
import TaskForm from './TaskForm'
import { tasks as data} from './task'
import {useState, useEffect} from 'react'
function App(){

  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, []);

    function createTask(task ){
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description, 
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