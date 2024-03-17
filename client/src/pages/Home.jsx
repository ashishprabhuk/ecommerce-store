import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Card, Button, Image } from 'react-bootstrap';
import './Home.css';
import women from '../assets/women.jpg';
import kids from '../assets/kidss.avif';
import men from '../assets/men.png';

const Home = () => {
  return (
    <Container className="my-5">
      <Carousel className="mb-4" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            
            src="https://via.placeholder.com/600x300/7286D3/ffffff?text=50%+Discount"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x300/FF7878/ffffff?text=Free+Delivery"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x300/FFD966/ffffff?text=Free+Coupons"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="d-flex flex-wrap">
        <Card className="flex-grow-1 mx-2 my-2 text-center">
          <Card.Body>
            <Card.Img src={men} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Men</Card.Title>
            <Link to="/products">
              <Button variant="dark">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="flex-grow-1 mx-2 my-2  text-center">
          <Card.Body>
            <Card.Img src={women} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Women</Card.Title>
            <Link to="/products">
              <Button variant="dark">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="flex-grow-1 mx-2 my-2  text-center">
          <Card.Body>
            <Card.Img src={kids} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Kids</Card.Title>
            <Link to="/products">
              <Button variant="dark">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Home;
