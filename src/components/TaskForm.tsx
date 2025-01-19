import { useNavigate, useSearchParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const TaskForm = () => {
    const { addTask, updateTask, tasks } = useTaskContext()!

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const id = searchParams.get("id")
    const existingTask = tasks.find((t) => t.id === id)

    const [title, setTitle] = useState(existingTask?.title || "")
    const [description, setDescription] = useState(existingTask?.description || "")

    useEffect(() => {
        if (existingTask) {
            setTitle(existingTask.title)
            setDescription(existingTask.description)
        }
    }, [existingTask])

    const handleSubmit =(e: React.FormEvent) => {
        e.preventDefault()
        const newTask = {
            id: id || Date.now().toString(),
            title: title, // shorthand = just title, which would read title: title, (if both are the same)
            description: description, // same as above
            completed: false
        }
        if (existingTask) {
            updateTask(newTask)
        } else {
            addTask(newTask)
        }
        navigate("/")
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <h1>Add/Edit Task</h1>
            <br /><br />
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter Task" />
            <br /><br />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Enter Details" />
            <br /><br />
            <div className="wrapper d-flex gap-2 mb-2">
                <Button id="form-submit-btn" type="submit"><span>Save Task</span></Button>
            </div>
        </form>
    )
}

export default TaskForm;