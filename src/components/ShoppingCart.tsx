import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/formatPrice";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartQuantity, cartItems } = useShoppingCart();

  return (
    // bootstrap sidebar component for the sliding side panel
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{cartQuantity === 0 ? "Your Cart is Empty" : "Cart"}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
