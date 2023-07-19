import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        {/* margin end auto */}
        <Nav className="me-auto d-flex align-items-center">
          <i className="fas fa-tag me-3 fs-2" style={{ color: "#516b3f" }}></i>
          <Nav.Link to="/ts-shopping-cart" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "2.5rem",
            width: "2.5rem",
            position: "relative",
          }}
        >
          <BsCart3 style={{ flexShrink: 0 }} />
          {cartQuantity !== 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(40%, 40%)",
                fontSize: "0.8rem",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
