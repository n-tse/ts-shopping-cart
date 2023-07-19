import { Container, Button, Nav } from "react-bootstrap";
import backgroundImage from "/images/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
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
              Discover a wide range of products at affordable prices. Shop now
              and enjoy a seamless shopping experience.
            </p>
            <Button variant="outline-secondary" size="lg">
              <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
                Shop Now
              </Nav.Link>
            </Button>
          </Container>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="pt-1 pb-4">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 fs-3">
                  <i className="fas fa-tag me-3"></i>West Buy
                </h6>
                <p>
                  Welcome to West Buy, your go-to destination for quality
                  products at affordable prices. 
                  Explore our wide range of products and discover something
                  special today.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a className="text-reset">
                    <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
                      Electronics
                    </Nav.Link>
                  </a>
                </p>
                <p>
                  <a className="text-reset">
                    <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
                      Fashion
                    </Nav.Link>
                  </a>
                </p>
                <p>
                  <a className="text-reset">
                    <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
                      Home &amp; Kitchen
                    </Nav.Link>
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    <Nav.Link to="/ts-shopping-cart/store" as={NavLink}>
                      Beauty &amp; Health
                    </Nav.Link>
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Shipping &amp; Returns
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-home me-3"></i>
                  <p className="mb-0">123 Main Street, New York, NY 10012</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-envelope me-3"></i>
                  <p className="mb-0">support@westbuy.com</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-phone me-3"></i>
                  <p className="mb-0">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      {/* Footer */}
    </>
  );
};

export default Home;
