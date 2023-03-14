import { tasks } from "./task";

function TaskCard ({task}){
    return(
        <div>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
        </div>
    )
}

export default TaskCard;