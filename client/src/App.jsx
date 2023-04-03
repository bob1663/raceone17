import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  CarPage,
  Cars,
  Contact,
  CreatePost,
  Home,
  Login,
  News,
  Post,
  Shop,
} from "./pages";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isCreatePostPage = location.pathname === "/create-post";

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/news" exact element={<News />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cars" exact element={<Cars />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/post" exact element={<Post />} />
          <Route path="/test" exact element={<CarPage />} />
          <Route path="/create-post" exact element={<CreatePost />} />
        </Routes>
      </div>
      {!isLoginPage && !isCreatePostPage && <Footer className="foooter" />}
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
