import { Col, Container } from "react-bootstrap";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Col>
      <h2>Welcome to the</h2>
      <h1>Task Management App Homepage!</h1>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;