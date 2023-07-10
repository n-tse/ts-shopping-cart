import { Card } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";

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
      <Card key={id} className="mb-4">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="360px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatPrice(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
