import { createContext, ReactNode, useContext, useState } from "react";
import { Task } from "../types";

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void,
    updateTask: (updatedTask: Task) => void,
    deleteTask: (taskId: string) => void,
    markTaskComplete: (taskId: string) => void
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export const useTaskContext = () => {
    const context = useContext(TaskContext)
    return context
}

const TaskContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])

    // add task helper
    const addTask = (task: Task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    // update task helper
    const updateTask = (updatedTask: Task) => {
        setTasks((prevTasks) =>
        prevTasks.map((task) => task.id === updatedTask.id ? updatedTask : task)
        )
    }

    // delete task helper
    const deleteTask = (taskId: string) => {
        setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
        )
    }

    // mark task complete helper
    const markTaskComplete = (taskId: string) => {
        setTasks((prevTasks => 
            prevTasks.map((task) => task.id === taskId ? {...task, completed: true} : task)
        ))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, markTaskComplete }}>
            { children }
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;