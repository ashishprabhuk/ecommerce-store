import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import './Home.css';
import women from '../assets/women.jpg';
import kids from '../assets/kidss.avif';
import men from '../assets/men.png';
import img1 from '../assets/slide1.png';

const Home = () => {
  return (
    <Container className="my-5">
      <Carousel className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x300/3498db/ffffff?text=Online+Shopping"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x300/1abc9c/ffffff?text=Free+Delivery"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/600x300/e74c3c/ffffff?text=Coupon+Codes"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="d-flex flex-wrap">
        <Card className="flex-grow-1 mx-2 my-2 text-center">
          <Card.Body>
            <Card.Img src={men} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Men</Card.Title>
            <Card.Text>Click to view Men products.</Card.Text>
            <Link to="/products">
              <Button variant="dark">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="flex-grow-1 mx-2 my-2  text-center">
          <Card.Body>
            <Card.Img src={women} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Women</Card.Title>
            <Card.Text>Click to view Women products.</Card.Text>
            <Link to="/products">
              <Button variant="dark">View Products</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card className="flex-grow-1 mx-2 my-2  text-center">
          <Card.Body>
            <Card.Img src={kids} className="mb-2" style={{ height: "220px", objectFit: "cover" }} />
            <Card.Title>Kids</Card.Title>
            <Card.Text>Click to view Kids products.</Card.Text>
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
