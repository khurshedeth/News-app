import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NewsNav = ({ setCategory }) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className=" badge bg-light text-dark fs-4">
            NewsMag
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory("Technology")}>
              Technology
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("Business")}>
              Business
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("Health")}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory("Science")}>Science</Nav.Link>
            <Nav.Link onClick={() => setCategory("Sports")}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategory("Entertainment")}>
              Entertainment
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NewsNav;
