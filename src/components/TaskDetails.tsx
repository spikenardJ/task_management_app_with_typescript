import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Button } from "react-bootstrap";

const TaskDetails = () => {
    const {id} = useParams<{ id: string}>()
    const { tasks, deleteTask } = useTaskContext()!
    const navigate = useNavigate()
    const task = tasks.find((t) => t.id === id)

    if (!task) return <p>Task not found!</p>

    const handleDelete = () => {
        deleteTask(task.id);
        navigate("/")
    }

    return (
        <div id="task-details">
            <h2>{task.title}</h2>
            <br />
            <p>{task.description}</p>
            <br />
            <div id="details-buttons">
                <Button id="edit-task-btn" onClick={() => navigate(`/task/new?id=${task.id}`)}>Edit Task</Button>
                <br />
                <Button id="delete-task-btn" onClick={handleDelete}>Delete Task</Button>
                <br /><br />
                <Button id="return-d-board" onClick={() => navigate("/")}>
                    Return to Dashboard
                </Button>
            </div>
        </div>
    )
}
export default TaskDetails;