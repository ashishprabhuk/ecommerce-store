import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Container, Row, Col, ListGroup, Button, Card } from "react-bootstrap";
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
                <Row>
                  <Col>
                    <Card className="card-cart">
                      <div className="cart-item-content d-flex align-items-center">
                        <Card.Img
                          className="cart-item-image"
                          src={product.image}
                        />
                        <div className="cart-item-details px-2 flex-grow-1">
                          <Card.Title className="cart-item-title">{product.title}</Card.Title>
                          <Card.Text>
                            <strong>${product.price}</strong>
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                    <div className="quantity">
                      <Button
                        variant="outline-secondary"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        -
                      </Button>
                      <span className="px-2">{quantities[product.id] || 1}</span>
                      <Button
                        variant="outline-secondary"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() =>
                        setCart(cart.filter((item) => item.id !== product.id))
                      }
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="total">Total Price: ${total}</div>
        </>
      ) : (
        <>
          <h2 className="text-center">Cart is Empty</h2>
          <Link
            to="/products"
            className="d-flex justify-content-center mt-3 text-decoration-none"
          >
            <Button variant="dark" className="text-decoration-none">Add Products</Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Cart;
