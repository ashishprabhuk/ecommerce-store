import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" style={{ fontSize: '24px' }}>FakeStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="/"><IoHome style={{ fontSize: '24px' }}/></Nav.Link>
                        <Nav.Link href="/cart"><FaShoppingCart style={{ fontSize: '24px' }}/></Nav.Link>
                    </Nav>
                    <Nav>
                    <Button variant="primary px-4 mx-3" href='/login'>SignIn</Button>
                    <Button variant="secondary px-4" href='/signup'>Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;