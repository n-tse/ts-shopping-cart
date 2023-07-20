import { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const { closeCart, cartQuantity, cartItems } = useShoppingCart();

  const checkoutCart = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://ts-shopping-cart-server.onrender.com/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: cartItems }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          // forwards user to stripe
          window.location.assign(data.url);
        }
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after the response is received
    }
  };

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
              onClick={checkoutCart}
              disabled={isLoading} // prevents button from being clicked multiple times while waiting for response
            >
              {isLoading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <MdOutlineShoppingCartCheckout
                    style={{
                      width: "24px",
                      height: "100%",
                      marginRight: "0.5rem",
                    }}
                  />
                  Checkout
                </>
              )}
            </Button>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
