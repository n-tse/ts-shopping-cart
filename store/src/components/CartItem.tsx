import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/products.json";
import { formatPrice } from "../utils/formatPrice";

type CartItemProps = {
  id: string;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const product = products.find((item) => item.id === id);
  if (product == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        style={{ width: "200px", height: "140px", objectFit: "cover", borderRadius: "8px" }}
      />
      <div className="me-auto">
        <div style={{ fontWeight: 600 }}>{product.name}</div>
        <div style={{ fontSize: "0.8rem" }}>Quantity: {quantity}</div>
        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          Price: {formatPrice(product.price)}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{formatPrice(product.price * quantity)}</div>
        <Button variant="outline-secondary" style={{ fontSize: "0.8rem", padding: "2px 6px", display: "flex", alignItems: "center", width: "fit-content", marginLeft: "auto" }} onClick={() => removeFromCart(product.id)}>Delete</Button>
      </div>
    </Stack>
  );
};

export default CartItem;
