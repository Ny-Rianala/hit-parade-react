import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="nav">
            <Link to="/">
                <p className="navLink">🔥PopularSongs</p>
            </Link>
            <Link to="/styles">
                <p>🧡Styles</p>
            </Link>
            <Link to="/add">
               <p>👩Add</p>
            </Link>
            <Link to="/cart">
               <p>🛒Cart</p>
            </Link>
        </header>
    )
}

export default Header
