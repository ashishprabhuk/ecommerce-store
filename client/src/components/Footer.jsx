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
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      {showFooter && (
        <Navbar bg="dark" variant="dark" className='p-1'>
          <Container>
            <Navbar.Brand href="/">FakeStore</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Developed by <a href="https://ashishprabhuk.me/">Ashish Prabhu K</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Footer;
