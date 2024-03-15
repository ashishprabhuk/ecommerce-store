import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (productId) => {
    console.log('Product added to cart:', productId);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="products">
        {products.map(product => (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
            <Card.Title>{product.title.length > 17 ? product.title.substring(0, 17) + '...' : product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="dark" onClick={() => addToCart(product.id)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Products;
