import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Cars, Contact, Home, News, Shop } from "./pages";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/news" exact element={<News />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cars" exact element={<Cars />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
