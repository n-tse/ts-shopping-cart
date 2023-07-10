import { Row, Col } from 'react-bootstrap';
import products from "../data/products.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      {/* specifies # of columns and gap size for different screen sizes */}
      <Row lg={3} md={2} xs={1} className='g-3'>
        {products.map(product => {
          return (
            <Col>{JSON.stringify(product)}</Col>
          )
        })}
      </Row>
    </>
  );
};

export default Store;
