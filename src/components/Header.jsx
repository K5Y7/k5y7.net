import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
    );
}

export default Header;