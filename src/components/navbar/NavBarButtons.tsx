import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";

const NavBarButtons: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Container>
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </Container>
  );
};

export default NavBarButtons;