import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>race</h1>
        <h1>one</h1>
        <h1>17</h1>
      </div>
      <div className="app__navbar-links">
        <ul>
          <li>
            <Link to="/" className="app__navbar-links_item">
              home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="app__navbar-links_item">
              shop
            </Link>
          </li>
          <li>
            <Link to="/news" className="app__navbar-links_item">
              news
            </Link>
          </li>
          <li>
            <Link to="/contact" className="app__navbar-links_item">
              contact
            </Link>
          </li>
          <li>
            <Link to="/cars" className="app__navbar-links_item">
              cars
            </Link>
          </li>
        </ul>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_links">
            <ul>
              <li>
                <Link to="/" className="app__navbar-smallscreen_links-item">
                  home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="app__navbar-smallscreen_links-item">
                  shop
                </Link>
              </li>
              <li>
                <Link to="/news" className="app__navbar-smallscreen_links-item">
                  news
                </Link>
              </li>
              <li>
                <Link to="/contact" className="app__navbar-smallscreen_links-item">
                  contact
                </Link>
              </li>
              <li>
                <Link to="/cars" className="app__navbar-smallscreen_links-item">
                  cars
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
