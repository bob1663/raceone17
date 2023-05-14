import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { images } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogOut = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // ------------------------------------------------------
  const [activeLink, setActiveLink] = useState(getActiveLinkFromStorage());
  function getActiveLinkFromStorage() {
    const storedLink = localStorage.getItem("activeLink");
    return storedLink ? storedLink : "/";
  }
  // ------------------------------------------------------
  const location = useLocation();
  const isShopPage = location.pathname === "/shop";
  const isNewsPage = location.pathname === "/posts";
  const isPostPage = location.pathname === "/posts/:id";
  const isCreatePostPage = location.pathname === "/add-post";
  const isAddCarPage = location.pathname === "/add-car";
  // ------------------------------------------------------
  useEffect(() => {
    setActiveLink(location.pathname);
    localStorage.setItem("activeLink", location.pathname);
  }, [location.pathname]);
  // ------------------------------------------------------

  // ------------------------------------------------------
  return (
    <nav
      className={`app__navbar ${
        isPostPage ||
        isShopPage ||
        isNewsPage ||
        isCreatePostPage ||
        isAddCarPage
          ? "alt"
          : ""
      }`}
    >
      <div className="app__navbar-container">
        <Link
          to="/"
          className="app__navbar-logo"
          onClick={() => {
            setActiveLink("/");
            localStorage.setItem("activeLink", "/");
          }}
        >
          <h1>race</h1>
          <h1>one</h1>
          <h1>17</h1>
        </Link>
        <div
          className={`app__navbar-links ${
            isPostPage ||
            isShopPage ||
            isNewsPage ||
            isCreatePostPage ||
            isAddCarPage
              ? "alt"
              : ""
          }`}
        >
          <ul className="app__navbar-links_list">
            <li>
              <Link
                to="/"
                className={`app__navbar-links_item ${
                  activeLink === "/" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/");
                  localStorage.setItem("activeLink", "/");
                }}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`app__navbar-links_item ${
                  activeLink === "/shop" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/shop");
                  localStorage.setItem("activeLink", "/shop");
                }}
              >
                shop
              </Link>
            </li>
            <li>
              <Link
                to="/posts"
                className={`app__navbar-links_item ${
                  activeLink === "/posts" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/posts");
                  localStorage.setItem("activeLink", "/posts");
                }}
              >
                news
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`app__navbar-links_item ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/contact");
                  localStorage.setItem("activeLink", "/contact");
                }}
              >
                contact
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className={`app__navbar-links_item ${
                  activeLink === "/cars" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/cars");
                  localStorage.setItem("activeLink", "/cars");
                }}
                style={{ cursor: "pointer" }}
              >
                cars
              </Link>
            </li>
            {isAuth ? (
              <div className="admin-block">
                <h3
                  onClick={toggleDropdown}
                  className="app__navbar-links_item"
                  style={{ cursor: "pointer" }}
                >
                  ADMIN
                </h3>
                <div
                  className={`admin-block-dropdown ${
                    showDropdown ? "open" : "close"
                  }`}
                >
                  <Link
                    to="/add-post"
                    className={`app__navbar-links_item ${
                      activeLink === "/add-post" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/add-post");
                      localStorage.setItem("activeLink", "/add-post");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    add post
                  </Link>
                  <Link
                    to="/add-car"
                    className={`app__navbar-links_item ${
                      activeLink === "/add-car" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/add-car");
                      localStorage.setItem("activeLink", "/add-car");
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    add car
                  </Link>
                  <h3
                    onClick={onClickLogOut}
                    className="app__navbar-links_item"
                    style={{ cursor: "pointer" }}
                  >
                    log out
                  </h3>
                </div>
              </div>
            ) : (
              <li>
                <Link
                  to="/login"
                  className={`app__navbar-links_item ${
                    activeLink === "/login" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/login");
                    localStorage.setItem("activeLink", "/login");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  log in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FiMenu
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_links">
            <ul>
              <li>
                <Link
                  to="/"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/");
                    localStorage.setItem("activeLink", "/");
                    setToggleMenu(false);
                  }}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/shop" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/shop");
                    localStorage.setItem("activeLink", "/shop");
                    setToggleMenu(false);
                  }}
                >
                  shop
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/posts" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/posts");
                    localStorage.setItem("activeLink", "/posts");
                    setToggleMenu(false);
                  }}
                >
                  news
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/contact" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/contact");
                    localStorage.setItem("activeLink", "/contact");
                    setToggleMenu(false);
                  }}
                >
                  contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/cars" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/cars");
                    localStorage.setItem("activeLink", "/cars");
                    setToggleMenu(false);
                  }}
                >
                  cars
                </Link>
              </li>
              {isAuth ? (
                <div>
                  <li>
                    <Link
                      to="/add-post"
                      className={`app__navbar-smallscreen_links-item ${
                        activeLink === "/add-post" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveLink("/add-post");
                        localStorage.setItem("activeLink", "/add-post");
                        setToggleMenu(false);
                      }}
                    >
                      add post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-car"
                      className={`app__navbar-smallscreen_links-item ${
                        activeLink === "/add-car" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveLink("/add-car");
                        localStorage.setItem("activeLink", "/add-car");
                        setToggleMenu(false);
                      }}
                    >
                      add car
                    </Link>
                  </li>
                  <li>
                    <span
                      className="app__navbar-smallscreen_links-item"
                      onClick={() => {
                        onClickLogOut();
                        setToggleMenu(false);
                      }}
                    >
                      log out
                    </span>
                  </li>
                </div>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className={`app__navbar-smallscreen_links-item ${
                      activeLink === "/login" ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveLink("/login");
                      localStorage.setItem("activeLink", "/login");
                      setToggleMenu(false);
                    }}
                  >
                    log in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
