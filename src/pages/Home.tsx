import { Container, Button, Nav } from "react-bootstrap";
import backgroundImage from "../../public/images/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero-section">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="overlay">
        <Container className="w-75">
          <h1 className="hero-title">Welcome to West Buy</h1>
          <p className="hero-description">
            Discover a wide range of products at affordable prices. Shop now and
            enjoy a seamless shopping experience.
          </p>
          <Button variant="outline-secondary" size="lg">
            <Nav.Link to="/store" as={NavLink}>
              Shop Now
            </Nav.Link>
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
