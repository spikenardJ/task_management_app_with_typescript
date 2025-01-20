import { Col, Container } from "react-bootstrap";
import NavBar from "../navbar/NavBar";
import NavBarButtons from "../navbar/NavBarButtons";

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Col>
      <NavBar />
      </Col>
        <h1>Task Management App</h1>
        {children}
      <footer>
        <NavBarButtons />
      </footer>
    </Container>
  );
};

export default PageLayout;