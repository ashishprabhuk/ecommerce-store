import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import { Store } from "./ContextApi/context";

function App() {
  const { tokenExists, isLoggedIn } = useContext(Store);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!tokenExists && location.pathname !== '/login' && location.pathname !== '/signup') {
      navigate("/login");
    }
  }, [navigate, tokenExists, location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
