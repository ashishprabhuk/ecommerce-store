import React, { useState } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Cart</h2>
      <ListGroup>
        {cartItems.map(item => (
          <ListGroup.Item key={item.id} className="cart-item">
            <div className="item-info">
              <span>{item.name}</span>
              <span>${item.price * item.quantity}</span>
            </div>
            <div className="quantity">
              <Button variant="outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
              <span>{item.quantity}</span>
              <Button variant="outline-secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
              <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="total">
        Total Price: ${calculateTotal()}
      </div>
    </Container>
  );
};

export default Cart;
