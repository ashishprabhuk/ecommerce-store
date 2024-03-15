import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Card, Button } from 'react-bootstrap';
import './Home.css';
import women from '../assets/women.jpg'
import kids from '../assets/kidss.avif'
import men from '../assets/men.png'
import img1 from '../assets/slide1.png'

const Home = () => {
  return (
    <Container className="mt-5">
      <Carousel className="mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Carousel.Item>
        <img
          className="d-block w-100 mb-2"
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
      <div className="card-container">
        <Card>
            <Card.Body>
                <Card.Img src={men} className='mb-2'/>
                <Card.Title>Men</Card.Title>
                <Card.Text>
                    Click to view Men products.
                </Card.Text>
                <Link to="/products">
                    <Button variant="primary">View Products</Button>
                </Link>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Img src={women} className='mb-2' /> 
                <Card.Title>Womens</Card.Title>
                <Card.Text>
                    Click to view Womens products.
                </Card.Text>
                <Link to="/products">
                    <Button variant="primary">View Products</Button>
                </Link>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Img src={kids} className='mb-2' style={{height: '220px' }}/> 
                <Card.Title>kids</Card.Title>
                <Card.Text>
                    Click to view Kids products.
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
