import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Container, ListGroup, Button, Card } from "react-bootstrap";
import "./Cart.css";
import { Store } from "../ContextApi/context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(Store);
  const [total, setTotal] = useState();
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((product) => {
      const quantity = quantities[product.id] || 1;
      totalPrice += Number(product.price) * quantity;
    });
    setTotal(totalPrice.toFixed(2));
  }, [cart, quantities]);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        {cart.length !== 0 ? "Cart - " + cart.length : ""}
      </h2>
      {cart.length !== 0 ? (
        <>
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item key={product.id} className="cart-item">
                <Card
                  key={product.id}
                  className="card-cart w-50 d-flex flex-row gap-3"
                >
                  <Card.Img
                    variant="top"
                    className="w-25"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      <strong>${product.price}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <div className="quantity">
                  <Button
                    className="d-flex justify-content-center align-items-center"
                    style={{ textAlign: "center" }}
                    variant="outline-secondary"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </Button>
                  <span className="px-2">{quantities[product.id] || 1}</span>
                  <Button
                    className="d-flex justify-content-center align-items-center"
                    style={{ textAlign: "center" }}
                    variant="outline-secondary"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      setCart(cart.filter((item) => item.id !== product.id))
                    }
                  >
                    <FaTrash style={{ textAlign: "center" }} />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="total">Total Price: ${total}</div>
        </>
      ) : (
        <>
          <h2 className="text-center">Cart is Empty</h2>
          <Link to='/products' className="d-flex justify-content-center align-items-center mt-3">
            <Button variant='dark'>Add Products</Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Cart;
