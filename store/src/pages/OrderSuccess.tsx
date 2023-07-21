import { Container, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <Container style={{ height: "50vh" }}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100 display-6 text-center">
        <div>Your order has been placed.</div>
        <div style={{ margin: "1rem" }}>
          Thank you for shopping at{" "}
          <span style={{ color: "#516b3f", fontWeight: 600 }}>West Buy!</span>
        </div>
        <Button
          variant="success"
          size="lg"
          className="p-0 overflow-hidden mt-3"
        >
          <Nav.Link
            to="/ts-shopping-cart/"
            as={NavLink}
            style={{ padding: "0.5rem 1rem" }}
          >
            Return to Home
          </Nav.Link>
        </Button>
      </div>
    </Container>
  );
};

export default OrderSuccess;
