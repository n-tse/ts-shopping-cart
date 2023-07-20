import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/formatPrice";
import products from "../data/products.json";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartQuantity, cartItems } = useShoppingCart();

  // const checkoutCart = async () => {
  //   await fetch('http://localhost:5001/checkout', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ items: cartItems })
  //   }).then((response) => {
  //     return response.json();
  //   }).then((response) => {
  //     if (response.url) {
  //       // forwards user to stripe
  //       window.location.assign(response.url);
  //     }
  //   })
  // }

  return (
    // bootstrap sidebar component for the sliding side panel
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {cartQuantity === 0 ? "Your Cart is Empty" : "Cart"}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fs-5">
            Total:{" "}
            <span className="fw-bold">
              {formatPrice(
                cartItems.reduce((totalPrice, cartItem) => {
                  const product = products.find(
                    (item) => item.id === cartItem.id
                  );
                  return totalPrice + cartItem.quantity * (product?.price || 0);
                }, 0)
              )}
            </span>
          </div>
          {cartQuantity !== 0 && (
            <Button
              variant="success"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.25rem",
              }}
              // onClick={checkoutCart}
            >
              <MdOutlineShoppingCartCheckout
                style={{ width: "24px", height: "100%", marginRight: "0.5rem" }}
              />
              Checkout
            </Button>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
