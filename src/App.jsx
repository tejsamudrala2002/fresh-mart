import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Search from "./navcomponents/Search";
import Login from "./navcomponents/Login";
import About from "./navcomponents/About";
import Cart from "./navcomponents/Cart";
import Orders from "./navcomponents/Orders";
import Dairyproducts from "./navcomponents/Dairyproducts";

function App() {
    const cartItems = useSelector((state) => state.cart || []); // handles missing cart safely

  return (
    <div className="main">
      <BrowserRoute>
        {/* HEADER SECTION */}
        <header className="header">
          <h2>
            Fresh<span className="fresh1">Mart</span>
          </h2>
          <Search />
        </header>

        {/* NAVBAR SECTION */}
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dairyproducts">Dairy</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">
            Cart <span>{cartItems.length}</span>
          </Link>
          <Link to="/">Logout</Link>
        </nav>

        {/* ROUTES SECTION */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/dairyproducts" element={<Dairyproducts />} />
        </Routes>

        {/* FOOTER SECTION */}
        <footer>
          <div className="footer-container">
            <div className="footer-section">
              <h3>Fresh Mart</h3>
              <p>Bringing fresh groceries to your door.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/cart">Cart</a>
              <a href="/orders">Orders</a>
            </div>
            <div className="footer-section social-icons">
              <h3>Follow Us</h3>
              <a href="#">🌐</a>
              <a href="#">📘</a>
              <a href="#">📸</a>
            </div>
          </div>
          <p className="copyright">
            © {new Date().getUTCFullYear()} Fresh Mart | All Rights Reserved
          </p>
        </footer>
      </BrowserRoute>
    </div>
  );
}
export default App;
