import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Task Management App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
    {isAuthenticated && (
      <>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar m-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Task Dashboard
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Profile
            </NavLink>
            <NavLink
              to="/protected"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Protected Personal Notes
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </>
    )}
  </Navbar>
);
};

export default NavBar;