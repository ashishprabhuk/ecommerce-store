import React, { useContext } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import "./Products.css";
import { Store } from "../ContextApi/context";

const Products = () => {
  const { products, cart, setCart, showAlert } = useContext(Store);

  const addToCart = (productId) => {
    setCart([...cart, products.find((product) => product.id === productId)]);
    if(showAlert) alert("Added to Cart");
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    alert("Removed from Cart");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="products">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>
                {product.title.length > 17
                  ? product.title.substring(0, 17) + "..."
                  : product.title}
              </Card.Title>
              <Card.Text>${product.price}</Card.Text>
              {cart.includes(product) ? (
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button variant="dark" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Products;
