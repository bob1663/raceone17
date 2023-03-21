import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

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
  const isNewsPage = location.pathname === "/news";
  // ------------------------------------------------------
  useEffect(() => {
    setActiveLink(location.pathname);
    localStorage.setItem("activeLink", location.pathname);
  }, [location.pathname]);
  // ------------------------------------------------------
  return (
    <nav className={`app__navbar ${isShopPage || isNewsPage ? "alt" : ""}`}>
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
            isShopPage || isNewsPage ? "alt" : ""
          }`}
        >
          <ul>
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
                to="/news"
                className={`app__navbar-links_item ${
                  activeLink === "/news" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLink("/news");
                  localStorage.setItem("activeLink", "/news");
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
              >
                cars
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/the_jfdl/"
                target="_blank"
                className="app__navbar-links_item"
              >
                by jfdl
              </a>
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
                  to="/news"
                  className={`app__navbar-smallscreen_links-item ${
                    activeLink === "/news" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveLink("/news");
                    localStorage.setItem("activeLink", "/news");
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
                <a
                  href="https://www.instagram.com/the_jfdl/"
                  target="_blank"
                  className="app__navbar-smallscreen_links-item"
                >
                  by jfdl
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
