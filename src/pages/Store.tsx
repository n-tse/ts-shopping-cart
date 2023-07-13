import React, { Suspense } from "react";
import { Row, Col, Container } from "react-bootstrap";
import products from "../data/products.json";
// import ProductCard from '../components/ProductCard';
const ProductCard = React.lazy(() => import("../components/ProductCard"));

const Store = () => {
  return (
    <Container>
      <h1>Store</h1>
      {/* specifies # of columns and gap size for different screen sizes */}
      <Row lg={3} md={2} xs={1} className="g-3">
        {products.map((product) => {
          return (
            // <Col key={product.id}><ProductCard {...product} /></Col>
            <Suspense fallback={<div>Loading...</div>}>
              <Col key={product.id}>
                <ProductCard {...product} />
              </Col>
            </Suspense>
          );
        })}
      </Row>
    </Container>
  );
};

export default Store;
