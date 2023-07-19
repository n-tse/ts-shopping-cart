import { Card, Button, Form } from "react-bootstrap";
import { formatPrice } from "../utils/formatPrice";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState, useEffect } from "react";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  imgUrl,
}) => {
  const { getItemQuantity, updateCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    if (quantity === 0) {
      setSelectedQuantity(1);
    }
  }, [quantity]);

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedQuantity(parseInt(event.target.value));
  };

  return (
    <div>
      <Card key={id} className="mb-4 h-100">
        <Card.Img
          variant="top"
          src={`ts-shopping-cart${imgUrl}`}
          height="360px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <div>
              <div className="fs-2">{name}</div>
              <div className="fs-5 text-muted">{description}</div>
            </div>
            <span className="ms-2 text-muted">{formatPrice(price)}</span>
          </Card.Title>
          <div className="m-auto">
            <Form.Select
              className="mb-2"
              style={{ width: "130px", margin: "auto" }}
              value={selectedQuantity}
              onChange={handleQuantityChange}
            >
              {quantity !== 0 && <option value="0">0(Delete)</option>}
              {[...Array(10)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </Form.Select>
            <Button
              style={{ width: "130px" }}
              variant={
                quantity === 0
                  ? "primary"
                  : quantity !== selectedQuantity
                  ? "secondary"
                  : "success"
              }
              disabled={quantity !== 0 && quantity === selectedQuantity}
              onClick={() => updateCartQuantity(id, selectedQuantity)}
            >
              {quantity === 0
                ? "Add to Cart"
                : quantity !== selectedQuantity
                ? "Update Cart"
                : "Added to Cart"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
