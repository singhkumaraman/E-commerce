import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Product from "./Product";
import Contact from "./Contact";
import Cart from "./Cart";
import Error from "./Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
