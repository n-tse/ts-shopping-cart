import { Container } from "react-bootstrap";

const OrderSuccess = () => {
  return (
    <Container style={{ height: "50vh" }}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100 display-6 text-center">
        <div>Your order has been placed.</div>
        <div style={{ margin: "1rem" }}>
          Thank you for shopping at{" "}
          <span style={{ color: "#516b3f", fontWeight: 600 }}>West Buy!</span>
        </div>
      </div>
    </Container>
  );
};

export default OrderSuccess;
