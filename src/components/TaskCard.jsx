import { useContext } from "react";
import { TaskContext } from "../context/TaskContent";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
