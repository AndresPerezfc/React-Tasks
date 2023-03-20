

function TaskCard({task, deleteTask}){

    function mostrarAlerta(){
        alert(task.id)
    }
    return (
        <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <button onClick={() => deleteTask(task.id)}>
                    Eliminar Tarea
                </button>
            </div>
    )
}


export default TaskCard