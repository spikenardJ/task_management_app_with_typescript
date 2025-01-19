import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import TaskContextProvider from "./context/TaskContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Style.css"

const App = () => {
  return (
    <>
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskDashboard/>}/>
          <Route path="/task/:id" element={<TaskDetails/>} />
          <Route path="/task/new" element={<TaskForm/>} />
          <Route path="*" element={<Navigate to={"/"}/>} /> 
          {/* "*" means if user goes to page that doesn't exist we are redirecting them to the dashboard "/" */}
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
    </>
  )
}

export default App;