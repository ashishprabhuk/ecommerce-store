import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
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
                    <Nav className="m-auto display-flex gap-2 justify-center items-center">
                        <Nav.Link href="/" className="d-flex justify-center  gap-2" ><IoHome style={{ fontSize: '24px' }} /><h6>Home</h6></Nav.Link>
                        <Nav.Link href="/products" className="d-flex justify-center  gap-2"><FaBagShopping style={{ fontSize: '24px' }}/><h6>Products</h6></Nav.Link>
                        <Nav.Link href="/cart" className="d-flex justify-center  gap-2"><FaShoppingCart style={{ fontSize: '24px' }}/><h6>Cart</h6></Nav.Link>
                    </Nav>
                    <Nav className="display-flex gap-2">
                    <Button variant="primary px-4" href='/login'>SignIn</Button>
                    <Button variant="secondary px-4" href='/signup'>Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;