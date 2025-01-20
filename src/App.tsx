import TaskDashboard from "./components/TaskDashboard";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import TaskContextProvider from "./context/TaskContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./components/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./AuthenticationGuard";
import ContentPage from "./components/ContentPage";
import "./Style.css"

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <>
    <TaskContextProvider>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
          <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
          <Route path="/content" element={<AuthenticationGuard component={ContentPage} />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/task-dashboard" element={<TaskDashboard/>}/>
          <Route path="/task/:id" element={<TaskDetails/>} />
          <Route path="/task/new" element={<TaskForm/>} />
          <Route path="*" element={<Navigate to={"/"}/>} /> 
        </Routes>
      {/* </BrowserRouter> */}
    </TaskContextProvider>
    </>
  )
}

export default App;