import { Card } from "react-bootstrap";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => {
  return (
    <div>
      <Card key={id}>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="360px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{price}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
