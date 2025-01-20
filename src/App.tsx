import TaskDashboard from "./components/pages/task/TaskDashboard";
import TaskDetails from "./components/pages/task/TaskDetails";
import TaskForm from "./components/pages/task/TaskForm";
import TaskContextProvider from "./context/TaskContext";
import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./components/pages/HomePage";
import CallbackPage from "./auth0/CallbackPage";
import ProtectedPage from "./components/pages/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/pages/ProfilePage";
import AuthenticationGuard from "./auth0/AuthenticationGuard";
import ContentPage from "./components/pages/ContentPage";
import "./Style.css"

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <>
    <TaskContextProvider>
      <Routes>
        <Route path="/" element={<TaskDashboard/>}/>
          <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
          <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
          <Route path="/content" element={<AuthenticationGuard component={ContentPage} />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/task/:id" element={<TaskDetails/>} />
          <Route path="/task/new" element={<TaskForm/>} />
          <Route path="*" element={<Navigate to={"/"}/>} /> 
        </Routes>
    </TaskContextProvider>
    </>
  )
}

export default App;