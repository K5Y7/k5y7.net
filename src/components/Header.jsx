import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
    );
}

export default Header;