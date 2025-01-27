import { useTaskContext } from "../../../context/TaskContext";
import { Task } from "../../../types";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../navbar/NavBar";
import taskListImage from "../../../images/task-list-image.jpeg"
import { Button, Container, Col, Row } from "react-bootstrap";
import LoginButton from "../../login/LoginButton";
import LogoutButton from "../../login/LogoutButton";

const TaskDashboard = () => {
    const navigate = useNavigate();
    const { tasks, markTaskComplete } = useTaskContext()!

    return (
        <>
            <Container>
                <Col>
                    <NavBar />
                </Col>
                <Col>
                    <Row>
                        <h2>Welcome to the</h2>
                        <h1>Task Management App Dashboard!</h1>
                        <div id="tl-image">
                            <img id="task-list-image" src={taskListImage} alt="Task List" />
                            <br />
                        </div>
                        <div>
                            <p><small>Click Task to Edit</small></p>
                        </div>
                        <div id="tasks">
                            <div className="wrapper d-flex gap-2 mb-2">
                                <Button id="new-task-btn" variant="outline-secondary" className="px-4" onClick={() => navigate("/task/new")}><span>Create New Task</span></Button>
                            </div>
                    
                            <ul>
                                {tasks.map((task: Task) => (
                                    <li key={task.id} style={{textDecoration: task.completed ? "line-through" : "none"}}>
                                        <Link id="task-link" to={`/task/${task.id}`}>{task.title}</Link>
                                        <br /><br />
                                        {task.description}
                                        <br /><br />
                                        {!task.completed && (
                                            <Button id="m-complete-btn" onClick={() => markTaskComplete(task.id)}>Mark Complete</Button>
                                            
                                        )}
                                        <br />
                                    </li>
                                ))}
                            </ul>
                            <br /><br />
                            <h3>Thank you!</h3>
                        </div>
                    </Row>
                    <Row>
                        <LoginButton />
                        <LogoutButton />
                    </Row> 
                </Col>
            </Container>
        </>
    )
}

export default TaskDashboard;