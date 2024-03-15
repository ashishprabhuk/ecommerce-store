import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import './Home.css'; // Import custom CSS file

const Home = () => {
  return (
    <Container className="mt-5">
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/online-shopping-logo-design-template-digital-shopping-logo-mouse-cursor-cart-concepts_502185-286.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710460800&semt=ais"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://png.pngtree.com/png-vector/20230228/ourmid/pngtree-80-off-coupon-with-codesqr-code-coupon-code-percentage-badge-vector-png-image_49888972.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="card-container">
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is a card on the home page. Click the button to view products.
            </Card.Text>
            <Link to="/products">
              <Button variant="primary">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              This is another card on the home page. Click the button to view products.
            </Card.Text>
            <Link to="/products">
              <Button variant="primary">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              This is the third card on the home page. Click the button to view products.
            </Card.Text>
            <Link to="/products">
              <Button variant="primary">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
