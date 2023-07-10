import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        {/* margin end auto */}
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2.5rem",
            width: "2.5rem",
            position: "relative"
          }}
        >
          <BsCart3 style={{ flexShrink: 0 }} />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width:"1.2rem", height: "1.2rem", position: "absolute", bottom: 0, right: 0, transform: "translate(40%, 40%)", fontSize:"0.8rem"}}>2</div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
