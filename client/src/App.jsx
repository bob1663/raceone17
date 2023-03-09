import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Cars, Contact, Home, News, Shop } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" exact element={<Shop />} />
          <Route path="/" exact element={<News />} />
          <Route path="/" exact element={<Contact />} />
          <Route path="/" exact element={<Cars />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
