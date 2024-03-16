import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { FaBagShopping } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext, useState } from "react";
import { Store } from "../ContextApi/context";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(Store);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: "26px" }}>
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            FakeStore
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto display-flex gap-3 justify-center items-center">
            <Link
              to="/"
              className="d-flex justify-content-center align-items-center gap-2 cursor-pointer text-decoration-none"
              style={{ color: "#aaaaaa" }}
            >
              <IoHome style={{ fontSize: "24px" }} />
              <h6 className="cursor-pointer">Home</h6>
            </Link>
            <Link
              to="/products"
              className="d-flex justify-content-center align-items-center gap-2 text-decoration-none"
              style={{ color: "#aaaaaa" }}
            >
              <FaBagShopping style={{ fontSize: "24px" }} />
              <h6 className="cursor-pointer">Products</h6>
            </Link>

            <Link
              to="/cart"
              className="d-flex justify-content-center align-items-center gap-2 text-decoration-none"
              style={{ color: "#aaaaaa" }}
            >
              <FaShoppingCart style={{ fontSize: "24px" }} />
              <h6 className="cursor-pointer">
                Cart {cart.length !== 0 ? "(" + cart.length + ")" : ""}
              </h6>
            </Link>
          </Nav>
          <Nav className="display-flex gap-2">
            <Link to="/login">
              <Button variant="primary px-4">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary w-100 px-4">SignUp</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
