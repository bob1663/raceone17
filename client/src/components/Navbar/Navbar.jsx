import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { images } from "../../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
  const isPostPage = location.pathname === "/post";
  const isCreatePostPage = location.pathname === "/create-post";
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
                  }}
                >
                  cars
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/login" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/login");
                    localStorage.setItem("activeLink", "/login");
                  }}
                >
                  log in
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
