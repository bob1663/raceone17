import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  AddCar,
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isCreatePostPage = location.pathname === "/add-post";
  const isAddCarPage = location.pathname === "/add-car";

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/posts" exact element={<News />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cars" exact element={<Cars />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/posts/:id" exact element={<Post />} />
          <Route path="/cars/:id" exact element={<CarPage />} />
          <Route path="/add-post" exact element={<CreatePost />} />
          <Route path="/add-car" exact element={<AddCar />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {!isLoginPage && !isCreatePostPage && !isAddCarPage && (
        <Footer className="foooter" />
      )}
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

export default App;
