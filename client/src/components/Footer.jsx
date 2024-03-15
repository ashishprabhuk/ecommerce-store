import React, { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showFooter && (
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Developed by <a href="https://ashishprabhuk.me/">Ashish Prabhu K</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Footer;
